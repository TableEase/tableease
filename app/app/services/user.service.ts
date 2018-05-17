import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  createUser(user: User) {
  }

  getUser() {
    return this.http.get('/api/users');
  }

  updateUser(formVals) {
    return this.http.post('/api/signup/update', formVals);
  }

  deleteUser(user: User) {
  }
}
