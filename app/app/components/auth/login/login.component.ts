import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PassportService } from '../../../services/passport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messages: string[];

  constructor(private passport: PassportService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.passport.login(email, password).subscribe((res) => {
      this.messages = res['messages'];
      if (this.messages.length === 0) {
        this.router.navigate(['app/homepage']);
      }
    });
  }
}
