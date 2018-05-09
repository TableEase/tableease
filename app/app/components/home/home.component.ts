import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  allDataFetched = false;


  constructor(private userservice: UserService) {
  }

  ngOnInit() {
    this.userservice.getUser().subscribe((data) => {
      this.user = data['user'];
      this.allDataFetched = true;
    });
  }

}
