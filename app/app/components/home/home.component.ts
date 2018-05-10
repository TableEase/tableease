import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { PassportService } from '../../services/passport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  allDataFetched = false;


  constructor(private userservice: UserService, private passport: PassportService, private router: Router) {
  }

  ngOnInit() {
    this.userservice.getUser().subscribe((data) => {
      this.user = data['user'];
      this.allDataFetched = true;
    });
  }

  logout() {
    this.passport.logout().subscribe((res) => {
      this.router.navigate(['/login']);
    });

  }
}
