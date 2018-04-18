import { Injectable, OnInit } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Meal } from '../models/meal';

@Injectable()
export class MealsService {
  private mealsCollection: AngularFirestoreCollection<Meal | string>;
  private mealDoc: AngularFirestoreDocument<Meal>;
  private restColl: AngularFirestoreCollection<any>;
  private restDoc: AngularFirestoreDocument<any>;
  meals$: Observable<Meal[]>;

  constructor(private db: AngularFirestore) {
    this.restDoc = db.doc('restaurants/le pain quotidien');

    this.mealsCollection = this.restDoc.collection('meals', ref =>
      ref.orderBy('name', 'asc')
    );

    this.meals$ = this.mealsCollection.snapshotChanges().map(changes => {
      return changes.map(obj => {
        const data = obj.payload.doc.data() as Meal;
        data.id = obj.payload.doc.id;
        // console.log('In Service', data);
        return data;
      });
    });
  }

  createMeal(meal: Meal) {
    this.mealsCollection = this.restDoc.collection('meals');
    this.mealsCollection.doc(`${meal.name}`).set(meal);
  }

  readMeals() {
    return this.meals$;
  }

  updateMeal(meal: Meal) {
    this.mealDoc = this.restDoc.collection('meals').doc(`${meal.id}`);
    this.mealDoc.update(meal);
  }

  deleteMeal(meal: Meal) {
    this.mealDoc = this.restDoc.collection('meals').doc(`${meal.id}`);
    this.mealDoc.delete();
  }
}
