import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicationComponent } from './components/application/application.component';
import { DashComponent } from './components/application/dash/dash.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


import { RestaurantComponent } from './components/application/restaurant/restaurant.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { MealComponent } from './components/application/meal/meal.component';
import { SplashComponent } from './components/splash/splash.component';
import { UserFormComponent } from './components/auth/signup/user-form/user-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SplashComponent },
  {
    path: 'app',
    component: ApplicationComponent,
    children: [
      { path: 'homepage', component: DashComponent },
      { path: 'settings', component: UserFormComponent },
      { path: 'menu', component: MealComponent },
      { path: 'restaurant', component: RestaurantComponent },
      { path: '**', redirectTo: '/homepage', pathMatch: 'full' }
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
  // { path: 'meals', component: MealComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // declarations: [AuthGuard]
})
export class AppRoutingModule {
}

