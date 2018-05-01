import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';

import { NoopAnimationPlayer } from '@angular/animations';
import { environment } from '../environments/environment';

import { AllergiesService } from './services/allergies.service';
import { MealsService } from './services/meals.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/application/nav/header/header.component';
import { NavbarComponent } from './components/application/nav/navbar/navbar.component';
import { SubnavComponent } from './components/application/nav/subnav/subnav.component';
import { SidenavComponent } from './components/application/nav/sidenav/sidenav.component';

import { SigninComponent } from './components/auth/signin/signin.component';
import { SignoutComponent } from './components/auth/signout/signout.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { MealComponent } from './components/application/meal/meal.component';
import { MealDetailComponent } from './components/application/meal/meal-detail/meal-detail.component';
import { MealFormComponent } from './components/application/meal/meal-form/meal-form.component';
import { MealItemComponent } from './components/application/meal/meal-item/meal-item.component';

import { HomeComponent } from './components/home/home.component';
import { SplashComponent } from './components/splash/splash.component';
import { ApplicationComponent } from './components/application/application.component';
import { DashComponent } from './components/application/dash/dash.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './private/auth.guard';
import { RestaurantComponent } from './components/application/restaurant/restaurant.component';
import { RestaurantFormComponent } from './components/application/restaurant/restaurant-form/restaurant-form.component';
import { UserService } from './services/user.service';
import { UserFormComponent } from './components/auth/signup/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SubnavComponent,
    SidenavComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent,
    HomeComponent,
    SplashComponent,
    ApplicationComponent,
    DashComponent,
    NotFoundComponent,
    RestaurantComponent,
    UserFormComponent,
    RestaurantFormComponent,
    MealComponent,
    MealDetailComponent,
    MealFormComponent,
    MealItemComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'tableease'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
