import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { User } from '../models/user';

// ### TODO add notify user function
// import { NotifyService } from './notify.service';

// Keeps track of user at global level of Application
@Injectable()
export class AuthService {
  user$: Observable<User>;
  token: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.switchMap(user => {
      if (user) {
        console.log('In the USER', user);
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  signinUser(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['app/homepage']);
        this.afAuth.auth.currentUser.getIdToken().then((token: string) => {
          this.token = token;
        });
      })
      .catch(error => this.handleError(error));
  }

  signoutUser() {
    this.afAuth.auth.signOut().catch(error => this.handleError(error));
    this.router.navigate(['/login']);
  }

  // #### Email/Password Auth #### //
  emailSignup(email: string, password: string): Promise<void> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        return this.setUserDoc(user);
      })
      .catch(error => this.handleError(error));
  }

  // #### Update properties on the user document
  updateUserDoc(user: User, data: User) {
    return this.afs.doc(`users/${user.uid}`).update(data);
    // this.router.navigate(['/app/homepage']);
  }

  // #### TODO: Possibly remove. This Get Token Method would be used
  // to authenicate the user against all db queries.
  getToken() {
    this.afAuth.auth.currentUser
      .getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }

  // #### If error, console log and notify user
  private handleError(error) {
    console.error(error);
    // #### TODO add notify user function
    // this.notify.update(error.message, 'error');
  }

  private setUserDoc(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email
    };
    return userRef.set(data);
  }

  private checkAuth(user: User, allowedRoles: string[]): boolean {
    if (!user) {
      return false;
    }
    return false;
  }

  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber'];
    return this.checkAuth(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor'];
    return this.checkAuth(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuth(user, allowed);
  }

  activeUser() {
    return this.user$;
  }
}
