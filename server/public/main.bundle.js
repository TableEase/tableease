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
var login_component_1 = __webpack_require__("./app/app/components/auth/login/login.component.ts");
var home_component_1 = __webpack_require__("./app/app/components/home/home.component.ts");
var application_component_1 = __webpack_require__("./app/app/components/application/application.component.ts");
var dash_component_1 = __webpack_require__("./app/app/components/application/dash/dash.component.ts");
var not_found_component_1 = __webpack_require__("./app/app/components/not-found/not-found.component.ts");
var restaurant_component_1 = __webpack_require__("./app/app/components/application/restaurant/restaurant.component.ts");
var signup_component_1 = __webpack_require__("./app/app/components/auth/signup/signup.component.ts");
var meal_component_1 = __webpack_require__("./app/app/components/application/meal/meal.component.ts");
var splash_component_1 = __webpack_require__("./app/app/components/splash/splash.component.ts");
var user_form_component_1 = __webpack_require__("./app/app/components/auth/signup/user-form/user-form.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'search', component: splash_component_1.SplashComponent },
    {
        path: 'app',
        component: application_component_1.ApplicationComponent,
        children: [
            { path: 'homepage', component: dash_component_1.DashComponent },
            { path: 'settings', component: user_form_component_1.UserFormComponent },
            { path: 'menu', component: meal_component_1.MealComponent },
            { path: 'restaurant', component: restaurant_component_1.RestaurantComponent },
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
var app_routing_module_1 = __webpack_require__("./app/app/app-routing.module.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./app/app/app.component.ts");
var header_component_1 = __webpack_require__("./app/app/components/application/nav/header/header.component.ts");
var navbar_component_1 = __webpack_require__("./app/app/components/application/nav/navbar/navbar.component.ts");
var subnav_component_1 = __webpack_require__("./app/app/components/application/nav/subnav/subnav.component.ts");
var sidenav_component_1 = __webpack_require__("./app/app/components/application/nav/sidenav/sidenav.component.ts");
var login_component_1 = __webpack_require__("./app/app/components/auth/login/login.component.ts");
var signout_component_1 = __webpack_require__("./app/app/components/auth/signout/signout.component.ts");
var signup_component_1 = __webpack_require__("./app/app/components/auth/signup/signup.component.ts");
var meal_component_1 = __webpack_require__("./app/app/components/application/meal/meal.component.ts");
var meal_detail_component_1 = __webpack_require__("./app/app/components/application/meal/meal-detail/meal-detail.component.ts");
var meal_form_component_1 = __webpack_require__("./app/app/components/application/meal/meal-form/meal-form.component.ts");
var meal_item_component_1 = __webpack_require__("./app/app/components/application/meal/meal-item/meal-item.component.ts");
var home_component_1 = __webpack_require__("./app/app/components/home/home.component.ts");
var splash_component_1 = __webpack_require__("./app/app/components/splash/splash.component.ts");
var application_component_1 = __webpack_require__("./app/app/components/application/application.component.ts");
var dash_component_1 = __webpack_require__("./app/app/components/application/dash/dash.component.ts");
var not_found_component_1 = __webpack_require__("./app/app/components/not-found/not-found.component.ts");
var restaurant_component_1 = __webpack_require__("./app/app/components/application/restaurant/restaurant.component.ts");
var restaurant_form_component_1 = __webpack_require__("./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.ts");
var user_service_1 = __webpack_require__("./app/app/services/user.service.ts");
var user_form_component_1 = __webpack_require__("./app/app/components/auth/signup/user-form/user-form.component.ts");
var passport_service_1 = __webpack_require__("./app/app/services/passport.service.ts");
var restaurant_service_1 = __webpack_require__("./app/app/services/restaurant.service.ts");
var meal_service_1 = __webpack_require__("./app/app/services/meal.service.ts");
var messages_component_1 = __webpack_require__("./app/app/components/form/messages/messages.component.ts");
var slider_1 = __webpack_require__("./node_modules/primeng/slider.js");
var address_component_1 = __webpack_require__("./app/app/components/form/address/address.component.ts");
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var map_component_1 = __webpack_require__("./app/app/components/form/map/map.component.ts");
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
                login_component_1.LoginComponent,
                signout_component_1.SignoutComponent,
                signup_component_1.SignupComponent,
                home_component_1.HomeComponent,
                splash_component_1.SplashComponent,
                application_component_1.ApplicationComponent,
                dash_component_1.DashComponent,
                not_found_component_1.NotFoundComponent,
                restaurant_component_1.RestaurantComponent,
                user_form_component_1.UserFormComponent,
                restaurant_form_component_1.RestaurantFormComponent,
                meal_component_1.MealComponent,
                meal_detail_component_1.MealDetailComponent,
                meal_form_component_1.MealFormComponent,
                meal_item_component_1.MealItemComponent,
                messages_component_1.MessagesComponent,
                address_component_1.AddressComponent,
                map_component_1.MapComponent
            ],
            imports: [
                slider_1.SliderModule,
                platform_browser_1.BrowserModule,
                angular_1.ClarityModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                core_2.AgmCoreModule.forRoot({ apiKey: 'AIzaSyAZuS7tPa0NZZ5citvjDqzFxJvKngke7Gc', libraries: ['places'] }),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule
            ],
            providers: [user_service_1.UserService, passport_service_1.PassportService, meal_service_1.MealService, restaurant_service_1.RestaurantService],
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

module.exports = "<clr-main-container>\r\n  <app-home></app-home>\r\n  <div class=\"content-container\">\r\n    <div class=\"content-area\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <clr-vertical-nav [clrVerticalNavCollapsible]=\"true\" [(clrVerticalNavCollapsed)]=\"collapsed\">\r\n      <app-sidenav></app-sidenav>\r\n    </clr-vertical-nav>\r\n  </div>\r\n</clr-main-container>\r\n"

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

/***/ "./app/app/components/application/meal/meal-detail/meal-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/meal/meal-detail/meal-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  meal2-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/application/meal/meal-detail/meal-detail.component.ts":
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
var MealDetailComponent = /** @class */ (function () {
    function MealDetailComponent() {
    }
    MealDetailComponent.prototype.ngOnInit = function () { };
    MealDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-meal-detail',
            template: __webpack_require__("./app/app/components/application/meal/meal-detail/meal-detail.component.html"),
            styles: [__webpack_require__("./app/app/components/application/meal/meal-detail/meal-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MealDetailComponent);
    return MealDetailComponent;
}());
exports.MealDetailComponent = MealDetailComponent;


/***/ }),

/***/ "./app/app/components/application/meal/meal-form/meal-form.component.css":
/***/ (function(module, exports) {

module.exports = ".drop {\r\n  margin-bottom: 0.1rem;\r\n}\r\n"

/***/ }),

/***/ "./app/app/components/application/meal/meal-form/meal-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" #frm=\"ngForm\" *ngIf=\"allDataFetched\">\r\n\r\n  <section class=\"form-block\">\r\n\r\n\r\n    <div class=\"form-group row\">\r\n\r\n      <div class=\"col-sm-2 col-xs-12\">\r\n        <label for=\"mealName\">Name</label>\r\n      </div>\r\n\r\n      <div class=\"col-sm-9 col-xs-11 push-xs-1\">\r\n        <label for=\"mealName\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-sm\">\r\n          <input id=\"mealName\" type=\"text\" size=\"45\" name=\"name\" [ngModel]=\"meal?.name\">\r\n          <span class=\"tooltip-content\">\r\n            Name is required.\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n\r\n      <div class=\"col-sm-2 col-xs-12\">\r\n        <label for=\"description\">Description</label>\r\n      </div>\r\n\r\n      <div class=\"col-sm-9 col-xs-11 push-xs-1\">\r\n        <label for=\"description\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-sm\">\r\n          <textarea name=\"description\" id=\"description\" rows=\"2\" cols=\"45\" [ngModel]=\"meal?.description\"></textarea>\r\n          <span class=\"tooltip-content\">\r\n            description code is required.\r\n          </span>\r\n        </label>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-xs-1 push-sm-1\">\r\n      <label for=\"price\">Price</label>\r\n    </div>\r\n\r\n    <div class=\"col-xs-4\">\r\n      <label for=\"price\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-sm\">\r\n        <input id=\"price\" type=\"number\" size=\"10\" name=\"price\" [ngModel]=\"meal?.price\">\r\n        <span class=\"tooltip-content\">\r\n            price is required.\r\n          </span>\r\n      </label>\r\n    </div>\r\n\r\n  </section>\r\n\r\n  <div *ngIf=\"allergies\">\r\n\r\n    <section class=\"form-block\">\r\n      <div>\r\n        <div class=\"form-group row drop\">\r\n          <div class=\"col-xs-12\">\r\n            <label>Allergies</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-xs-4\" *ngFor=\"let allergy of allergies;let i = index;\">\r\n            <div class=\"checkbox-inline center\">\r\n              <input id=\"{{allergy.name}}\" name=\"{{allergy.name}}\" type=\"checkbox\"\r\n                     [checked]=\"allergy?.checked\" (change)=\"onCheckboxChange(allergy?.checked, i)\">\r\n              <label [for]=\"allergy.name\">{{allergy.name}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./app/app/components/application/meal/meal-form/meal-form.component.ts":
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
var meal_service_1 = __webpack_require__("./app/app/services/meal.service.ts");
var allergies_service_1 = __webpack_require__("./app/app/services/allergies.service.ts");
var MealFormComponent = /** @class */ (function () {
    function MealFormComponent(mealService, allergiesService) {
        this.mealService = mealService;
        this.allergiesService = allergiesService;
        this.allergies = [];
        this.allDataFetched = false;
    }
    MealFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allergiesService.getAllergies().subscribe(function (allergies) {
            _this.allergies = allergies['allergies'];
            _this.fillCheckboxes();
        });
    };
    MealFormComponent.prototype.fillCheckboxes = function () {
        if (this.meal) {
            var allergiesNames_1 = [];
            var allergies = this.allergies;
            this.meal.allergies.forEach(function (allergy) {
                allergiesNames_1.push(allergy.name);
            });
            allergies.forEach(function (allergy) {
                if (allergiesNames_1.indexOf(allergy.name) !== -1) {
                    allergy['checked'] = true;
                }
                else {
                    allergy['checked'] = false;
                }
            });
        }
        this.allDataFetched = true;
    };
    MealFormComponent.prototype.onCheckboxChange = function (val, index) {
        this.allergies[index]['checked'] = !val;
    };
    MealFormComponent.prototype.getSelectedOptions = function () {
        return this.allergies.filter(function (opt) { return opt.checked; });
    };
    MealFormComponent.prototype.onSubmit = function () {
        var formVals = this.form.value;
        console.log('Form Vals on Submit', formVals);
        formVals.allergies = this.getSelectedOptions();
        return this.mealService.create(formVals);
    };
    MealFormComponent.prototype.onUpdate = function () {
        console.log('Form: ', this.meal);
        this.form.value.id = this.meal.id;
        var formVals = this.form.value;
        formVals.allergies = this.getSelectedOptions();
        return this.mealService.updateFood(formVals);
    };
    MealFormComponent.prototype.clearForm = function () {
        this.form.reset();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MealFormComponent.prototype, "meal", void 0);
    __decorate([
        core_1.ViewChild('frm'),
        __metadata("design:type", forms_1.NgForm)
    ], MealFormComponent.prototype, "form", void 0);
    MealFormComponent = __decorate([
        core_1.Component({
            selector: 'app-meal-form',
            template: __webpack_require__("./app/app/components/application/meal/meal-form/meal-form.component.html"),
            styles: [__webpack_require__("./app/app/components/application/meal/meal-form/meal-form.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [meal_service_1.MealService,
            allergies_service_1.AllergiesService])
    ], MealFormComponent);
    return MealFormComponent;
}());
exports.MealFormComponent = MealFormComponent;


/***/ }),

/***/ "./app/app/components/application/meal/meal-item/meal-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/meal/meal-item/meal-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  meal2-item works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/app/components/application/meal/meal-item/meal-item.component.ts":
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
var MealItemComponent = /** @class */ (function () {
    function MealItemComponent() {
    }
    MealItemComponent.prototype.ngOnInit = function () { };
    MealItemComponent = __decorate([
        core_1.Component({
            selector: 'app-meal-item',
            template: __webpack_require__("./app/app/components/application/meal/meal-item/meal-item.component.html"),
            styles: [__webpack_require__("./app/app/components/application/meal/meal-item/meal-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MealItemComponent);
    return MealItemComponent;
}());
exports.MealItemComponent = MealItemComponent;


/***/ }),

/***/ "./app/app/components/application/meal/meal.component.css":
/***/ (function(module, exports) {

module.exports = ".flexMe {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n"

/***/ }),

/***/ "./app/app/components/application/meal/meal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allDataFetched\">\r\n  <div *ngIf=\"restaurantExists;then restaurant else norestaurant\">\r\n  </div>\r\n</div>\r\n\r\n<ng-template #norestaurant>\r\n  <div>First\r\n    <a routerLink=\"/app/restaurant\"> create a restaurant</a> before creating a menu.</div>\r\n</ng-template>\r\n<ng-template #restaurant>\r\n  <button *ngIf=\"meals\" class=\"btn btn-primary\" (click)=\"addModal=true\">Add Item</button>\r\n  Restaurant:\r\n  <select (change)=\"getMenu()\" [(ngModel)]=\"selectedRestaurant\" required>\r\n    <option *ngFor=\"let r of restaurants\" [ngValue]=\"r\">{{r.name}} - {{r.address.address}}</option>\r\n  </select>\r\n\r\n  <clr-stack-view>\r\n    <clr-stack-header class=\"cap\">\r\n    </clr-stack-header>\r\n    <div *ngFor=\"let meal of meals\">\r\n\r\n      <clr-stack-block>\r\n\r\n        <clr-stack-label>{{meal.name}}</clr-stack-label>\r\n        <div class=\"flexMe\">\r\n          <clr-stack-content>{{meal.description}}</clr-stack-content>\r\n          <clr-stack-content>\r\n            <a (click)=\"editModal = true; onReadMeal(meal)\">\r\n              <clr-icon shape=\"pencil\"></clr-icon>\r\n            </a>\r\n          </clr-stack-content>\r\n        </div>\r\n\r\n        <clr-stack-block>\r\n          <clr-stack-label>Allergies</clr-stack-label>\r\n          <clr-stack-content *ngIf=\"meal.allergies.length > 0\">\r\n            <span *ngFor=\"let allergy of meal.allergies;let last=last;let i = index\">{{allergy.name}}{{last ? '' : (i==meal.allergies.length-2) ? ' and ' : ', '}}</span>\r\n          </clr-stack-content>\r\n        </clr-stack-block>\r\n\r\n        <clr-stack-block>\r\n          <clr-stack-label>Price</clr-stack-label>\r\n          <clr-stack-content>${{meal.price}}</clr-stack-content>\r\n        </clr-stack-block>\r\n\r\n      </clr-stack-block>\r\n\r\n    </div>\r\n\r\n  </clr-stack-view>\r\n</ng-template>\r\n\r\n<clr-modal [(clrModalOpen)]=\"editModal\">\r\n  <h3 class=\"modal-title\" *ngIf=\"editModal\">{{mealToEdit.name}}</h3>\r\n  <div class=\"modal-body\">\r\n    <app-meal-form *ngIf=\"editModal\" [meal]=\"mealToEdit\"></app-meal-form>\r\n  </div>\r\n  <div class=\"modal-footer pr-0\">\r\n    <button type=\"button\" class=\"btn btn-outline btn-sm\" (click)=\"editModal = false; onUpdateMeal()\">Update\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"editModal = false; doubleCheck=true\">Delete</button>\r\n  </div>\r\n</clr-modal>\r\n\r\n<clr-modal [(clrModalOpen)]=\"doubleCheck\">\r\n  <h3 class=\"modal-title\">Confirm delete confirmation</h3>\r\n  <h4 class=\"modal-body\" *ngIf=\"doubleCheck\">Are you sure you want to remove {{mealToEdit.name}}?</h4>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"doubleCheck=false; editModal=true\">Return</button>\r\n    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"doubleCheck=false; onDeleteMeal(mealToEdit)\">Confirm\r\n    </button>\r\n  </div>\r\n</clr-modal>\r\n\r\n<clr-modal [(clrModalOpen)]=\"addModal\">\r\n  <h3 class=\"modal-title\" *ngIf=\"addModal\">Add A Dish</h3>\r\n  <div class=\"modal-body\">\r\n    <app-meal-form *ngIf=\"addModal\"></app-meal-form>\r\n  </div>\r\n\r\n  <div class=\"modal-footer pr-0\">\r\n    <button type=\"button\" class=\"btn btn-outline btn-sm\" (click)=\"addModal = false; onCreateMeal()\">Submit</button>\r\n    <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"onClear()\">Clear</button>\r\n  </div>\r\n\r\n</clr-modal>"

/***/ }),

/***/ "./app/app/components/application/meal/meal.component.ts":
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
var meal_form_component_1 = __webpack_require__("./app/app/components/application/meal/meal-form/meal-form.component.ts");
var meal_service_1 = __webpack_require__("./app/app/services/meal.service.ts");
var allergies_service_1 = __webpack_require__("./app/app/services/allergies.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var restaurant_service_1 = __webpack_require__("./app/app/services/restaurant.service.ts");
var MealComponent = /** @class */ (function () {
    function MealComponent(mealService, router, restaurantService) {
        this.mealService = mealService;
        this.router = router;
        this.restaurantService = restaurantService;
        this.allDataFetched = false;
        this.restaurantExists = false;
    }
    MealComponent.prototype.ngOnInit = function () {
        this.getRestaurants();
    };
    MealComponent.prototype.onCreateMeal = function () {
        var _this = this;
        this.mealForm.form.value.restaurant_id = this.selectedRestaurant.id;
        this.mealForm.onSubmit().subscribe(function (res) {
            _this.getMenu();
        });
    };
    MealComponent.prototype.onReadMeal = function (meal) {
        this.mealToEdit = meal;
    };
    MealComponent.prototype.getMenu = function () {
        var _this = this;
        console.log('In Get Menu: ', this.selectedRestaurant);
        this.mealService
            .getRestaurantMeals(this.selectedRestaurant.id)
            .subscribe(function (meals) {
            console.log('The meals: ', meals);
            // if (!menu['data'] && menu['messages']) {
            //   this.router.navigate(['/login']);
            // }
            // if (this.restaurantExists) {
            //   const selRes = this.selectedRestaurant.id;
            //   this.meals = menu['data'].filter(function(restaurant) {
            //     return restaurant.restaurant_id === selRes;
            //   });
            // }
            _this.meals = meals;
        });
    };
    MealComponent.prototype.getRestaurants = function () {
        var _this = this;
        console.log('In Get Restaurants');
        this.restaurantService.readCompRestaurants().subscribe(function (restaurants) {
            // AUTH GURD should handle this
            // if (!restaurants['data'] && restaurants['messages']) {
            //   this.router.navigate(['/login']);
            // }
            _this.restaurants = restaurants;
            if (restaurants.length > 0) {
                // this.selectedRestaurant = restaurants[0];
                _this.restaurantExists = true;
            }
            _this.selectedRestaurant = restaurants[0];
            _this.allDataFetched = true;
            _this.getMenu();
        });
    };
    MealComponent.prototype.onUpdateMeal = function () {
        var _this = this;
        this.mealForm.form.value['restaurant_id'] = this.selectedRestaurant.id;
        this.mealForm.onUpdate().subscribe(function (menu) {
            _this.meals = menu['data'];
        });
    };
    MealComponent.prototype.onDeleteMeal = function (meal) {
        var _this = this;
        console.log('The Delte Meal: ', meal);
        this.mealService.delete(meal.id).subscribe(function (res) {
            console.log('The Delete Response: ', res);
            _this.meals = res['data'];
            _this.getMenu();
        });
    };
    MealComponent.prototype.onClear = function () {
        this.mealForm.clearForm();
    };
    __decorate([
        core_1.ViewChild(meal_form_component_1.MealFormComponent),
        __metadata("design:type", meal_form_component_1.MealFormComponent)
    ], MealComponent.prototype, "mealForm", void 0);
    MealComponent = __decorate([
        core_1.Component({
            selector: 'app-meal',
            template: __webpack_require__("./app/app/components/application/meal/meal.component.html"),
            styles: [__webpack_require__("./app/app/components/application/meal/meal.component.css")],
            providers: [meal_service_1.MealService, allergies_service_1.AllergiesService]
        }),
        __metadata("design:paramtypes", [meal_service_1.MealService,
            router_1.Router,
            restaurant_service_1.RestaurantService])
    ], MealComponent);
    return MealComponent;
}());
exports.MealComponent = MealComponent;


/***/ }),

/***/ "./app/app/components/application/nav/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/application/nav/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header-1\">\r\n  <div class=\"header-nav\">\r\n    <div class=\"branding\">\r\n      <a href=\"/\" class=\"nav-link\">\r\n        <clr-icon shape=\"vm-bug\"></clr-icon>\r\n        <span class=\"title\">Home</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"header-nav\">\r\n      <a href=\"javascript://\" class=\"active nav-link nav-text\">Dashboard</a>\r\n      <a href=\"javascript://\" class=\"nav-link nav-text\">Interactive Analytics</a>\r\n    </div>\r\n    <div class=\"header-actions\">\r\n      <a class=\"nav-link nav-text\" (click)=\"logout()\">\r\n        Log Out\r\n      </a>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

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
var passport_service_1 = __webpack_require__("./app/app/services/passport.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(passport, router) {
        this.passport = passport;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.passport.logout().subscribe(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./app/app/components/application/nav/header/header.component.html"),
            styles: [__webpack_require__("./app/app/components/application/nav/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [passport_service_1.PassportService, router_1.Router])
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

module.exports = "<clr-vertical-nav>\r\n  <a clrVerticalNavLink routerLink=\"/app/test\" routerLinkActive=\"active\">\r\n    <clr-icon clrVerticalNavIcon shape=\"user\"></clr-icon>\r\n    Dashboard\r\n  </a>\r\n  <a clrVerticalNavLink routerLink=\"/app/restaurant\" routerLinkActive=\"active\">\r\n    <clr-icon clrVerticalNavIcon shape=\"sad-face\"></clr-icon>\r\n    Restaurants\r\n  </a>\r\n  <a clrVerticalNavLink routerLink=\"/app/menu\" routerLinkActive=\"active\">\r\n    <clr-icon clrVerticalNavIcon shape=\"bolt\"></clr-icon>\r\n    Menus\r\n  </a>\r\n  <a clrVerticalNavLink routerLink=\"/app/test\" routerLinkActive=\"active\">\r\n    <clr-icon clrVerticalNavIcon shape=\"bug\"></clr-icon>\r\n    Grass\r\n  </a>\r\n  <a clrVerticalNavLink routerLink=\"/app/test\" routerLinkActive=\"active\">\r\n    <clr-icon clrVerticalNavIcon shape=\"shield\"></clr-icon>\r\n    Fighting\r\n  </a>\r\n  <a clrVerticalNavLink routerLink=\"/app/settings\" routerLinkActive=\"active\">\r\n    <clr-icon clrVerticalNavIcon shape=\"certificate\"></clr-icon>\r\n    Settings\r\n  </a>\r\n</clr-vertical-nav>\r\n"

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

module.exports = "<form class=\"compact\" #frm=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label for=\"phoneNumber\">Name</label>\r\n    <input placeholder=\"restaurant name\" type=\"text\" id=\"restaurantName\" name=\"name\" class=\"form-control\"\r\n           [ngModel]=\"restaurant?.name\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"phoneNumber\">Phone Number</label>\r\n    <input placeholder=\"phone number\" type=\"number\" id=\"phoneNumber\" name=\"phone_number\" class=\"form-control\"\r\n           [ngModel]=\"restaurant?.phone_number\">\r\n  </div>\r\n\r\n  <app-address [address]=\"restaurant?.address\"></app-address>\r\n\r\n</form>\r\n"

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
var restaurant_service_1 = __webpack_require__("./app/app/services/restaurant.service.ts");
var address_component_1 = __webpack_require__("./app/app/components/form/address/address.component.ts");
var RestaurantFormComponent = /** @class */ (function () {
    function RestaurantFormComponent(restaurantService) {
        this.restaurantService = restaurantService;
    }
    RestaurantFormComponent.prototype.ngOnInit = function () { };
    RestaurantFormComponent.prototype.onSubmit = function () {
        Object.assign(this.form.value, this.addressInput.address);
        var formVals = this.form.value;
        return this.restaurantService.addRestaurant(formVals);
    };
    RestaurantFormComponent.prototype.onUpdate = function () {
        Object.assign(this.form.value, this.addressInput.address);
        this.form.value['id'] = this.restaurant['id'];
        var formVals = this.form.value;
        return this.restaurantService.updateRestaurant(formVals);
    };
    RestaurantFormComponent.prototype.clearForm = function () {
        this.form.reset();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RestaurantFormComponent.prototype, "restaurant", void 0);
    __decorate([
        core_1.ViewChild('frm'),
        __metadata("design:type", forms_1.NgForm)
    ], RestaurantFormComponent.prototype, "form", void 0);
    __decorate([
        core_1.ViewChild(address_component_1.AddressComponent),
        __metadata("design:type", address_component_1.AddressComponent)
    ], RestaurantFormComponent.prototype, "addressInput", void 0);
    RestaurantFormComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant-form',
            template: __webpack_require__("./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.html"),
            styles: [__webpack_require__("./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.css")]
        }),
        __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
    ], RestaurantFormComponent);
    return RestaurantFormComponent;
}());
exports.RestaurantFormComponent = RestaurantFormComponent;


/***/ }),

