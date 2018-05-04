import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MealService {

  constructor(private http: HttpClient) {
  }

  getMenu() {
    return this.http.get('/api/menu');
  }

  addFood(formVals) {
    return this.http.post('/api/menu/add', formVals);
  }

}
