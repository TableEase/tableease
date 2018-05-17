// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Router
// } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
//
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
// import { AuthService } from '../services/auth.service';
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}
//
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return (
//       this.authService.user$
//         .take(1)
//         //   .map(user => !!(user && user.catchPhrase))
//         .map(user => !!user)
//         .do(loggedIn => {
//           if (!loggedIn) {
//             // this.notify.update('You must be logged in and have a atch phrase!', 'error');
//             this.router.navigate(['/login']);
//           }
//         })
//     );
//   }
// }