/***/ "./app/app/components/application/restaurant/restaurant.component.css":
/***/ (function(module, exports) {

module.exports = "clr-icon {\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./app/app/components/application/restaurant/restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <button *ngIf=\"restaurants\" class=\"btn btn-primary\" (click)=\"addModal=true\">Add Restaurant</button> -->\r\n  <button class=\"btn btn-primary\" (click)=\"addModal=true\">Add Restaurant</button>\r\n\r\n  <clr-stack-view>\r\n    <clr-stack-header class=\"cap\">\r\n    </clr-stack-header>\r\n    <div *ngFor=\"let restaurant of restaurants\">\r\n\r\n      <clr-stack-block>\r\n\r\n        <clr-stack-label>{{restaurant.name}}</clr-stack-label>\r\n        <div class=\"flexMe\">\r\n          <clr-stack-content>{{restaurant.address.address}}</clr-stack-content>\r\n          <clr-stack-content>\r\n            <a (click)=\"editModal = true; onReadRestaurant(restaurant)\">\r\n              <clr-icon shape=\"pencil\"></clr-icon>\r\n            </a>\r\n          </clr-stack-content>\r\n        </div>\r\n\r\n        <clr-stack-block>\r\n          <clr-stack-label>Phone Number</clr-stack-label>\r\n          <clr-stack-content>\r\n            <span>{{restaurant.phone_number}}</span>\r\n          </clr-stack-content>\r\n        </clr-stack-block>\r\n      </clr-stack-block>\r\n\r\n    </div>\r\n  </clr-stack-view>\r\n\r\n</div>\r\n\r\n<clr-modal [(clrModalOpen)]=\"editModal\">\r\n  <h3 class=\"modal-title\" *ngIf=\"editModal\">{{restaurantToEdit.name}}</h3>\r\n  <div class=\"modal-body\">\r\n    <app-restaurant-form *ngIf=\"editModal\" [restaurant]=\"restaurantToEdit\"></app-restaurant-form>\r\n  </div>\r\n  <div class=\"modal-footer pr-0\">\r\n    <button type=\"button\" class=\"btn btn-outline btn-sm\" (click)=\"editModal = false; onUpdateRestaurant()\">Update\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"editModal = false; doubleCheck=true\">Delete</button>\r\n  </div>\r\n</clr-modal>\r\n\r\n<clr-modal [(clrModalOpen)]=\"doubleCheck\">\r\n  <h3 class=\"modal-title\">Confirm delete confirmation</h3>\r\n  <h4 class=\"modal-body\" *ngIf=\"doubleCheck\">Are you sure you want to remove {{restaurantToEdit.name}}?</h4>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"doubleCheck=false; editModal=true\">Return</button>\r\n    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"doubleCheck=false; onDeleteRestaurant(restaurantToEdit)\">\r\n      Confirm\r\n    </button>\r\n  </div>\r\n</clr-modal>\r\n\r\n<clr-modal [(clrModalOpen)]=\"addModal\">\r\n  <h3 class=\"modal-title\" *ngIf=\"addModal\">Add A Restaurant</h3>\r\n  <div class=\"modal-body\">\r\n    <app-restaurant-form *ngIf=\"addModal\"></app-restaurant-form>\r\n  </div>\r\n\r\n  <div class=\"modal-footer pr-0\">\r\n    <button type=\"button\" class=\"btn btn-outline btn-sm\" (click)=\"addModal = false; onCreateRestaurant()\">Submit\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"onClear()\">Clear</button>\r\n  </div>\r\n\r\n\r\n</clr-modal>"

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
var restaurant_form_component_1 = __webpack_require__("./app/app/components/application/restaurant/restaurant-form/restaurant-form.component.ts");
var restaurant_service_1 = __webpack_require__("./app/app/services/restaurant.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(restaurantService, router) {
        this.restaurantService = restaurantService;
        this.router = router;
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        this.getRestaurants();
    };
    RestaurantComponent.prototype.getRestaurants = function () {
        var _this = this;
        this.restaurantService.readCompRestaurants().subscribe(function (restaurants) {
            // Not Sure
            // if (!restaurants['data'] && restaurants['messages']) {
            //   console.log('Error: ');
            //   console.log(restaurants);
            // }
            // this.restaurants = restaurants['data'];
            _this.restaurants = restaurants;
        });
    };
    RestaurantComponent.prototype.onReadRestaurant = function (restaurant) {
        this.restaurantToEdit = restaurant;
    };
    RestaurantComponent.prototype.onUpdateRestaurant = function () {
        var _this = this;
        this.restaurantForm.onUpdate().subscribe(function (restaurants) {
            _this.getRestaurants();
        });
    };
    RestaurantComponent.prototype.onDeleteRestaurant = function (restaurant) {
        var _this = this;
        console.log('The Delete Rest: ', restaurant);
        this.restaurantService.delete(restaurant.id).subscribe(function (res) {
            _this.getRestaurants();
        });
    };
    RestaurantComponent.prototype.onCreateRestaurant = function () {
        var _this = this;
        this.restaurantForm.onSubmit().subscribe(function (res) {
            _this.getRestaurants();
        });
    };
    RestaurantComponent.prototype.onClear = function () {
        this.restaurantForm.clearForm();
    };
    __decorate([
        core_1.ViewChild(restaurant_form_component_1.RestaurantFormComponent),
        __metadata("design:type", restaurant_form_component_1.RestaurantFormComponent)
    ], RestaurantComponent.prototype, "restaurantForm", void 0);
    RestaurantComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant',
            template: __webpack_require__("./app/app/components/application/restaurant/restaurant.component.html"),
            styles: [__webpack_require__("./app/app/components/application/restaurant/restaurant.component.css")]
        }),
        __metadata("design:paramtypes", [restaurant_service_1.RestaurantService,
            router_1.Router])
    ], RestaurantComponent);
    return RestaurantComponent;
}());
exports.RestaurantComponent = RestaurantComponent;


