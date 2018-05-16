import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MealService {

  constructor(private http: HttpClient) {
  }

  getMenuAll() {
    return this.http.get('/api/menu/all');
  }
  getMenu() {
    return this.http.get('/api/menu');
  }

  addFood(formVals) {
    return this.http.post('/api/menu/add', formVals);
  }

  updateFood(formVals) {
    return this.http.post('/api/menu/update/' + formVals.food_id, formVals);
  }

  deleteFood(food_id) {
    return this.http.get('/api/menu/delete/' + food_id);
  }

}
