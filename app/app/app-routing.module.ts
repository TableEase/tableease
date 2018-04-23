import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MealComponent } from './components/meal/meal.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicationComponent } from './components/application/application.component';
import { Meal2Component } from './components/application/meal2/meal2.component';
import { DashComponent } from './components/application/dash/dash.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './private/auth.guard';
import { SignupComponent } from './components/auth/signup/signup.component';
import { RestaurantFormComponent } from './components/application/restaurant/restaurant-form/restaurant-form.component';
// import { AuthGuard } from '../../private/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restaurant', component: RestaurantFormComponent },
  {
    path: 'app',
    canActivate: [AuthGuard],
    component: ApplicationComponent,
    children: [
      { path: 'homepage', component: DashComponent },
      { path: 'menu', component: Meal2Component },
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
export class AppRoutingModule {}