/***/ }),

/***/ "./app/app/components/auth/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div class=\"login-wrapper\">\r\n  <form class=\"login\" (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\r\n    <label class=\"title\">\r\n      <h3 class=\"welcome\">Welcome to</h3>\r\n      Company Product Name\r\n      <h5 class=\"hint\">Use your Company ID to sign in or create one now</h5>\r\n    </label>\r\n    <div class=\"login-group\">\r\n      <app-messages [messages]=messages></app-messages>\r\n\r\n      <input class=\"email\" type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email\" ngModel>\r\n      <input class=\"password\" type=\"password\" id=\"login_password\" name=\"password\" placeholder=\"Password\" ngModel>\r\n      <div class=\"checkbox\">\r\n        <input type=\"checkbox\" id=\"rememberme\">\r\n        <label for=\"rememberme\">\r\n          Remember me\r\n        </label>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Login</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./app/app/components/auth/login/login.component.ts":
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
var passport_service_1 = __webpack_require__("./app/app/services/passport.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(passport, router) {
        this.passport = passport;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        var formVals = form.value;
        this.passport.login(formVals).subscribe(function (res) {
            _this.messages = res['messages'];
            if (_this.messages.length === 0) {
                _this.router.navigate(['app/homepage']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./app/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__("./app/app/components/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [passport_service_1.PassportService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


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

module.exports = "<app-home></app-home>\r\n<app-user-form></app-user-form>\r\n"

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
var passport_service_1 = __webpack_require__("./app/app/services/passport.service.ts");
var user_service_1 = __webpack_require__("./app/app/services/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(passport, userService, router) {
        this.passport = passport;
        this.userService = userService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            _this.user = user['user'];
        });
    };
    SignupComponent.prototype.onSignup = function (form) {
        var _this = this;
        var formVals = form.value;
        this.passport.signup(formVals).subscribe(function (res) {
            _this.messages = res['messages'];
            if (_this.messages.length === 0) {
                _this.router.navigate(['/app/homepage']);
            }
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("./app/app/components/auth/signup/signup.component.html"),
            styles: [__webpack_require__("./app/app/components/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [passport_service_1.PassportService,
            user_service_1.UserService,
            router_1.Router])
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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 push-md-2\">\r\n    <ng-container>\r\n\r\n      <!-- Initial SignupForm -->\r\n      <form class=\"form\" #f=\"ngForm\">\r\n        <div class=\"signup-group\">\r\n          <app-messages [messages]=messages></app-messages>\r\n\r\n          <section class=\"form-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name</label>\r\n              <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [ngModel]=\"user?.name\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"phoneNumber\">Phone Number</label>\r\n              <input type=\"number\" id=\"phoneNumber\" name=\"phoneNumber\" class=\"form-control\"\r\n                     [ngModel]=\"user?.phone_number\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" [ngModel]=\"user?.email\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" [ngModel]>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"confirmPassword\">Confirm Password</label>\r\n              <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" class=\"form-control\" [ngModel]>\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"allDataFetched\">\r\n              <div *ngIf=\"user;then edit else new\">\r\n              </div>\r\n            </div>\r\n            <ng-template #edit>\r\n              <button class=\"btn btn-primary\" type=\"submit\" (click)=\"onUpdate(f)\" [disabled]=\"!f.valid\">Save</button>\r\n            </ng-template>\r\n\r\n            <ng-template #new>\r\n              <button class=\"btn btn-primary\" type=\"submit\" (click)=\"onSignup(f)\" [disabled]=\"!f.valid\">Sign Up</button>\r\n            </ng-template>\r\n          </section>\r\n        </div>\r\n      </form>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

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
var passport_service_1 = __webpack_require__("./app/app/services/passport.service.ts");
var user_service_1 = __webpack_require__("./app/app/services/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(passport, userService, router) {
        this.passport = passport;
        this.userService = userService;
        this.router = router;
        this.allDataFetched = false;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (user) {
            _this.user = user['user'];
            _this.allDataFetched = true;
        });
    };
    UserFormComponent.prototype.onSignup = function (form) {
        var _this = this;
        var formVals = form.value;
        this.passport.signup(formVals).subscribe(function (res) {
            _this.messages = res['messages'];
            if (_this.messages.length === 0) {
                _this.router.navigate(['/app/homepage']);
            }
        });
    };
    UserFormComponent.prototype.onUpdate = function (form) {
        var _this = this;
        var formVals = form.value;
        this.userService.updateUser(formVals).subscribe(function (res) {
            _this.messages = res['messages'];
            if (_this.messages.length === 0) {
                _this.router.navigate(['/app/homepage']);
            }
        });
    };
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'app-user-form',
            template: __webpack_require__("./app/app/components/auth/signup/user-form/user-form.component.html"),
            styles: [__webpack_require__("./app/app/components/auth/signup/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [passport_service_1.PassportService,
            user_service_1.UserService,
            router_1.Router])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;


/***/ }),

/***/ "./app/app/components/form/address/address.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/form/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <label for=\"address\">Address</label>\r\n  <input placeholder=\"address\" type=\"text\" class=\"form-control\" #search name=\"address\" id=\"address\"\r\n         [ngModel]=\"address?.address\">\r\n</div>\r\n"

/***/ }),

/***/ "./app/app/components/form/address/address.component.ts":
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
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var address_1 = __webpack_require__("./app/app/models/address.ts");
var AddressComponent = /** @class */ (function () {
    function AddressComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.address = { address: place.formatted_address, lat: place.geometry.location.lat(), lon: place.geometry.location.lng() };
                });
            });
        });
    };
    __decorate([
        core_1.ViewChild('search'),
        __metadata("design:type", core_1.ElementRef)
    ], AddressComponent.prototype, "searchElementRef", void 0);
    __decorate([
        core_1.Input('address'),
        __metadata("design:type", address_1.Address)
    ], AddressComponent.prototype, "address", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'app-address',
            template: __webpack_require__("./app/app/components/form/address/address.component.html"),
            styles: [__webpack_require__("./app/app/components/form/address/address.component.css")]
        }),
        __metadata("design:paramtypes", [core_2.MapsAPILoader,
            core_1.NgZone])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;


