import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AllergiesService {

  constructor(private http: HttpClient) {
  }

  getAllergies() {
    return this.http.get('/api/allergies/');
  }
}
