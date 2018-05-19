import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Allergy } from '../models/allergy';

@Injectable()
export class AllergiesService {
  constructor(private http: HttpClient) {}

  getAllergies() {
    return this.http.get('/api/allergies/');
    // return this.http
    //   .get<{ allergies: Allergy[] }>('/api/allergies/')
    //   .map((res) => (res.allergies as Allergy[]) || []);
  }
}