/***/ }),

/***/ "./app/app/components/form/map/map.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n  width: 50%;\r\n}\r\n"

/***/ }),

/***/ "./app/app/components/form/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allDataFetched\">\r\n  <agm-map (mapClick)=\"mapClicked($event)\" [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\"\r\n           [zoom]=\"zoom\">\r\n\r\n    <agm-marker\r\n      *ngFor=\"let m of markers; let i = index\"\r\n      (markerClick)=\"clickedMarker(m, infoWindow, i)\"\r\n      [latitude]=\"m.address.lat\"\r\n      [longitude]=\"m.address.lon\">\r\n\r\n      <agm-info-window #infoWindow>\r\n\r\n        <div><strong>Name:</strong> {{m.name}}</div>\r\n        <div><strong>Address:</strong> {{m.address.address}}</div>\r\n        <div><strong>Phone Number: </strong> {{m.phone_number}}</div>\r\n\r\n      </agm-info-window>\r\n\r\n    </agm-marker>\r\n\r\n  </agm-map>\r\n</div>\r\n"

/***/ }),

/***/ "./app/app/components/form/map/map.component.ts":
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
var restaurant_service_1 = __webpack_require__("./app/app/services/restaurant.service.ts");
var MapComponent = /** @class */ (function () {
    function MapComponent(restaurantService) {
        this.restaurantService = restaurantService;
        this.markers = [];
        this.allDataFetched = false;
        this.infoWindowOpened = null;
    }
    MapComponent.prototype.ngOnInit = function () {
        // set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        // set current position
        this.setCurrentPosition();
        this.setMarkers();
    };
    MapComponent.prototype.setMarkers = function () {
        this.markers = [];
        var markers = this.markers;
        this.restaurants.forEach(function (restaurant) {
            if (restaurant.meals.length > 0) {
                markers.push({
                    name: restaurant['name'], address: restaurant['address'], phone_number: restaurant['phone_number']
                });
            }
        });
        this.allDataFetched = true;
    };
    MapComponent.prototype.clickedMarker = function (label, infoWindow, index) {
        if (this.infoWindowOpened === infoWindow) {
            return;
        }
        if (this.infoWindowOpened !== null) {
            this.infoWindowOpened.close();
        }
        this.infoWindowOpened = infoWindow;
    };
    MapComponent.prototype.mapClicked = function () {
        this.infoWindowOpened.close();
    };
    MapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "restaurants", void 0);
    MapComponent = __decorate([
        core_1.Component({
            selector: 'app-map',
            template: __webpack_require__("./app/app/components/form/map/map.component.html"),
            styles: [__webpack_require__("./app/app/components/form/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;


/***/ }),

/***/ "./app/app/components/form/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/form/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = " <div *ngIf=\"messages?.length > 0\" class=\"alert alert-danger\">\r\n    <div class=\"alert-items\">\r\n      <div class=\"alert-item static\" *ngFor=\"let message of messages\">\r\n        <div class=\"alert-icon-wrapper\">\r\n          <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\r\n        </div>\r\n        <span class=\"alert-text\">{{message}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./app/app/components/form/messages/messages.component.ts":
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
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MessagesComponent.prototype, "messages", void 0);
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./app/app/components/form/messages/messages.component.html"),
            styles: [__webpack_require__("./app/app/components/form/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./app/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header-1\">\r\n  <div class=\"branding\">\r\n    <a class=\"nav-link\" routerLink=\"/\">\r\n      <clr-icon shape=\"dna\"></clr-icon>\r\n      <span class=\"title\">Tableease</span>\r\n    </a>\r\n  </div>\r\n  <div style=\"display: contents;\" *ngIf=\"allDataFetched\">\r\n    <div *ngIf=\"user;then yesuser else nouser\">\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #yesuser>\r\n\r\n    <div class=\"header-actions\">\r\n      <a class=\"nav-link nav-text\">\r\n        Hi, {{user.name}}\r\n      </a>\r\n      <a (click)=\"logout()\" class=\"nav-link nav-text\">\r\n        Logout\r\n      </a>\r\n      <a routerLink=\"/app/homepage\" class=\"nav-link nav-text\">\r\n        Go To App\r\n      </a>\r\n      <a routerLink=\"/search\" class=\"nav-link nav-text\">\r\n        SEARCH\r\n      </a>\r\n    </div>\r\n\r\n  </ng-template>\r\n\r\n\r\n  <ng-template #nouser>\r\n\r\n    <div class=\"header-actions\">\r\n      <a routerLink=\"/login\" class=\"nav-link nav-text\">\r\n        Log In\r\n      </a>\r\n      <a routerLink=\"/signup\" class=\"nav-link nav-text\">\r\n        Signup\r\n      </a>\r\n      <a routerLink=\"/search\" class=\"nav-link nav-text\">\r\n        SEARCH\r\n      </a>\r\n    </div>\r\n\r\n  </ng-template>\r\n</header>\r\n"

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
var user_service_1 = __webpack_require__("./app/app/services/user.service.ts");
var passport_service_1 = __webpack_require__("./app/app/services/passport.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userservice, passport, router) {
        this.userservice = userservice;
        this.passport = passport;
        this.router = router;
        this.allDataFetched = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUser().subscribe(function (data) {
            _this.user = data['user'];
            _this.allDataFetched = true;
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.passport.logout().subscribe(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./app/app/components/home/home.component.html"),
            styles: [__webpack_require__("./app/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, passport_service_1.PassportService, router_1.Router])
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

module.exports = "<app-home></app-home>\r\n<div *ngIf=\"allDataFetched\">\r\n\r\n  <form class=\"form\" #frm=\"ngForm\" (ngSubmit)=\"onSearch()\" style=\"width: 50%;float: left\">\r\n    <section class=\"form-block\">\r\n      <div class=\"form-group\">\r\n        <div class=\"checkbox\" *ngFor=\"let allergy of allergies;let i = index;\">\r\n          <input id=\"{{allergy.name}}\" name=\"{{allergy.name}}\" type=\"checkbox\"\r\n                 [checked]=\"allergy?.checked\" (change)=\"onCheckboxChange(allergy?.checked, i)\">\r\n          <label [for]=\"allergy.name\">{{allergy.name}}</label>\r\n        </div>\r\n      </div>\r\n\r\n      <label>Price Range: {{rangeValues[0] + ' - ' + rangeValues[1]}}</label>\r\n      <p-slider name=\"price\" [ngModel]=\"rangeValues\" [style]=\"{'width':'200px'}\" range=\"true\"></p-slider>\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!frm.valid\">Search</button>\r\n    </section>\r\n  </form>\r\n\r\n  <app-map [restaurants]=\"restaurants\"></app-map>\r\n\r\n  <hr>\r\n  <h1>Results</h1>\r\n  <clr-stack-view>\r\n    <clr-stack-header class=\"cap\">\r\n    </clr-stack-header>\r\n    <div *ngFor=\"let restaurant of restaurants\">\r\n\r\n      <div *ngIf=\"restaurant.meals?.length > 0\">\r\n\r\n        <clr-stack-block>\r\n\r\n          <clr-stack-label>{{restaurant.name}}</clr-stack-label>\r\n          <div class=\"flexMe\">\r\n            <clr-stack-content>{{restaurant.address.address}}</clr-stack-content>\r\n            <clr-stack-content>\r\n            </clr-stack-content>\r\n          </div>\r\n\r\n\r\n          <clr-stack-block *ngFor=\"let food of restaurant.meals\">\r\n            <clr-stack-label>{{food.name}}</clr-stack-label>\r\n            <div class=\"flexMe\">\r\n              <clr-stack-content>{{food.description}}</clr-stack-content>\r\n              <clr-stack-content>\r\n              </clr-stack-content>\r\n            </div>\r\n            <clr-stack-block>\r\n\r\n\r\n              <clr-stack-label>Price</clr-stack-label>\r\n              <clr-stack-content>${{food.price}}</clr-stack-content>\r\n            </clr-stack-block>\r\n            <clr-stack-block>\r\n\r\n              <clr-stack-label>Allergies</clr-stack-label>\r\n              <clr-stack-content *ngIf=\"food.allergies.length > 0\">\r\n                <span *ngFor=\"let allergy of food.allergies;let last=last;let i = index\">{{allergy.name}}{{last ? '' : (i==food.allergies.length-2) ? ' and ' : ', '}}</span>\r\n              </clr-stack-content>\r\n\r\n\r\n            </clr-stack-block>\r\n\r\n          </clr-stack-block>\r\n\r\n        </clr-stack-block>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </clr-stack-view>\r\n</div>\r\n"

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
var allergies_service_1 = __webpack_require__("./app/app/services/allergies.service.ts");
var restaurant_service_1 = __webpack_require__("./app/app/services/restaurant.service.ts");
var meal_service_1 = __webpack_require__("./app/app/services/meal.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var map_component_1 = __webpack_require__("./app/app/components/form/map/map.component.ts");
var SplashComponent = /** @class */ (function () {
    function SplashComponent(allergiesService, mealService, restaurantService, router) {
        this.allergiesService = allergiesService;
        this.mealService = mealService;
        this.restaurantService = restaurantService;
        this.router = router;
        this.allergies = [];
        this.meals = [];
        this.rangeValues = [];
        this.allDataFetched = false;
    }
    SplashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allergiesService.getAllergies().subscribe(function (allergies) {
            // this.allergies = allergies;
            _this.allergies = allergies['allergies'];
        });
        this.rangeValues = [0, 100];
        this.getRestaurants();
    };
    SplashComponent.prototype.getRestaurants = function () {
        var _this = this;
        this.restaurantService.getRestaurantsAll().subscribe(function (restaurants) {
            console.log('The Restaurants: ', restaurants);
            // this function is for all. no need to redirect to login
            // if (!restaurants['data'] && restaurants['messages']) {
            //   this.router.navigate(['/login']);
            // }
            _this.restaurants = restaurants;
            console.log('New Rest: ', _this.restaurants);
            _this.getMenu();
        });
    };
    SplashComponent.prototype.onCheckboxChange = function (val, index) {
        this.allergies[index]['checked'] = !val;
    };
    SplashComponent.prototype.getSelectedOptionNames = function () {
        return this.allergies.filter(function (opt) { return opt.checked; }).map(function (opt) { return opt.name; });
    };
    SplashComponent.prototype.getminPrice = function (meals) {
        var minPrice = Math.min.apply(Math, meals.map(function (item) {
            return item.price;
        }));
        return minPrice;
    };
    SplashComponent.prototype.getmaxPrice = function (meals) {
        var maxPrice = Math.max.apply(Math, meals.map(function (item) {
            return item.price;
        }));
        return maxPrice;
    };
    SplashComponent.prototype.onSearch = function () {
        this.getRestaurants();
    };
    SplashComponent.prototype.getMenu = function () {
        var _this = this;
        var selectedNames = this.getSelectedOptionNames();
        this.mealService.getMenuAll().subscribe(function (menu) {
            // this function is for all. no need to redirect to login
            // if (!menu['data'] && menu['messages']) {
            //   this.router.navigate(['/login']);
            // }
            _this.meals = menu;
            console.log('the Meals: ', _this.meals);
            for (var i = 0; i < _this.meals.length; i++) {
                var price = parseInt(_this.meals[i].price, 10);
                if (price > _this.rangeValues[1] || price < _this.rangeValues[0]) {
                    _this.meals.splice(i, 1);
                    i--;
                    continue;
                }
                for (var j = 0; j < _this.meals[i].allergies.length; j++) {
                    if (selectedNames.indexOf(_this.meals[i].allergies[j].name) !== -1) {
                        _this.meals.splice(i, 1);
                        i--;
                        break;
                    }
                }
            }
            _this.formatFoodRestaurant();
        });
    };
    SplashComponent.prototype.formatFoodRestaurant = function () {
        var meals = this.meals;
        this.restaurants.forEach(function (restaurant) {
            restaurant['meals'] = [];
            meals.forEach(function (food) {
                if (food.restaurant_id === restaurant.id) {
                    restaurant['meals'].push(food);
                }
            });
        });
        this.allDataFetched = true;
        if (this.mapComponent) {
            this.mapComponent.setMarkers();
        }
    };
    __decorate([
        core_1.ViewChild(map_component_1.MapComponent),
        __metadata("design:type", map_component_1.MapComponent)
    ], SplashComponent.prototype, "mapComponent", void 0);
    SplashComponent = __decorate([
        core_1.Component({
            selector: 'app-splash',
            template: __webpack_require__("./app/app/components/splash/splash.component.html"),
            styles: [__webpack_require__("./app/app/components/splash/splash.component.css")],
            providers: [allergies_service_1.AllergiesService]
        }),
        __metadata("design:paramtypes", [allergies_service_1.AllergiesService,
            meal_service_1.MealService,
            restaurant_service_1.RestaurantService,
            router_1.Router])
    ], SplashComponent);
    return SplashComponent;
}());
exports.SplashComponent = SplashComponent;


/***/ }),

/***/ "./app/app/models/address.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;


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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var AllergiesService = /** @class */ (function () {
    function AllergiesService(http) {
        this.http = http;
    }
    AllergiesService.prototype.getAllergies = function () {
        return this.http.get('/api/allergies/');
        // return this.http
        //   .get<{ allergies: Allergy[] }>('/api/allergies/')
        //   .map((res) => (res.allergies as Allergy[]) || []);
    };
    AllergiesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AllergiesService);
    return AllergiesService;
}());
exports.AllergiesService = AllergiesService;


/***/ }),

/***/ "./app/app/services/meal.service.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var MealService = /** @class */ (function () {
    function MealService(http) {
        this.http = http;
    }
    MealService.prototype.getRestaurantMeals = function (id) {
        console.log('The Id: ', id);
        return this.http
            .get('/api/company/restaurants/' + id + '/meals')
            .map(function (res) { return res.meals || []; });
    };
    MealService.prototype.getMenuAll = function () {
        return this.http
            .get('/api/meals/')
            .map(function (res) { return res.meals || []; });
    };
    MealService.prototype.getMenu = function () {
        return this.http.get('/api/meals/');
    };
    MealService.prototype.create = function (payload) {
        console.log('Add Food Form Vals: ', payload);
        return this.http.post('/api/meals/', payload);
    };
    MealService.prototype.updateFood = function (payload) {
        console.log('update Food Form Vals: ', payload);
        return this.http.put('/api/meals/' + payload.id, payload);
    };
    MealService.prototype.delete = function (mealId) {
        console.log('Delete Food: ', mealId);
        return this.http.delete('/api/meals/' + mealId);
    };
    MealService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MealService);
    return MealService;
}());
exports.MealService = MealService;


/***/ }),

/***/ "./app/app/services/passport.service.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var PassportService = /** @class */ (function () {
    function PassportService(http) {
        this.http = http;
    }
    PassportService.prototype.login = function (formVals) {
        return this.http.post('/api/login', formVals);
    };
    PassportService.prototype.signup = function (formVals) {
        return this.http.post('/api/signup', formVals);
    };
    PassportService.prototype.logout = function () {
        return this.http.get('/api/logout');
    };
    PassportService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PassportService);
    return PassportService;
}());
exports.PassportService = PassportService;


