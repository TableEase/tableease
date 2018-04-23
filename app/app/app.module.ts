import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { NoopAnimationPlayer } from '@angular/animations';
import { environment } from '../environments/environment';

import { AllergiesService } from './services/allergies.service';
import { MealsService } from './services/meals.service';

import { ToggleOpenDirective } from './directives/toggle-open.directive';
import { AllergySelectDirective } from './directives/allergy-select.directive';
import { OpenCloseDirective } from './directives/open-close.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/application/nav/header/header.component';
import { NavbarComponent } from './components/application/nav/navbar/navbar.component';
import { SubnavComponent } from './components/application/nav/subnav/subnav.component';
import { SidenavComponent } from './components/application/nav/sidenav/sidenav.component';

import { SigninComponent } from './components/auth/signin/signin.component';
import { SignoutComponent } from './components/auth/signout/signout.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { Meal2Component } from './components/application/meal2/meal2.component';
import { Meal2ItemComponent } from './components/application/meal2/meal2-item/meal2-item.component';
import { Meal2DetailComponent } from './components/application/meal2/meal2-detail/meal2-detail.component';
import { Meal2FormComponent } from './components/application/meal2/meal2-form/meal2-form.component';

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
    ToggleOpenDirective,
    AllergySelectDirective,
    OpenCloseDirective,
    Meal2Component,
    Meal2ItemComponent,
    Meal2DetailComponent,
    Meal2FormComponent,
    HomeComponent,
    SplashComponent,
    ApplicationComponent,
    DashComponent,
    NotFoundComponent,
    RestaurantComponent,
    UserFormComponent,
    RestaurantFormComponent
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
