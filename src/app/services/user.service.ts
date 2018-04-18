import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';
import { User } from '../models/user';

@Injectable()
export class UserService {
  user$: Observable<User>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.user$ = this.authService.activeUser();
  }

  createUser(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email
    };
    return userRef.set(data);
  }

  readUser(user: User) {}

  updateUser(user: User, data: User) {
    return this.afs.doc(`users/${user.uid}`).update(data);
  }

  deleteUser(user: User) {}
}
