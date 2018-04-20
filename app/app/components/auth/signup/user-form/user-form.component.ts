import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../../../../services/auth.service';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  signupForm: FormGroup;
  detailForm: FormGroup;

  // ### TODO Add Auth Service
  constructor(public fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
    // Second Step
    // this.detailForm = this.fb.group({
    //   catchPhrase: ['', Validators.required]
    // });
  }

  createForm() {
    this.signupForm = this.fb.group({
      first: ['', [Validators.required, Validators.minLength(2)]],
      last: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });
  }

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }

  onSignup() {
    return this.authService.emailSignup(this.email.value, this.password.value);
  }
}
