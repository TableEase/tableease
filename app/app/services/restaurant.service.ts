import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Restaurant } from '../models/restaurants';

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurantsAll() {
    const restaurants = this.http.get('/api/restaurants/');
    return restaurants;
  }

  getRestaurants() {
    return this.http.get('/api/restaurants/');
  }

  addRestaurant(formVals) {
    console.log('FormVals: ', formVals);
    return this.http.post('/api/restaurants/', formVals);
  }

  updateRestaurant(formVals) {
    return this.http.put('/api/restaurants/' + formVals.id, formVals);
  }

  deleteRestaurant(restaurant_id) {
    return this.http.delete('/api/restaurants/' + restaurant_id);
  }

  readCompRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get<{ restaurants: Restaurant[] }>('/api/company/restaurants')
      .map((res) => (res.restaurants as Restaurant[]) || []);
  }
}
