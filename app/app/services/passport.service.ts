import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PassportService {

  constructor(private http: HttpClient) {
  }

  login(formVals) {
    return this.http.post('/api/login', formVals);
  }

  signup(formVals) {
    return this.http.post('/api/signup', formVals);
  }
}
