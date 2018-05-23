import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Restaurant } from '../models/restaurants';

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurantsAll(): Observable<Restaurant[]> {
    return this.http
      .get<{ restaurants: Restaurant[] }>('/api/restaurants/')
      .map((res) => (res.restaurants as Restaurant[]) || []);
  }

  getRestaurants() {
    return this.http.get('/api/restaurants/');
  }

  addRestaurant(payload) {
    console.log('FormVals: ', payload);
    return this.http.post('/api/restaurants/', payload);
  }

  updateRestaurant(payload) {
    return this.http.put('/api/restaurants/' + payload.id, payload);
  }

  delete(id) {
    console.log('The Rest Id: ', id);
    return this.http.delete('/api/restaurants/' + id);
  }

  readCompRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get<{ restaurants: Restaurant[] }>('/api/company/restaurants')
      .map((res) => (res.restaurants as Restaurant[]) || []);
  }
}
