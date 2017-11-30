webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.nextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/srv/http/www/FattyThomas/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Thomas Storyline\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n   <a href="http://ionicframework.com/docs/v2">docs</a> \n  </p>\n\n  <ion-slides pager>\n\n  <!-- <ion-slide>\n    <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n    <img src="assets/imgs/first_slide.jpg" style="width:400px;height:500px;">\n  </ion-slide>\n\n  <ion-slide>\n        <ion-toolbar blackcolor="white">\n        <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n    <img src="assets/imgs/junkfood_slide.jpg" style="width:400px;height:500px;">\n  </ion-slide>\n\n  <ion-slide>\n        <ion-toolbar blackcolor="white">\n        <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n    <img src="assets/imgs/second_slide.jpg" style="width:400px;height:500px;">\n  </ion-slide>\n\n  <ion-slide>\n            <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n    <img src="assets/imgs/third_slide.jpg" style="width:400px;height:500px;">\n  </ion-slide> -->\n    <ion-slide>\n  \n      <img src="assets/imgs/ready.jpg" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="nextPage();" >\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/srv/http/www/FattyThomas/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpmodal_helpmodal__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exercise_exercise__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainPage = (function () {
    function MainPage(modalCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
    }
    MainPage.prototype.help = function () {
        var helpModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__helpmodal_helpmodal__["a" /* HelpModalPage */], { userId: 8675309 });
        helpModal.present();
    };
    MainPage.prototype.goToExercise = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exercise_exercise__["a" /* ExercisePage */]);
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/srv/http/www/FattyThomas/src/pages/main/main.html"*/'<ion-header>\n \n    <ion-title align="center">\n      <ion-item><h1 align="center">Fatty Thomas</h1></ion-item>\n      \n    </ion-title>\n \n</ion-header>\n\n<ion-content padding>\n\n<h3>&nbsp;&nbsp;\n  <!-- <ion-icon name="ios-heart" color="red"></ion-icon> -->\n  <img src="assets/imgs/heart.jpg" style="width:35px;height:35px;">&nbsp;&nbsp;&nbsp;\n  <img src="assets/imgs/40healthbar.jpg" style="width:200px;height:35px;">\n  &nbsp;&nbsp;&nbsp;&nbsp;\n  <ion-icon name="md-information-circle" large (click)="help();"></ion-icon>\n</h3>\n\n<h3>&nbsp;&nbsp;\n <!--  <ion-icon name="ios-flash-outline"></ion-icon> -->\n  <img src="assets/imgs/energy.jpg" style="width:35px;height:35px;" > &nbsp;&nbsp;\n<img src="assets/imgs/100healthbar.jpg" style="width:200px;height:35px;" align="justify">\n\n</h3>\n<br><br><br>\n  <img src="assets/imgs/fatty_background_main.jpg" style="width:300px;height:330px;">\n\n\n<!-- <h2 align="right" ><ion-icon name="md-information-circle" (click)="help();"></ion-icon></h2> -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n        <button ion-button icon-end color="primary" round>\n        Let\'s Eat &nbsp;\n        <ion-icon name="ios-restaurant"></ion-icon>\n    </button>   \n      <button ion-button icon-end color="primary" round (click)="goToExercise();"> Let\'s EXERCISE \n        <ion-icon name="ios-walk"></ion-icon>\n      </button>\n\n           \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/srv/http/www/FattyThomas/src/pages/main/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpModalPage = (function () {
    function HelpModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    HelpModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HelpModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-helpmodal',template:/*ion-inline-start:"/srv/http/www/FattyThomas/src/pages/helpmodal/helpmodal.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n\n\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n -->\n<ion-content padding>\n   <ion-item padding>\n   	  <h1 align="center">   Help	</h1>\n\n	    <button ion-button icon-only small (click)="dismiss()" item-right>\n      		<ion-icon name="close" ></ion-icon>\n    	</button>\n</ion-item>\n\n<p align="center"> Hey dear, you need to assist and guide Thomas to live healthily. Be cautious feeding unhealthy food to Thomas. Have fun!!</p>\n\n<h5 align="center"><u>HEALTH BAR <ion-icon name="ios-heart" color="red"></ion-icon> </u></h5>\n<p align="center">Exercise Thomas to increase health bar!!</p>\n<p align="center"><img src="assets/imgs/helpinfo_health.jpg" style="width:200px;height:35px;" ></p>\n<p align="center"><img src="assets/imgs/healthbarhelpingo.jpg" style="width:200px;height:120px;" ></p>\n\n\n\n\n\n<h5 align="center"><u>ENERGY BAR <ion-icon name="ios-flash-outline"></ion-icon> </u></h5>\n<p align="center">Feed Thomas to increase energy bar!!</p>\n\n<p align="center"><img src="assets/imgs/help_infoEnergy.jpg" style="width:200px;height:35px;"></p>\n<p align="center"><img src="assets/imgs/energybarhelpingo.jpg" style="width:200px;height:120px;"></p>\n</ion-content>\n'/*ion-inline-end:"/srv/http/www/FattyThomas/src/pages/helpmodal/helpmodal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], HelpModalPage);
    return HelpModalPage;
}());

//# sourceMappingURL=helpmodal.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExercisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__running_running__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExercisePage = (function () {
    function ExercisePage(modalCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
    }
    ExercisePage.prototype.goToRunning = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__running_running__["a" /* RunningPage */]);
    };
    ExercisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exercise',template:/*ion-inline-start:"/srv/http/www/FattyThomas/src/pages/exercise/exercise.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Main\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 align="center"> Today\'s Exercise is Running !! </h3>\n<br><br><br>\n <p align="center"> <img src="assets/imgs/thomasexe.jpg" style="width:250px;height:300px;"> </p>\n\n\n<h3 align="center"> Are you ready? 15 Sec ... </h3>\n<p align="center"> <img src="assets/imgs/shakingphone.png" style="width:70px;height:70px;"> </p>\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n\n      <button ion-button large block (click)="goToRunning();"> Start\n      </button>\n\n           \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/srv/http/www/FattyThomas/src/pages/exercise/exercise.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ExercisePage);
    return ExercisePage;
}());

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RunningPage = (function () {
    function RunningPage(platform, navCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
    }
    RunningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-running',template:/*ion-inline-start:"/srv/http/www/FattyThomas/src/pages/running/running.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Main\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 align="center"> RUN !! </h3>\n<br><br><br>\n <p align="center"> <img src="assets/imgs/thomasexe.jpg" style="width:250px;height:300px;"> </p>\n\n\n<h3 align="center"> Are you ready? 15 Sec ... </h3>\n<p align="center"> <img src="assets/imgs/shakingphone.png" style="width:70px;height:70px;"> </p>\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n\n      <button ion-button large block (click)="goToRunning();"> Start\n      </button>\n\n           \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/srv/http/www/FattyThomas/src/pages/running/running.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object])
    ], RunningPage);
    return RunningPage;
    var _a, _b;
}());

//# sourceMappingURL=running.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main_main__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_helpmodal_helpmodal__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_exercise_exercise__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_running_running__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_helpmodal_helpmodal__["a" /* HelpModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_exercise_exercise__["a" /* ExercisePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_running_running__["a" /* RunningPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_helpmodal_helpmodal__["a" /* HelpModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_exercise_exercise__["a" /* ExercisePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_running_running__["a" /* RunningPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/srv/http/www/FattyThomas/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/srv/http/www/FattyThomas/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map