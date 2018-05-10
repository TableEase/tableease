import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { roles } from '../../../models/roles';
import { PassportService } from '../../../services/passport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  messages: string[];

  constructor(
    private fb: FormBuilder,
    private passport: PassportService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const formVals = form.value;
    this.passport.signup(formVals).subscribe(res => {
      this.messages = res['messages'];
      if (this.messages.length === 0) {
        this.router.navigate(['/login']);
      }
    });
  }

  // setDetails(user: User) {
  //   return this.userService.updateUser(user, this.detailForm.getRawValue());
  // }
  //
  // get email() {
  //   return this.signupForm.get('email');
  // }
  // get password() {
  //   return this.signupForm.get('password');
  // }
  // get first() {
  //   return this.detailForm.get('name').get('first');
  // }
  // get last() {
  //   return this.detailForm.get('name').get('last');
  // }
}
