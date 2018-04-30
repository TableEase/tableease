import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { roles } from '../../../models/roles';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  detailForm: FormGroup;
  roles: string[] = roles;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService
  ) {

  }

  ngOnInit() {}

  createForm() {
    this.signupForm = this.fb.group({
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

    this.detailForm = this.fb.group({
      name: this.fb.group({
        first: ['', [Validators.required]],
        last: ['', [Validators.required]]
      }),
      address: this.fb.group({
        street: '',
        apartment: '',
        city: '',
        state: '',
        zip: ''
      }),
      roles: '',
      phone: ['', [Validators.required]],
      active: true
    });
  }

  onSignup() {
    this.authService.emailSignup(this.email.value, this.password.value);
  }

  setDetails(user: User) {
    return this.userService.updateUser(user, this.detailForm.getRawValue());
  }

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get first() {
    return this.detailForm.get('name').get('first');
  }
  get last() {
    return this.detailForm.get('name').get('last');
  }
}
