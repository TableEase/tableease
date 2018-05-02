import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../../../services/passport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private passport: PassportService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.passport.logout().subscribe((res) => {
      this.router.navigate(['/login']);
    });
  }
}
