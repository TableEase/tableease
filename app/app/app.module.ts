import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NoopAnimationPlayer } from '@angular/animations';
import { environment } from '../environments/environment';

import { AllergiesService } from './services/allergies.service';
import { MealsService } from './services/meals.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/application/nav/header/header.component';
import { NavbarComponent } from './components/application/nav/navbar/navbar.component';
import { SubnavComponent } from './components/application/nav/subnav/subnav.component';
import { SidenavComponent } from './components/application/nav/sidenav/sidenav.component';

import { LoginComponent } from './components/auth/login/login.component';
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
import { PassportService } from './services/passport.service';
import { RestaurantService } from './services/restaurant.service';
import { MealService } from './services/meal.service';
import { MessagesComponent } from './components/form/messages/messages.component';

import { SliderModule } from 'primeng/slider';
import { AddressComponent } from './components/form/address/address.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/form/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SubnavComponent,
    SidenavComponent,
    LoginComponent,
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
    MealItemComponent,
    MessagesComponent,
    AddressComponent,
    MapComponent
  ],
  imports: [
    SliderModule,
    BrowserModule,
    ClarityModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAZuS7tPa0NZZ5citvjDqzFxJvKngke7Gc', libraries: ['places'] }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, UserService, PassportService, MealService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
