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

  updateUser(user: User, data: User) {
  }

  deleteUser(user: User) {
  }
}
