webpackJsonp(["main"],{

/***/ "./app/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./app/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var signin_component_1 = __webpack_require__("./app/app/components/auth/signin/signin.component.ts");
var home_component_1 = __webpack_require__("./app/app/components/home/home.component.ts");
var application_component_1 = __webpack_require__("./app/app/components/application/application.component.ts");
var meal2_component_1 = __webpack_require__("./app/app/components/application/meal2/meal2.component.ts");
var dash_component_1 = __webpack_require__("./app/app/components/application/dash/dash.component.ts");
var not_found_component_1 = __webpack_require__("./app/app/components/not-found/not-found.component.ts");
var auth_guard_1 = __webpack_require__("./app/app/private/auth.guard.ts");
var restaurant_form_component_1 = __webpack_require__("./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.ts");
var signup_component_1 = __webpack_require__("./app/app/components/auth/signup/signup.component.ts");
// import { AuthGuard } from '../../private/auth.guard';
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'restaurant', component: restaurant_form_component_1.RestaurantFormComponent },
    {
        path: 'app',
        canActivate: [auth_guard_1.AuthGuard],
        component: application_component_1.ApplicationComponent,
        children: [
            { path: 'homepage', component: dash_component_1.DashComponent },
            { path: 'menu', component: meal2_component_1.Meal2Component },
            { path: '**', redirectTo: '/homepage', pathMatch: 'full' }
        ]
    },
    { path: 'not-found', component: not_found_component_1.NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
    // { path: 'meals', component: MealComponent, canActivate: [AuthGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
            // declarations: [AuthGuard]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./app/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./app/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app/app.component.html"),
            styles: [__webpack_require__("./app/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var angular_1 = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var angularfire2_1 = __webpack_require__("./node_modules/angularfire2/index.js");
var firestore_1 = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var app_routing_module_1 = __webpack_require__("./app/app/app-routing.module.ts");
var environment_1 = __webpack_require__("./app/environments/environment.ts");
var app_component_1 = __webpack_require__("./app/app/app.component.ts");
var header_component_1 = __webpack_require__("./app/app/components/application/nav/header/header.component.ts");
var navbar_component_1 = __webpack_require__("./app/app/components/application/nav/navbar/navbar.component.ts");
var subnav_component_1 = __webpack_require__("./app/app/components/application/nav/subnav/subnav.component.ts");
var sidenav_component_1 = __webpack_require__("./app/app/components/application/nav/sidenav/sidenav.component.ts");
var signin_component_1 = __webpack_require__("./app/app/components/auth/signin/signin.component.ts");
var signout_component_1 = __webpack_require__("./app/app/components/auth/signout/signout.component.ts");
var signup_component_1 = __webpack_require__("./app/app/components/auth/signup/signup.component.ts");
var meal2_component_1 = __webpack_require__("./app/app/components/application/meal2/meal2.component.ts");
var meal2_item_component_1 = __webpack_require__("./app/app/components/application/meal2/meal2-item/meal2-item.component.ts");
var meal2_detail_component_1 = __webpack_require__("./app/app/components/application/meal2/meal2-detail/meal2-detail.component.ts");
var meal2_form_component_1 = __webpack_require__("./app/app/components/application/meal2/meal2-form/meal2-form.component.ts");
var home_component_1 = __webpack_require__("./app/app/components/home/home.component.ts");
var splash_component_1 = __webpack_require__("./app/app/components/splash/splash.component.ts");
var application_component_1 = __webpack_require__("./app/app/components/application/application.component.ts");
var dash_component_1 = __webpack_require__("./app/app/components/application/dash/dash.component.ts");
var not_found_component_1 = __webpack_require__("./app/app/components/not-found/not-found.component.ts");
var auth_service_1 = __webpack_require__("./app/app/services/auth.service.ts");
var auth_guard_1 = __webpack_require__("./app/app/private/auth.guard.ts");
var restaurant_component_1 = __webpack_require__("./app/app/components/application/restaurant/restaurant.component.ts");
var restaurant_form_component_1 = __webpack_require__("./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.ts");
var user_service_1 = __webpack_require__("./app/app/services/user.service.ts");
var user_form_component_1 = __webpack_require__("./app/app/components/auth/signup/user-form/user-form.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                navbar_component_1.NavbarComponent,
                subnav_component_1.SubnavComponent,
                sidenav_component_1.SidenavComponent,
                signin_component_1.SigninComponent,
                signout_component_1.SignoutComponent,
                signup_component_1.SignupComponent,
                meal2_component_1.Meal2Component,
                meal2_item_component_1.Meal2ItemComponent,
                meal2_detail_component_1.Meal2DetailComponent,
                meal2_form_component_1.Meal2FormComponent,
                home_component_1.HomeComponent,
                splash_component_1.SplashComponent,
                application_component_1.ApplicationComponent,
                dash_component_1.DashComponent,
                not_found_component_1.NotFoundComponent,
                restaurant_component_1.RestaurantComponent,
                user_form_component_1.UserFormComponent,
                restaurant_form_component_1.RestaurantFormComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular_1.ClarityModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase, 'tableease'),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [auth_service_1.AuthService, auth_guard_1.AuthGuard, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./app/app/components/application/application.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/application.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\r\n  <app-header></app-header>\r\n  <div class=\"content-container\">\r\n    <div class=\"content-area\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <clr-vertical-nav [clrVerticalNavCollapsible]=\"true\" [(clrVerticalNavCollapsed)]=\"collapsed\">\r\n      <app-sidenav></app-sidenav>\r\n    </clr-vertical-nav>\r\n  </div>\r\n</clr-main-container>"

/***/ }),

/***/ "./app/app/components/application/application.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent() {
    }
    ApplicationComponent.prototype.ngOnInit = function () { };
    ApplicationComponent = __decorate([
        core_1.Component({
            selector: 'app-application',
            template: __webpack_require__("./app/app/components/application/application.component.html"),
            styles: [__webpack_require__("./app/app/components/application/application.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
exports.ApplicationComponent = ApplicationComponent;


/***/ }),

/***/ "./app/app/components/application/dash/dash.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/dash/dash.component.html":
/***/ (function(module, exports) {

module.exports = "<p>This component is COMING SOON!</p>"

/***/ }),

/***/ "./app/app/components/application/dash/dash.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DashComponent = /** @class */ (function () {
    function DashComponent() {
    }
    DashComponent.prototype.ngOnInit = function () {
    };
    DashComponent = __decorate([
        core_1.Component({
            selector: 'app-dash',
            template: __webpack_require__("./app/app/components/application/dash/dash.component.html"),
            styles: [__webpack_require__("./app/app/components/application/dash/dash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashComponent);
    return DashComponent;
}());
exports.DashComponent = DashComponent;


/***/ }),

/***/ "./app/app/components/application/meal2/meal2-detail/meal2-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/meal2/meal2-detail/meal2-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  meal2-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/application/meal2/meal2-detail/meal2-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Meal2DetailComponent = /** @class */ (function () {
    function Meal2DetailComponent() {
    }
    Meal2DetailComponent.prototype.ngOnInit = function () {
    };
    Meal2DetailComponent = __decorate([
        core_1.Component({
            selector: 'app-meal2-detail',
            template: __webpack_require__("./app/app/components/application/meal2/meal2-detail/meal2-detail.component.html"),
            styles: [__webpack_require__("./app/app/components/application/meal2/meal2-detail/meal2-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Meal2DetailComponent);
    return Meal2DetailComponent;
}());
exports.Meal2DetailComponent = Meal2DetailComponent;


/***/ }),

/***/ "./app/app/components/application/meal2/meal2-form/meal2-form.component.css":
/***/ (function(module, exports) {

module.exports = ".drop {\r\n  margin-bottom: 0.1rem;\r\n}\r\n"

/***/ }),

/***/ "./app/app/components/application/meal2/meal2-form/meal2-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" [formGroup]=\"mealForm\" (ngSubmit)=\"onSubmit()\" [hidden]=\"submitted\">\r\n\r\n  <!-- <div *ngIf=\"allergies$ | async; else loading\"> -->\r\n\r\n  <section class=\"form-block\">\r\n\r\n    <div class=\"form-group row\">\r\n\r\n      <div class=\"col-sm-2 col-xs-12\">\r\n        <label for=\"mealName\">Title</label>\r\n      </div>\r\n\r\n      <div class=\"col-sm-9 col-xs-11 push-xs-1\">\r\n        <label for=\"mealName\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-sm\">\r\n          <input id=\"mealName\" type=\"text\" size=\"45\" formControlName=\"name\">\r\n          <span class=\"tooltip-content\">\r\n            Name is required.\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n\r\n      <div class=\"col-sm-2 col-xs-12\">\r\n        <label for=\"description\">Description</label>\r\n      </div>\r\n\r\n      <div class=\"col-sm-9 col-xs-11 push-xs-1\">\r\n        <label for=\"description\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-sm\">\r\n          <textarea name=\"description\" id=\"description\" rows=\"2\" cols=\"45\" formControlName=\"description\"></textarea>\r\n          <span class=\"tooltip-content\">\r\n            description code is required.\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n\r\n      <div class=\"col-xs-2\">\r\n        <label for=\"course\">Course</label>\r\n      </div>\r\n\r\n      <div class=\"col-xs-4 push-sm-1\">\r\n        <label for=\"course\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-sm\">\r\n          <input id=\"course\" type=\"text\" size=\"10\" formControlName=\"course\">\r\n          <span class=\"tooltip-content\">\r\n            course is required.\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-xs-2 push-sm-1\">\r\n        <label for=\"price\">Price</label>\r\n      </div>\r\n\r\n      <div class=\"col-xs-4\">\r\n        <label for=\"price\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-sm\">\r\n          <input id=\"price\" type=\"text\" size=\"10\" formControlName=\"price\">\r\n          <span class=\"tooltip-content\">\r\n            price is required.\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n\r\n      <div class=\"col-xs-2\">\r\n        <label for=\"calories\">Calories</label>\r\n      </div>\r\n\r\n      <div class=\"col-xs-4 push-xs-1\">\r\n        <label for=\"calories\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-sm\">\r\n          <input id=\"calories\" type=\"text\" size=\"10\" formControlName=\"calories\">\r\n          <span class=\"tooltip-content\">\r\n            Calories is required.\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </section>\r\n\r\n  <div *ngIf=\"allergies$ | async; else loading\">\r\n\r\n    <section class=\"form-block\">\r\n      <div formArrayName=\"allergies\">\r\n\r\n        <div class=\"form-group row drop\">\r\n          <div class=\"col-xs-12\">\r\n            <label for=\"allergy\">Allergies</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-xs-4\" *ngFor=\"let allergy of allergies.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"checkbox-inline center\">\r\n              <input [id]=\"allergiesArray[i].name\" type=\"checkbox\" formControlName=\"active\">\r\n              <label [for]=\"allergiesArray[i].name\">{{allergiesArray[i].name}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n  <ng-template #loading>Loading&hellip;</ng-template>\r\n\r\n</form>"

/***/ }),

/***/ "./app/app/components/application/meal2/meal2-form/meal2-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
var meals_service_1 = __webpack_require__("./app/app/services/meals.service.ts");
var allergies_service_1 = __webpack_require__("./app/app/services/allergies.service.ts");
var submit_form_service_1 = __webpack_require__("./app/app/services/submit-form.service.ts");
var allergy_1 = __webpack_require__("./app/app/models/allergy.ts");
var Meal2FormComponent = /** @class */ (function () {
    function Meal2FormComponent(mealsService, allergiesService, submitService, fb) {
        this.mealsService = mealsService;
        this.allergiesService = allergiesService;
        this.submitService = submitService;
        this.fb = fb;
        this.ngUnsubscribe = new Subject_1.Subject();
        this.allergiesArray = [];
        this.createForm();
    }
    Meal2FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allergies$ = this.allergiesService.readAllergies().map(function (array) {
            return array.map(function (obj) {
                obj.active = false;
                return obj;
            });
        });
        this.allergies$.takeUntil(this.ngUnsubscribe).subscribe(function (allergies) {
            _this.allergiesArray = allergies;
            if (_this.meal) {
                allergies = allergies.reduce(function (acc, curr) {
                    _this.meal.allergies.map(function (i) {
                        if (curr.name === i.name) {
                            if (i.active !== false) {
                                curr.active = true;
                            }
                        }
                        return i;
                    });
                    acc.push(curr);
                    return acc;
                }, []);
                _this.setAllergies(allergies);
            }
            _this.setAllergies(allergies);
        });
        this.clearForm$ = this.submitService.clearForm$;
        this.clearForm$.takeUntil(this.ngUnsubscribe).subscribe(function (val) {
            if (val) {
                _this.clearForm();
            }
        });
    };
    Meal2FormComponent.prototype.ngOnChanges = function () {
        this.rebuildForm();
    };
    Meal2FormComponent.prototype.ngOnDestroy = function () {
        var mealToSend = this.mealForm.getRawValue();
        if (this.mealForm.valid &&
            (this.submitService.update === true || this.submitService.create === true)) {
            this.submitService.formMeal$.next(mealToSend);
        }
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    Meal2FormComponent.prototype.createForm = function () {
        this.mealForm = this.fb.group({
            name: '',
            description: '',
            course: '',
            price: '',
            calories: '',
            id: '',
            allergies: this.fb.array([])
        });
    };
    Meal2FormComponent.prototype.rebuildForm = function () {
        this.mealForm.reset({
            name: this.meal.name,
            description: this.meal.description,
            course: this.meal.course,
            price: this.meal.price,
            calories: this.meal.calories,
            id: this.meal.id,
            allergies: this.allergies[0] || new allergy_1.Allergy()
        });
    };
    Meal2FormComponent.prototype.clearForm = function () {
        this.mealForm.reset();
    };
    Meal2FormComponent.prototype.setAllergies = function (allergies) {
        var _this = this;
        var allergyFGs = allergies.map(function (allergy) { return _this.fb.group(allergy); });
        var allergyFormArray = this.fb.array(allergyFGs);
        this.mealForm.setControl('allergies', allergyFormArray);
    };
    Meal2FormComponent.prototype.checkAllergies = function (allergies) {
        return allergies.map(function (allergy) { });
    };
    Object.defineProperty(Meal2FormComponent.prototype, "allergies", {
        get: function () {
            return this.mealForm.get('allergies');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Meal2FormComponent.prototype, "meal", void 0);
    Meal2FormComponent = __decorate([
        core_1.Component({
            selector: 'app-meal2-form',
            template: __webpack_require__("./app/app/components/application/meal2/meal2-form/meal2-form.component.html"),
            styles: [__webpack_require__("./app/app/components/application/meal2/meal2-form/meal2-form.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [meals_service_1.MealsService,
            allergies_service_1.AllergiesService,
            submit_form_service_1.SubmitFormService,
            forms_1.FormBuilder])
    ], Meal2FormComponent);
    return Meal2FormComponent;
}());
exports.Meal2FormComponent = Meal2FormComponent;


/***/ }),

/***/ "./app/app/components/application/meal2/meal2-item/meal2-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/meal2/meal2-item/meal2-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  meal2-item works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/application/meal2/meal2-item/meal2-item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Meal2ItemComponent = /** @class */ (function () {
    function Meal2ItemComponent() {
    }
    Meal2ItemComponent.prototype.ngOnInit = function () {
    };
    Meal2ItemComponent = __decorate([
        core_1.Component({
            selector: 'app-meal2-item',
            template: __webpack_require__("./app/app/components/application/meal2/meal2-item/meal2-item.component.html"),
            styles: [__webpack_require__("./app/app/components/application/meal2/meal2-item/meal2-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Meal2ItemComponent);
    return Meal2ItemComponent;
}());
exports.Meal2ItemComponent = Meal2ItemComponent;


/***/ }),

/***/ "./app/app/components/application/meal2/meal2.component.css":
/***/ (function(module, exports) {

module.exports = ".flexMe {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n"

/***/ }),

/***/ "./app/app/components/application/meal2/meal2.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"meals$ | async; else loading\">\r\n  <button class=\"btn btn-primary\" (click)=\"addModal=true\">Add Item</button>\r\n\r\n  <clr-stack-view *ngFor=\"let course of courses; let ci = index\">\r\n\r\n    <clr-stack-header class=\"cap\">\r\n      {{course}}\r\n    </clr-stack-header>\r\n\r\n    <div *ngFor=\"let meal of meals\">\r\n\r\n      <clr-stack-block *ngIf=\"meal.course == course\">\r\n\r\n        <clr-stack-label>{{meal.name}}</clr-stack-label>\r\n        <div class=\"flexMe\">\r\n          <clr-stack-content>{{meal.description}}</clr-stack-content>\r\n          <clr-stack-content>\r\n            <a (click)=\"editModal = true; onReadMeal(meal)\">\r\n              <clr-icon shape=\"pencil\"></clr-icon>\r\n            </a>\r\n          </clr-stack-content>\r\n        </div>\r\n\r\n        <clr-stack-block>\r\n          <clr-stack-label>Allergies</clr-stack-label>\r\n          <clr-stack-content *ngFor=\"let allergy of meal.allergies; let ai = index\">\r\n            <span *ngIf=\"allergy.active\">\r\n              {{(meal.allergies.length >= 1) ? (ai === (meal.allergies.length -1)) ? allergy.name : allergy.name + ', ' : allergy.name}}\r\n            </span>\r\n          </clr-stack-content>\r\n        </clr-stack-block>\r\n\r\n        <clr-stack-block>\r\n          <clr-stack-label>Price</clr-stack-label>\r\n          <clr-stack-content>${{meal.price}}</clr-stack-content>\r\n        </clr-stack-block>\r\n\r\n        <clr-stack-block>\r\n          <clr-stack-label>Course</clr-stack-label>\r\n          <clr-stack-content>{{meal.course}}</clr-stack-content>\r\n        </clr-stack-block>\r\n\r\n        <clr-stack-block>\r\n          <clr-stack-label>Calories</clr-stack-label>\r\n          <clr-stack-content>{{meal.calories}}cal</clr-stack-content>\r\n        </clr-stack-block>\r\n\r\n      </clr-stack-block>\r\n\r\n    </div>\r\n\r\n  </clr-stack-view>\r\n\r\n</div>\r\n\r\n<ng-template #loading>Loading&hellip;</ng-template>\r\n\r\n<clr-modal [(clrModalOpen)]=\"editModal\">\r\n  <h3 class=\"modal-title\" *ngIf=\"editModal\">{{mealToEdit.name}}</h3>\r\n  <div class=\"modal-body\">\r\n    <app-meal2-form *ngIf=\"editModal\" [meal]=\"mealToEdit\"></app-meal2-form>\r\n  </div>\r\n  <div class=\"modal-footer pr-0\">\r\n    <button type=\"button\" class=\"btn btn-outline btn-sm\" (click)=\"editModal = false; onUpdateMeal($event)\">Update</button>\r\n    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"editModal = false; doubleCheck=true\">Delete</button>\r\n  </div>\r\n</clr-modal>\r\n\r\n<clr-modal [(clrModalOpen)]=\"doubleCheck\">\r\n  <h3 class=\"modal-title\">Confirm delete confirmation</h3>\r\n  <h4 class=\"modal-body\" *ngIf=\"doubleCheck\">Are you sure you want to remove {{mealToEdit.name}}?</h4>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"doubleCheck=false; editModal=true\">Return</button>\r\n    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"doubleCheck=false; onDeleteMeal(mealToEdit)\">Confirm</button>\r\n  </div>\r\n</clr-modal>\r\n\r\n<clr-modal [(clrModalOpen)]=\"addModal\">\r\n  <h3 class=\"modal-title\" *ngIf=\"addModal\">Add A Dish</h3>\r\n  <div class=\"modal-body\">\r\n    <app-meal2-form *ngIf=\"addModal\"></app-meal2-form>\r\n  </div>\r\n  <div class=\"modal-footer pr-0\">\r\n    <button type=\"button\" class=\"btn btn-outline btn-sm\" (click)=\"addModal = false; onCreateMeal()\">Submit</button>\r\n    <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"onClear()\">Clear</button>\r\n  </div>\r\n</clr-modal>"

/***/ }),

/***/ "./app/app/components/application/meal2/meal2.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
var meals_service_1 = __webpack_require__("./app/app/services/meals.service.ts");
var allergies_service_1 = __webpack_require__("./app/app/services/allergies.service.ts");
var submit_form_service_1 = __webpack_require__("./app/app/services/submit-form.service.ts");
var Meal2Component = /** @class */ (function () {
    function Meal2Component(mealService, allergiesService, submitService) {
        this.mealService = mealService;
        this.allergiesService = allergiesService;
        this.submitService = submitService;
        this.ngUnsubscribe = new Subject_1.Subject();
        this.meals = [];
        this.courses = [];
    }
    Meal2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.meals$ = this.mealService.readMeals();
        // console.log(this.meals$);
        this.mealSub = this.meals$
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (meals) {
            _this.meals = meals;
            _this.courses = meals
                .map(function (meal) {
                return meal.course;
            })
                .slice()
                .sort(function (a, b) {
                return a > b;
            })
                .reduce(function (a, b) {
                if (a.slice(-1)[0] !== b) {
                    a.push(b);
                }
                return a;
            }, []);
        });
    };
    Meal2Component.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    Meal2Component.prototype.onCreateMeal = function () {
        this.submitService.create = true;
    };
    Meal2Component.prototype.onReadMeal = function (meal) {
        this.mealToEdit = meal;
    };
    Meal2Component.prototype.onUpdateMeal = function (event) {
        if (event.type === 'click') {
            this.submitService.update = true;
        }
    };
    Meal2Component.prototype.onDeleteMeal = function (meal) {
        this.mealService.deleteMeal(meal);
    };
    Meal2Component.prototype.onClear = function () {
        this.submitService.clearForm$.next(true);
    };
    Meal2Component = __decorate([
        core_1.Component({
            selector: 'app-meal2',
            template: __webpack_require__("./app/app/components/application/meal2/meal2.component.html"),
            styles: [__webpack_require__("./app/app/components/application/meal2/meal2.component.css")],
            providers: [meals_service_1.MealsService, allergies_service_1.AllergiesService, submit_form_service_1.SubmitFormService]
        }),
        __metadata("design:paramtypes", [meals_service_1.MealsService,
            allergies_service_1.AllergiesService,
            submit_form_service_1.SubmitFormService])
    ], Meal2Component);
    return Meal2Component;
}());
exports.Meal2Component = Meal2Component;


/***/ }),

/***/ "./app/app/components/application/nav/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/nav/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <header class=\"header-1\">\r\n  <div class=\"branding\">\r\n    <a href=\"...\" class=\"nav-link\">\r\n      <clr-icon shape=\"vm-bug\"></clr-icon>\r\n      <span class=\"title\">Project Clarity</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"header-nav\">\r\n    <a href=\"javascript://\" class=\"active nav-link nav-text\">Dashboard</a>\r\n    <a href=\"javascript://\" class=\"nav-link nav-text\">Interactive Analytics</a>\r\n  </div>\r\n  <div class=\"header-actions\">\r\n    <a href=\"...\" class=\"nav-link nav-text\">\r\n      Log Out\r\n    </a>\r\n  </div>\r\n</header> -->\r\n\r\n<header class=\"header-1\">\r\n  <div class=\"header-nav\">\r\n    <div class=\"branding\">\r\n      <a href=\"...\" class=\"nav-link\">\r\n        <clr-icon shape=\"vm-bug\"></clr-icon>\r\n        <span class=\"title\">Project Clarity</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"header-nav\">\r\n      <a href=\"javascript://\" class=\"active nav-link nav-text\">Dashboard</a>\r\n      <a href=\"javascript://\" class=\"nav-link nav-text\">Interactive Analytics</a>\r\n    </div>\r\n    <div class=\"header-actions\">\r\n      <a class=\"nav-link nav-text\" (click)=\"logout()\">\r\n        Log Out\r\n      </a>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./app/app/components/application/nav/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./app/app/services/auth.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.logout = function () {
        return this.authService.signoutUser();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./app/app/components/application/nav/header/header.component.html"),
            styles: [__webpack_require__("./app/app/components/application/nav/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./app/app/components/application/nav/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/nav/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  navbar works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/application/nav/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./app/app/components/application/nav/navbar/navbar.component.html"),
            styles: [__webpack_require__("./app/app/components/application/nav/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./app/app/components/application/nav/sidenav/sidenav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/nav/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<a clrVerticalNavLink routerLink=\"homepage\" routerLinkActive=\"active\">\r\n  <clr-icon clrVerticalNavIcon shape=\"user\"></clr-icon>\r\n  Dashboard\r\n</a>\r\n<a clrVerticalNavLink routerLink=\"menu\" routerLinkActive=\"active\">\r\n  <clr-icon clrVerticalNavIcon shape=\"bolt\"></clr-icon>\r\n  Menu\r\n</a>\r\n<a clrVerticalNavLink routerLink=\"homepage\" routerLinkActive=\"active\">\r\n  <clr-icon clrVerticalNavIcon shape=\"sad-face\"></clr-icon>\r\n  Poison\r\n</a>\r\n<a clrVerticalNavLink routerLink=\"homepage\" routerLinkActive=\"active\">\r\n  <clr-icon clrVerticalNavIcon shape=\"bug\"></clr-icon>\r\n  Grass\r\n</a>\r\n<a clrVerticalNavLink routerLink=\"homepage\" routerLinkActive=\"active\">\r\n  <clr-icon clrVerticalNavIcon shape=\"shield\"></clr-icon>\r\n  Fighting\r\n</a>\r\n<a clrVerticalNavLink routerLink=\"homepage\" routerLinkActive=\"active\">\r\n  <clr-icon clrVerticalNavIcon shape=\"certificate\"></clr-icon>\r\n  Credit\r\n</a>"

/***/ }),

/***/ "./app/app/components/application/nav/sidenav/sidenav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav',
            template: __webpack_require__("./app/app/components/application/nav/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("./app/app/components/application/nav/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;


/***/ }),

/***/ "./app/app/components/application/nav/subnav/subnav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/nav/subnav/subnav.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  subnav works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/application/nav/subnav/subnav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SubnavComponent = /** @class */ (function () {
    function SubnavComponent() {
    }
    SubnavComponent.prototype.ngOnInit = function () {
    };
    SubnavComponent = __decorate([
        core_1.Component({
            selector: 'app-subnav',
            template: __webpack_require__("./app/app/components/application/nav/subnav/subnav.component.html"),
            styles: [__webpack_require__("./app/app/components/application/nav/subnav/subnav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubnavComponent);
    return SubnavComponent;
}());
exports.SubnavComponent = SubnavComponent;


/***/ }),

/***/ "./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"restForm\" class=\"compact\">\r\n  <section class=\"form-block\">\r\n\r\n    <div class=\"form-group\">\r\n      <input placeholder=\"restaurant name\" type=\"text\" id=\"restaurantName\" name=\"name\" class=\"form-control\" formControlName=\"name\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input placeholder=\"phone number\" type=\"text\" id=\"phoneNumber\" name=\"phone\" class=\"form-control\" formControlName=\"phone\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input placeholder=\"primary contact\" type=\"text\" id=\"primaryContact\" name=\"primary\" class=\"form-control\" formControlName=\"primary\">\r\n    </div>\r\n\r\n  </section>\r\n\r\n  <section class=\"form-block\">\r\n    <div formArrayName=\"locations\">\r\n\r\n      <div *ngFor=\"let address of locations.controls; let i = index\" [formGroupName]=\"i\">\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <input placeholder=\"street\" type=\"text\" id=\"street\" name=\"street\" class=\"form-control\" formControlName=\"street\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input placeholder=\"suite\" type=\"text\" id=\"suite\" name=\"suite\" class=\"form-control\" formControlName=\"suite\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input placeholder=\"city\" type=\"text\" id=\"city\" name=\"city\" class=\"form-control\" formControlName=\"city\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input placeholder=\"state\" type=\"text\" id=\"state\" name=\"state\" class=\"form-control\" formControlName=\"state\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input placeholder=\"zip code\" type=\"text\" id=\"zip\" name=\"zip\" class=\"form-control\" formControlName=\"zip\">\r\n        </div>\r\n\r\n        <br>\r\n      </div>\r\n\r\n      <button (click)=\"addLocation()\" type=\"button\">Add Location</button>\r\n\r\n    </div>\r\n  </section>\r\n\r\n  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!restForm.valid\">Submit</button>\r\n</form>"

/***/ }),

/***/ "./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var auth_service_1 = __webpack_require__("./app/app/services/auth.service.ts");
var location_1 = __webpack_require__("./app/app/models/location.ts");
var RestaurantFormComponent = /** @class */ (function () {
    function RestaurantFormComponent(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.createForm();
    }
    RestaurantFormComponent.prototype.ngOnInit = function () { };
    RestaurantFormComponent.prototype.ngOnChanges = function () {
        this.rebuildForm();
    };
    RestaurantFormComponent.prototype.createForm = function () {
        this.restForm = this.fb.group({
            uid: '',
            rid: '',
            name: '',
            phone: '',
            primary: '',
            active: true,
            locations: this.fb.array([])
        });
        this.locations.push(this.fb.group(new location_1.Location()));
    };
    RestaurantFormComponent.prototype.rebuildForm = function () {
        if (this.restaurant) {
            this.restForm.reset({
                name: this.restaurant.name,
                phone: this.restaurant.phone
            });
            this.setLocations(this.restaurant.locations);
        }
        if (this.user) {
            this.restForm.patchValue({
                uid: this.user.uid
            });
        }
    };
    Object.defineProperty(RestaurantFormComponent.prototype, "locations", {
        get: function () {
            return this.restForm.get('locations');
        },
        enumerable: true,
        configurable: true
    });
    RestaurantFormComponent.prototype.setLocations = function (locations) {
        var _this = this;
        var locationFGs = locations.map(function (location) { return _this.fb.group(location); });
        var locationFormArray = this.fb.array(locationFGs);
        this.restForm.setControl('locations', locationFormArray);
    };
    RestaurantFormComponent.prototype.onSubmit = function () {
        this.restForm.patchValue({
            rid: this.restForm.get('name').value
        });
        var restaurant = this.restForm.getRawValue();
        console.log(restaurant);
    };
    RestaurantFormComponent.prototype.addLocation = function () {
        console.log('In Add Location', this.user);
        this.locations.push(this.fb.group(new location_1.Location()));
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RestaurantFormComponent.prototype, "restaurant", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RestaurantFormComponent.prototype, "user", void 0);
    RestaurantFormComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant-form',
            template: __webpack_require__("./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.html"),
            styles: [__webpack_require__("./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, forms_1.FormBuilder])
    ], RestaurantFormComponent);
    return RestaurantFormComponent;
}());
exports.RestaurantFormComponent = RestaurantFormComponent;


/***/ }),

/***/ "./app/app/components/application/restaurant/restaurant.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/restaurant/restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  restaurant works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/application/restaurant/restaurant.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent() {
    }
    RestaurantComponent.prototype.ngOnInit = function () {
    };
    RestaurantComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant',
            template: __webpack_require__("./app/app/components/application/restaurant/restaurant.component.html"),
            styles: [__webpack_require__("./app/app/components/application/restaurant/restaurant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantComponent);
    return RestaurantComponent;
}());
exports.RestaurantComponent = RestaurantComponent;


/***/ }),

/***/ "./app/app/components/auth/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n  <form class=\"login\" (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\r\n    <label class=\"title\">\r\n      <h3 class=\"welcome\">Welcome to</h3>\r\n      Company Product Name\r\n      <h5 class=\"hint\">Use your Company ID to sign in or create one now</h5>\r\n    </label>\r\n    <div class=\"login-group\">\r\n      <!-- <div class=\"auth-source select\">\r\n        <select id=\"login-auth-source-1\">\r\n          <option>Local Users</option>\r\n          <option>Administrator</option>\r\n        </select>\r\n      </div> -->\r\n      <input class=\"email\" type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email\" ngModel>\r\n      <input class=\"password\" type=\"password\" id=\"login_password\" name=\"password\" placeholder=\"Password\" ngModel>\r\n      <div class=\"checkbox\">\r\n        <input type=\"checkbox\" id=\"rememberme\">\r\n        <label for=\"rememberme\">\r\n          Remember me\r\n        </label>\r\n      </div>\r\n      <!-- <div class=\"error active\">\r\n        Invalid user name or password\r\n      </div> -->\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Login</button>\r\n      <!-- <a href=\"javascript://\" class=\"signup\">Sign up for a Company ID</a> -->\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./app/app/components/auth/signin/signin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./app/app/services/auth.service.ts");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        console.log(email);
        console.log(password);
        this.authService.signinUser(email, password);
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            template: __webpack_require__("./app/app/components/auth/signin/signin.component.html"),
            styles: [__webpack_require__("./app/app/components/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ "./app/app/components/auth/signout/signout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/auth/signout/signout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signout works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/auth/signout/signout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SignoutComponent = /** @class */ (function () {
    function SignoutComponent() {
    }
    SignoutComponent.prototype.ngOnInit = function () {
    };
    SignoutComponent = __decorate([
        core_1.Component({
            selector: 'app-signout',
            template: __webpack_require__("./app/app/components/auth/signout/signout.component.html"),
            styles: [__webpack_require__("./app/app/components/auth/signout/signout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignoutComponent);
    return SignoutComponent;
}());
exports.SignoutComponent = SignoutComponent;


/***/ }),

/***/ "./app/app/components/auth/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 push-md-2\">\r\n      <ng-container *ngIf=\"(authService.user$ | async) || {} as user\">\r\n\r\n        <!-- Initial SignupForm -->\r\n        <form class=\"form\" (ngSubmit)=\"onSignup()\" [formGroup]=\"signupForm\" *ngIf=\"!user.uid\">\r\n          <section class=\"form-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" formControlName=\"email\">\r\n            </div>\r\n            <div class=\"form-group\">\\\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\">\r\n            </div>\r\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!signupForm.valid\">Sign Up</button>\r\n          </section>\r\n        </form>\r\n        <!-- <app-user-form *ngIf=\"!user.uid\"></app-user-form> -->\r\n\r\n        <!-- Detail Form -->\r\n        <form class=\"form\" [formGroup]=\"detailForm\" (ngSubmit)=\"setDetails(user)\" *ngIf=\"user.uid && !user.name\">\r\n          <section class=\"form-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"roles\">Role</label>\r\n              <div class=\"select\">\r\n                <select name=\"roles\" class=\"form-control\" formControlName=\"roles\">\r\n                  <option *ngFor=\"let role of roles\" [value]=\"role\">{{ role }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div formGroupName=\"name\">\r\n              <div class=\"form-group\">\r\n                <label for=\"first\">First Name</label>\r\n                <input type=\"text\" id=\"firstName\" name=\"first\" class=\"form-control\" formControlName=\"first\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Last Name</label>\r\n                <input type=\"text\" id=\"lastName\" name=\"last\" class=\"form-control\" formControlName=\"last\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"phone\">Phone Number</label>\r\n              <input type=\"text\" id=\"phoneNumber\" name=\"phone\" class=\"form-control\" formControlName=\"phone\">\r\n            </div>\r\n          </section>\r\n\r\n          <!-- Address -->\r\n          <section class=\"form-block\" formGroupName=\"address\">\r\n            <div class=\"form-group\">\r\n              <label for=\"street\">Street</label>\r\n              <input type=\"text\" id=\"street\" name=\"street\" class=\"form-control\" formControlName=\"street\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"city\">City</label>\r\n              <input type=\"text\" id=\"city\" name=\"city\" class=\"form-control\" formControlName=\"city\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"state\">State</label>\r\n              <input type=\"text\" id=\"state\" name=\"state\" class=\"form-control\" formControlName=\"state\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"zip\">Zip</label>\r\n              <input type=\"text\" id=\"zip\" name=\"zip\" class=\"form-control\" formControlName=\"zip\">\r\n            </div>\r\n          </section>\r\n\r\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!detailForm.valid\">NEXT</button>\r\n        </form>\r\n\r\n        <app-restaurant-form [user]=\"user\" *ngIf=\"user.uid && user.name\"></app-restaurant-form>\r\n        {{user.roles}}\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n</clr-main-container>"

/***/ }),

/***/ "./app/app/components/auth/signup/signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var auth_service_1 = __webpack_require__("./app/app/services/auth.service.ts");
var roles_1 = __webpack_require__("./app/app/models/roles.ts");
var user_service_1 = __webpack_require__("./app/app/services/user.service.ts");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, fb, userService) {
        this.authService = authService;
        this.fb = fb;
        this.userService = userService;
        this.roles = roles_1.roles;
        this.createForm();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.createForm = function () {
        this.signupForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    forms_1.Validators.minLength(6),
                    forms_1.Validators.maxLength(25)
                ]
            ]
        });
        this.detailForm = this.fb.group({
            name: this.fb.group({
                first: ['', [forms_1.Validators.required]],
                last: ['', [forms_1.Validators.required]]
            }),
            address: this.fb.group({
                street: '',
                apartment: '',
                city: '',
                state: '',
                zip: ''
            }),
            roles: '',
            phone: ['', [forms_1.Validators.required]],
            active: true
        });
    };
    SignupComponent.prototype.onSignup = function () {
        this.authService.emailSignup(this.email.value, this.password.value);
    };
    SignupComponent.prototype.setDetails = function (user) {
        return this.userService.updateUser(user, this.detailForm.getRawValue());
    };
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () {
            return this.signupForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () {
            return this.signupForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "first", {
        get: function () {
            return this.detailForm.get('name').get('first');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "last", {
        get: function () {
            return this.detailForm.get('name').get('last');
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("./app/app/components/auth/signup/signup.component.html"),
            styles: [__webpack_require__("./app/app/components/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            forms_1.FormBuilder,
            user_service_1.UserService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "./app/app/components/auth/signup/user-form/user-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/auth/signup/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ng-container *ngIf=\"(auth.user | async) || {} as user\"> -->\r\n\r\n<form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\r\n  <section class=\"form-block\">\r\n    <h3>Create an Account</h3>\r\n  </section>\r\n  <section class=\"form-block\">\r\n    <div class=\"form-group\">\r\n      <label for=\"validFirstName\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation invalid tooltip-md\">\r\n        <input placeholder=\"First Name\" id=\"validFirstName\" type=\"text\" formControlName=\"first\">\r\n        <span class=\"tooltip-content\">\r\n          This field cannot be empty!\r\n        </span>\r\n      </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"validFirstName\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation invalid tooltip-md\">\r\n        <input placeholder=\"Last Name\" type=\"text\" formControlName=\"last\">\r\n        <span class=\"tooltip-content\">\r\n          This field cannot be empty!\r\n        </span>\r\n      </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"validFirstName\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation invalid tooltip-md\">\r\n        <input placeholder=\"Email Address\" type=\"email\" formControlName=\"email\">\r\n        <span class=\"tooltip-content\">\r\n          This field cannot be empty!\r\n        </span>\r\n      </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"validFirstName\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation invalid tooltip-md\">\r\n        <input placeholder=\"Confirm Email Address\" type=\"email\" formControlName=\"email\">\r\n        <span class=\"tooltip-content\">\r\n          This field cannot be empty!\r\n        </span>\r\n      </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"validFirstName\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation invalid tooltip-md\">\r\n        <input placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n        <span class=\"tooltip-content\">\r\n          This field cannot be empty!\r\n        </span>\r\n      </label>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- <div *ngIf=\"email.invalid && email.dirty\">\r\n      Your email doesn't look quite right...\r\n    </div>\r\n\r\n    <label for=\"passowrd\">Password</label>\r\n    <input type=\"password\" formControlName=\"password\" required>\r\n\r\n    <div *ngIf=\"password.invalid && password.touched\">\r\n      Password must be between 6 and 24 chars and have at least one number\r\n    </div>\r\n\r\n    <div *ngIf=\"signupForm.valid\">Form looks good! Let's do this.</div> -->\r\n\r\n  <button type=\"submit\" class=\"btn btn-link btn-block\">Create Account</button>\r\n\r\n</form>\r\n\r\n<!-- </ng-container> -->"

/***/ }),

/***/ "./app/app/components/auth/signup/user-form/user-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var auth_service_1 = __webpack_require__("./app/app/services/auth.service.ts");
var UserFormComponent = /** @class */ (function () {
    // ### TODO Add Auth Service
    function UserFormComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.createForm();
    }
    UserFormComponent.prototype.ngOnInit = function () {
        // Second Step
        // this.detailForm = this.fb.group({
        //   catchPhrase: ['', Validators.required]
        // });
    };
    UserFormComponent.prototype.createForm = function () {
        this.signupForm = this.fb.group({
            first: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            last: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    forms_1.Validators.minLength(6),
                    forms_1.Validators.maxLength(25)
                ]
            ]
        });
    };
    Object.defineProperty(UserFormComponent.prototype, "email", {
        get: function () {
            return this.signupForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserFormComponent.prototype, "password", {
        get: function () {
            return this.signupForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    UserFormComponent.prototype.onSignup = function () {
        return this.authService.emailSignup(this.email.value, this.password.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserFormComponent.prototype, "user", void 0);
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'app-user-form',
            template: __webpack_require__("./app/app/components/auth/signup/user-form/user-form.component.html"),
            styles: [__webpack_require__("./app/app/components/auth/signup/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, auth_service_1.AuthService])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;


/***/ }),

/***/ "./app/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\r\n\r\n  <header class=\"header-1\">\r\n    <div class=\"branding\">\r\n      <a class=\"nav-link\">\r\n        <clr-icon shape=\"dna\"></clr-icon>\r\n        <span class=\"title\">Tableease</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"header-actions\">\r\n      <a routerLink=\"signin\" class=\"nav-link nav-text\">\r\n        Log In\r\n      </a>\r\n      <a routerLink=\"signup\" class=\"nav-link nav-text\">\r\n        Signup\r\n      </a>\r\n      <a routerLink=\"app/homepage\" class=\"nav-link nav-text\">\r\n        Go To App\r\n      </a>\r\n    </div>\r\n  </header>\r\n  <p>\r\n    This is the main home page\r\n  </p>\r\n\r\n</clr-main-container>"

/***/ }),

/***/ "./app/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./app/app/services/auth.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./app/app/components/home/home.component.html"),
            styles: [__webpack_require__("./app/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./app/app/components/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/not-found/not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () { };
    NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-not-found',
            template: __webpack_require__("./app/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("./app/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;


/***/ }),

/***/ "./app/app/components/splash/splash.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/splash/splash.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  splash works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/splash/splash.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SplashComponent = /** @class */ (function () {
    function SplashComponent() {
    }
    SplashComponent.prototype.ngOnInit = function () { };
    SplashComponent = __decorate([
        core_1.Component({
            selector: 'app-splash',
            template: __webpack_require__("./app/app/components/splash/splash.component.html"),
            styles: [__webpack_require__("./app/app/components/splash/splash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SplashComponent);
    return SplashComponent;
}());
exports.SplashComponent = SplashComponent;


/***/ }),

/***/ "./app/app/models/allergy.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Allergy = /** @class */ (function () {
    function Allergy() {
    }
    return Allergy;
}());
exports.Allergy = Allergy;


/***/ }),

/***/ "./app/app/models/location.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Location = /** @class */ (function () {
    function Location() {
        this.street = '';
        this.suite = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.active = true;
    }
    return Location;
}());
exports.Location = Location;


/***/ }),

/***/ "./app/app/models/roles.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = ['User', 'Restaurant', 'admin'];


/***/ }),

/***/ "./app/app/private/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
var auth_service_1 = __webpack_require__("./app/app/services/auth.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return (this.authService.user$
            .take(1)
            .map(function (user) { return !!user; })
            .do(function (loggedIn) {
            if (!loggedIn) {
                // this.notify.update('You must be logged in and have a atch phrase!', 'error');
                _this.router.navigate(['/signin']);
            }
        }));
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./app/app/services/allergies.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var firestore_1 = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var AllergiesService = /** @class */ (function () {
    function AllergiesService(db) {
        this.db = db;
        this.allergiesCollection = db.collection('allergies', function (ref) {
            return ref.orderBy('name', 'asc');
        });
        this.allergies$ = this.allergiesCollection
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    AllergiesService.prototype.readAllergies = function () {
        return this.allergies$;
    };
    AllergiesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], AllergiesService);
    return AllergiesService;
}());
exports.AllergiesService = AllergiesService;


