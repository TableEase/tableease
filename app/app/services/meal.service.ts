import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MealService {
  constructor(private http: HttpClient) {}

  getMenuAll() {
    return this.http.get('/api/meals/');
  }
  getMenu() {
    return this.http.get('/api/meals/');
  }

  addFood(formVals) {
    return this.http.post('/api/meals/', formVals);
  }

  updateFood(formVals) {
    return this.http.put('/api/meals/' + formVals.food_id, formVals);
  }

  deleteFood(food_id) {
    return this.http.delete('/api/meals/' + food_id);
  }
}
