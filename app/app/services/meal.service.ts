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
      .get<{ meals: Meal[] }>(`/api/company/restaurants/${id}/meals`)
      .map((res) => (res.meals as Meal[]) || []);
  }

  getMenuAll() {
    return this.http.get('/api/meals/');
  }
  getMenu() {
    return this.http.get('/api/meals/');
  }

  addFood(formVals) {
    console.log('Add Food Form Vals: ', formVals);
    return this.http.post('/api/meals/', formVals);
  }

  updateFood(payload) {
    console.log('update Food Form Vals: ', payload);
    return this.http.put(`/api/meals/${payload.id}`, payload);
  }

  deleteFood(food_id) {
    console.log('Delete Food: ', food_id);
    return this.http.delete('/api/meals/' + food_id);
  }
}