/***/ }),

/***/ "./app/app/services/restaurant.service.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var RestaurantService = /** @class */ (function () {
    function RestaurantService(http) {
        this.http = http;
    }
    RestaurantService.prototype.getRestaurantsAll = function () {
        return this.http
            .get('/api/restaurants/')
            .map(function (res) { return res.restaurants || []; });
    };
    RestaurantService.prototype.getRestaurants = function () {
        return this.http.get('/api/restaurants/');
    };
    RestaurantService.prototype.addRestaurant = function (payload) {
        console.log('FormVals: ', payload);
        return this.http.post('/api/restaurants/', payload);
    };
    RestaurantService.prototype.updateRestaurant = function (payload) {
        return this.http.put('/api/restaurants/' + payload.id, payload);
    };
    RestaurantService.prototype.delete = function (id) {
        console.log('The Rest Id: ', id);
        return this.http.delete('/api/restaurants/' + id);
    };
    RestaurantService.prototype.readCompRestaurants = function () {
        return this.http
            .get('/api/company/restaurants')
            .map(function (res) { return res.restaurants || []; });
    };
    RestaurantService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RestaurantService);
    return RestaurantService;
}());
exports.RestaurantService = RestaurantService;


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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.createUser = function (user) {
    };
    UserService.prototype.getUser = function () {
        return this.http.get('/api/users');
    };
    UserService.prototype.updateUser = function (formVals) {
        return this.http.post('/api/signup/update', formVals);
    };
    UserService.prototype.deleteUser = function (user) {
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
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