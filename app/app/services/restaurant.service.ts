import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurantsAll() {
    const restaurants = this.http.get('/api/restaurants/');
    console.log('In Request: ', restaurants);
    return restaurants;
  }

  getRestaurants() {
    return this.http.get('/api/restaurants/');
  }

  addRestaurant(formVals) {
    return this.http.post('/api/restaurants/', formVals);
  }

  updateRestaurant(formVals) {
    return this.http.put('/api/restaurants/' + formVals.id, formVals);
  }

  deleteRestaurant(restaurant_id) {
    return this.http.delete('/api/restaurants/' + restaurant_id);
  }
}
