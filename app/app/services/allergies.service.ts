import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Allergy } from '../models/allergy';

@Injectable()
export class AllergiesService {
  allergies$: Observable<Allergy[]>;
  private allergiesCollection: AngularFirestoreCollection<Allergy>;
  private allergiesDoc: AngularFirestoreDocument<Allergy>;

  constructor(private db: AngularFirestore) {
    this.allergiesCollection = db.collection('allergies', ref =>
      ref.orderBy('name', 'asc')
    );

    this.allergies$ = this.allergiesCollection
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Allergy;
          data.id = a.payload.doc.id;
          return data;
        });
      });
  }

  readAllergies() {
    return this.allergies$;
  }
}
