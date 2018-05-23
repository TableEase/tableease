import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Meal } from '../models/meal';

@Injectable()
export class MealService {
  constructor(private http: HttpClient) {}

  getRestaurantMeals(id): Observable<Meal[]> {
    console.log('The Id: ', id);
    return this.http
      .get<{ meals: Meal[] }>('/api/company/restaurants/' + id + '/meals')
      .map((res) => (res.meals as Meal[]) || []);
  }

  getMenuAll(): Observable<Meal[]> {
    return this.http
      .get<{ meals: Meal[] }>('/api/meals/')
      .map((res) => (res.meals as Meal[]) || []);
  }
  getMenu() {
    return this.http.get('/api/meals/');
  }

  create(payload) {
    console.log('Add Food Form Vals: ', payload);
    return this.http.post('/api/meals/', payload);
  }

  updateFood(payload) {
    console.log('update Food Form Vals: ', payload);
    return this.http.put('/api/meals/' + payload.id, payload);
  }

  delete(mealId) {
    console.log('Delete Food: ', mealId);
    return this.http.delete('/api/meals/' + mealId);
  }
}