/***/ }),

/***/ "./app/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_1 = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var firestore_1 = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
// ### TODO add notify user function
// import { NotifyService } from './notify.service';
// Keeps track of user at global level of Application
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user$ = this.afAuth.authState.switchMap(function (user) {
            if (user) {
                console.log('In the USER', user);
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Observable_1.Observable.of(null);
            }
        });
    }
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['app/homepage']);
            _this.afAuth.auth.currentUser.getIdToken().then(function (token) {
                _this.token = token;
            });
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.signoutUser = function () {
        var _this = this;
        this.afAuth.auth.signOut().catch(function (error) { return _this.handleError(error); });
        this.router.navigate(['/signin']);
    };
    // #### Email/Password Auth #### //
    AuthService.prototype.emailSignup = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            return _this.setUserDoc(user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // #### Update properties on the user document
    AuthService.prototype.updateUserDoc = function (user, data) {
        return this.afs.doc("users/" + user.uid).update(data);
        // this.router.navigate(['/app/homepage']);
    };
    // #### TODO: Possibly remove. This Get Token Method would be used
    // to authenicate the user against all db queries.
    AuthService.prototype.getToken = function () {
        var _this = this;
        this.afAuth.auth.currentUser
            .getIdToken()
            .then(function (token) { return (_this.token = token); });
        return this.token;
    };
    // #### If error, console log and notify user
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        // #### TODO add notify user function
        // this.notify.update(error.message, 'error');
    };
    AuthService.prototype.setUserDoc = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email
        };
        return userRef.set(data);
    };
    AuthService.prototype.checkAuth = function (user, allowedRoles) {
        if (!user) {
            return false;
        }
        for (var _i = 0, allowedRoles_1 = allowedRoles; _i < allowedRoles_1.length; _i++) {
            var role = allowedRoles_1[_i];
            if (user.role === role) {
                return true;
            }
        }
        return false;
    };
    AuthService.prototype.canRead = function (user) {
        var allowed = ['admin', 'editor', 'subscriber'];
        return this.checkAuth(user, allowed);
    };
    AuthService.prototype.canEdit = function (user) {
        var allowed = ['admin', 'editor'];
        return this.checkAuth(user, allowed);
    };
    AuthService.prototype.canDelete = function (user) {
        var allowed = ['admin'];
        return this.checkAuth(user, allowed);
    };
    AuthService.prototype.activeUser = function () {
        return this.user$;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth,
            firestore_1.AngularFirestore,
            router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./app/app/services/meals.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var firestore_1 = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var MealsService = /** @class */ (function () {
    function MealsService(db) {
        this.db = db;
        this.restDoc = db.doc('restaurants/le pain quotidien');
        this.mealsCollection = this.restDoc.collection('meals', function (ref) {
            return ref.orderBy('name', 'asc');
        });
        this.meals$ = this.mealsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (obj) {
                var data = obj.payload.doc.data();
                data.id = obj.payload.doc.id;
                // console.log('In Service', data);
                return data;
            });
        });
    }
    MealsService.prototype.createMeal = function (meal) {
        this.mealsCollection = this.restDoc.collection('meals');
        this.mealsCollection.doc("" + meal.name).set(meal);
    };
    MealsService.prototype.readMeals = function () {
        return this.meals$;
    };
    MealsService.prototype.updateMeal = function (meal) {
        this.mealDoc = this.restDoc.collection('meals').doc("" + meal.id);
        this.mealDoc.update(meal);
    };
    MealsService.prototype.deleteMeal = function (meal) {
        this.mealDoc = this.restDoc.collection('meals').doc("" + meal.id);
        this.mealDoc.delete();
    };
    MealsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], MealsService);
    return MealsService;
}());
exports.MealsService = MealsService;


