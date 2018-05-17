import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PassportService } from '../../../../services/passport.service';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  messages: string[];
  user: User;
  allDataFetched = false;


  constructor(
    private passport: PassportService,
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user['user'];
      this.allDataFetched = true;
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

  onUpdate(form: NgForm) {
    const formVals = form.value;
    this.userService.updateUser(formVals).subscribe(res => {
      this.messages = res['messages'];
      if (this.messages.length === 0) {
        this.router.navigate(['/app/homepage']);
      }
    });
  }
}
