import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PassportService } from '../../../services/passport.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  messages: string[];
  user: User;


  constructor(
    private passport: PassportService,
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      console.log(user);
      this.user = user['user'];
    });
  }

  onSignup(form: NgForm) {
    const formVals = form.value;
    this.passport.signup(formVals).subscribe(res => {
      this.messages = res['messages'];
      if (this.messages.length === 0) {
        this.router.navigate(['/app/homepage']);
      }
    });
  }
}