/***/ }),

/***/ "./app/app/services/submit-form.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var meals_service_1 = __webpack_require__("./app/app/services/meals.service.ts");
var SubmitFormService = /** @class */ (function () {
    function SubmitFormService(mealsService) {
        var _this = this;
        this.mealsService = mealsService;
        this.create = false;
        this.update = false;
        this.submitPressed$ = new Subject_1.Subject();
        this.formMeal$ = new Subject_1.Subject();
        this.clearForm$ = new Subject_1.Subject();
        this.mealSub = this.formMeal$.subscribe(function (meal) {
            meal = _this.lowerString(meal);
            if (_this.update === true) {
                _this.mealsService.updateMeal(meal);
                _this.update = false;
            }
            else if (_this.create === true) {
                _this.mealsService.createMeal(meal);
                _this.create = false;
            }
        });
    }
    SubmitFormService.prototype.lowerString = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var element = obj[key];
                if (element === 'allergies') {
                    element.map(function (i) {
                        if (typeof i === 'string') {
                            i = i.toLowerCase();
                        }
                        return i;
                    });
                }
                else if (typeof element === 'string') {
                    obj[key] = element.toLowerCase();
                }
            }
        }
        return obj;
    };
    SubmitFormService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [meals_service_1.MealsService])
    ], SubmitFormService);
    return SubmitFormService;
}());
exports.SubmitFormService = SubmitFormService;


/***/ }),

/***/ "./app/app/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./app/app/services/auth.service.ts");
var firestore_1 = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var UserService = /** @class */ (function () {
    function UserService(afs, authService) {
        this.afs = afs;
        this.authService = authService;
        this.user$ = this.authService.activeUser();
    }
    UserService.prototype.createUser = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email
        };
        return userRef.set(data);
    };
    UserService.prototype.readUser = function (user) { };
    UserService.prototype.updateUser = function (user, data) {
        return this.afs.doc("users/" + user.uid).update(data);
    };
    UserService.prototype.deleteUser = function (user) { };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore, auth_service_1.AuthService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./app/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyC_fr4Ho_cskLn5M3SLOH52ncBDbLIy8rc',
        authDomain: 'fs1prod-9a811.firebaseapp.com',
        databaseURL: 'https://fs1prod-9a811.firebaseio.com',
        projectId: 'fs1prod-9a811',
        storageBucket: 'fs1prod-9a811.appspot.com',
        messagingSenderId: '690672385888'
    }
};


/***/ }),

/***/ "./app/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./app/app/app.module.ts");
var environment_1 = __webpack_require__("./app/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./app/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map