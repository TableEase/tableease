import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) {
  }

  getRestaurants() {
    return this.http.get('/api/restaurant');
  }

  addRestaurant(formVals) {
    return this.http.post('/api/restaurant/add', formVals);
  }

  updateRestaurant(formVals) {
    return this.http.post('/api/restaurant/update/' + formVals.id, formVals);
  }

  deleteRestaurant(restaurant_id) {
    return this.http.get('/api/restaurant/delete/' + restaurant_id);
  }
}
