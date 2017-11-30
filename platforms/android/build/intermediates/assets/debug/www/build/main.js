webpackJsonp([3],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeAudio = nativeAudio;
    }
    DetailsPage.prototype.returnMain = function () {
        this.nativeAudio.play('buttonID1');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */], { health: "100healthbar" });
        this.nativeAudio.loop('uniqueId2');
        this.nativeAudio.stop('foodback');
    };
    DetailsPage.prototype.ionViewDidLoad = function () {
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.doughnutCanvasA.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Fats", "Carbohyrates", "Protein", "Vitamin", "Sugar", "Dietary fiber"],
                datasets: [{
                        label: "My First dataset",
                        data: [80, 90, 22, 5, 70, 5.9],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.doughnutCanvasB.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Fats", "Carbohyrates", "Protein", "Vitamin", "Sugar", "Dietary fiber"],
                datasets: [{
                        label: '# of Votes',
                        data: [25, 80, 62, 50, 20, 80],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvasA'),
        __metadata("design:type", Object)
    ], DetailsPage.prototype, "doughnutCanvasA", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvasB'),
        __metadata("design:type", Object)
    ], DetailsPage.prototype, "doughnutCanvasB", void 0);
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Project\FattyThomas\src\pages\details\details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title align="center"> Nutrition in Meals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 align="center" ></h3>\n\n<!--     <ion-card>\n      <ion-card-header>\n        Bar Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n    </ion-card> -->\n \n    <ion-card>\n      <ion-card-header>\n        <h1 align="center">Nutrition in Set A</h1>\n      </ion-card-header>\n      <ion-card-content >\n        <p align="center">\n          <img src="assets/imgs/setAwoframe.png" style="width:130px;height:120px;">\n        </p>\n        <br>\n        <p align="center">\n          TOTAL CALORIES: 1000kcal\n        </p>\n        <canvas #doughnutCanvasA></canvas>\n        <p align="center">\n          Represented in grams(g)\n        </p>         \n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <h1 align="center">Nutrition in Set B</h1>\n      </ion-card-header>\n      <ion-card-content>\n        <p align="center">\n          <img src="assets/imgs/setBwoframe.png" style="width:150px;height:120px;">\n        </p>\n        <br>\n        <p align="center">\n          TOTAL CALORIES: 600kcal\n        </p>                \n        <canvas #doughnutCanvasB>\n          \n        </canvas>\n        <p align="center">\n          Represented  in grams(g)\n        </p>          \n      </ion-card-content>\n    </ion-card> \n<!--     <ion-card>\n      <ion-card-header>\n        Line Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n    </ion-card> -->\n    \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n\n      <button ion-button large block (click)="returnMain();"> Return Home\n      </button>\n\n           \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Project\FattyThomas\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetseatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LetseatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LetseatPage = (function () {
    function LetseatPage(navCtrl, navParams, alertCtrl, viewCtrl, modalCtrl, vibration, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.vibration = vibration;
        this.nativeAudio = nativeAudio;
        this.imgs = ["A", "B"];
        this.nativeAudio.preloadSimple('correct1', 'assets/audio/correct.mp3');
        nativeAudio.preloadComplex('buttonID1', 'assets/audio/button.mp3', 1, 1, 0);
        this.nativeAudio.preloadSimple('incorrect', 'assets/audio/incorrect.mp3');
    }
    LetseatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LetseatPage');
    };
    LetseatPage.prototype.presentConfirmSet = function (set) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Set ' + set,
            message: 'Do you want feed this to thomas?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.nativeAudio.play('buttonID1');
                    }
                },
                {
                    text: 'Feed him!',
                    handler: function () {
                        console.log('feed him clicked');
                        _this.prompt(set);
                        _this.nativeAudio.play('buttonID1');
                    }
                }
            ]
        });
        alert.present();
        this.nativeAudio.play('buttonID1');
    };
    LetseatPage.prototype.prompt = function (set) {
        if (set == "A") {
            this.setA();
        }
        else {
            this.setB();
        }
    };
    LetseatPage.prototype.setA = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oh No!',
            subTitle: "It's an unhealthy choice option!<br><br>Calories Gained: 1000 kcal <br><br><b>Energy + 2</b>",
            buttons: [
                {
                    text: 'Show Nutrition in Meals',
                    cssClass: 'center',
                    handler: function () {
                        console.log('details clicked'),
                            _this.details();
                    }
                }
            ]
        });
        alert.present();
        this.nativeAudio.play('incorrect');
        this.vibration.vibrate(500);
    };
    LetseatPage.prototype.setB = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Good Choice!',
            subTitle: 'You have chosen an healthy option!<br><br>Calories Gained: 600 kcal <br><br><b>Energy + 1</b>',
            buttons: [
                {
                    text: 'Show Nutrition in Meals',
                    cssClass: 'center',
                    handler: function () {
                        console.log('details clicked'),
                            _this.details();
                    }
                }
            ]
        });
        alert.present();
        this.nativeAudio.play('correct1');
    };
    LetseatPage.prototype.details = function () {
        this.nativeAudio.play('buttonID1');
        var helpModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { userId: 8675309 });
        helpModal.present();
    };
    LetseatPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        this.nativeAudio.play('buttonID1');
        this.nativeAudio.loop('uniqueId2');
        this.nativeAudio.stop('foodback');
    };
    LetseatPage.prototype.main = function () {
        this.nativeAudio.play('buttonID1');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
        this.nativeAudio.loop('uniqueId2');
        this.nativeAudio.stop('foodback');
    };
    LetseatPage.prototype.itemSelected = function (img) {
        this.selected = img;
        console.log(this.selected);
    };
    LetseatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-letseat',template:/*ion-inline-start:"C:\Project\FattyThomas\src\pages\letseat\letseat.html"*/'<!--\n  Generated template for the LetseatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<!-- <ion-header>\n\n\n	<h2 align="center">Let\'s Eat!\n		<button ion-button small (click)="dismiss()" item-right ion-button color="danger" align="right">Exit</button>\n	</h2>\n\n\n</ion-header> -->\n<!-- \n   <ion-item padding>\n   	  <h1 align="center">   Help	</h1>\n\n	    <button ion-button icon-only small (click)="dismiss()" item-right>\n      		<ion-icon name="close" ></ion-icon>\n    	</button>\n</ion-item> -->\n\n<ion-header>\n\n	<ion-title>\n	<table >\n	  <tr>\n	    <th align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="+3">Let\'s Eat! </font> </th>\n	    <td align="right"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n	      <button ion-button icon-only large (click)="dismiss()" item-right>\n	          <ion-icon name="close" ></ion-icon>\n	      </button>      \n	    </td>\n	</tr>\n	</table>		\n<!-- 		<h1 align="center">   Help	</h1>\n	    <button ion-button icon-only large (click)="dismiss()" item-right>\n      		<ion-icon name="close" ></ion-icon>\n    	</button>	 -->	\n	</ion-title>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-list>\n<!-- 		<ion-item padding>\n	   	  <h1 align="center">    Let\'s Eat!   	</h1>\n\n		    <button ion-button icon-only small (click)="dismiss()" item-right>\n	      		<ion-icon name="close" ></ion-icon>\n	    	</button>\n		</ion-item> -->\n		<img src="assets/imgs/choosemeal.png" style="width:380px;height:180px;" >\n\n		<h4 align="center"><u>Choose a meal for Thomas!</u></h4>\n\n\n<!-- 		<ion-item  align="left">\n		    <button item-left (click)="presentConfirmA();">\n	      		<img src="assets/imgs/seta.png" style="width:130px;height:150px;" >\n	    	</button>\n\n		    <button item-right (click)="presentConfirmB();">\n	      		<img src="assets/imgs/setb.png" style="width:250px;height:150px;" >\n	    	</button>\n		</ion-item> -->\n	<ion-card *ngFor="let img of imgs" (click)="presentConfirmSet(img)">\n      <ion-card-header>\n        <h1 align="center"><b>Set {{img}}</b></h1>\n      </ion-card-header>		\n	  <button ion-item >\n	    <p align="center"><img src="assets/imgs/set{{img}}woframe.png" style="width:200px;height:170px;"></p>\n	  </button>		\n	</ion-card>\n	</ion-list>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar>\n\n\n      <button ion-button large block (click)="presentConfirmSet(selected);"> Confirm Set( {{selected}} )\n      </button>\n           \n  </ion-toolbar>\n</ion-footer>\n -->'/*ion-inline-end:"C:\Project\FattyThomas\src\pages\letseat\letseat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], LetseatPage);
    return LetseatPage;
}());

//# sourceMappingURL=letseat.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatsPage = (function () {
    function StatsPage(navCtrl, navParams, alertCtrl, viewCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.nativeAudio = nativeAudio;
    }
    StatsPage.prototype.ionViewDidLoad = function () {
        this.lineCanvasIPOP = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvasIPOP.nativeElement, {
            type: 'line',
            data: {
                labels: ["24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov", "30 Nov"],
                datasets: [
                    {
                        label: "Calories Input",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(30,144,255,0.4)",
                        borderColor: "rgba(30,144,255,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(30,144,255,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(30,144,255,1)",
                        pointHoverBorderColor: "rgba(30,144,255,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [1000, 1670, 1242, 1023, 1442, 1412, 1800],
                        spanGaps: false,
                    },
                    {
                        label: "Calories Output",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255,69,0,0.4)",
                        borderColor: "rgba(255,69,0,2)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255,69,0,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,69,0,1)",
                        pointHoverBorderColor: "rgba(255,69,0,0.8)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [800, 900, 700, 800, 900, 400, 700],
                        spanGaps: false,
                    }
                ]
            }
        });
        this.lineCanvasComputed = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvasComputed.nativeElement, {
            type: 'line',
            data: {
                labels: ["24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov", "30 Nov"],
                datasets: [
                    {
                        label: "Final Calories",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(30,144,255,0.4)",
                        borderColor: "rgba(30,144,255,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(30,144,255,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(30,144,255,1)",
                        pointHoverBorderColor: "rgba(30,144,255,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [10000, 16700, 12420, 10203, 14402, 14012, 18000],
                        spanGaps: false,
                    },
                    {
                        label: "Losing Weight Baseline",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(154,205,50,0.4)",
                        borderColor: "rgba(154,205,50,2)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(154,205,50,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(154,205,50,1)",
                        pointHoverBorderColor: "rgba(154,205,50,0.8)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [14000, 14000, 14000, 14000, 14000, 14000, 14000],
                        spanGaps: false,
                    },
                    {
                        label: "Gaining Weight Baseline",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255,99,71,0.4)",
                        borderColor: "rgba(255,99,71,2)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255,99,71,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,99,71,1)",
                        pointHoverBorderColor: "rgba(255,99,71,0.8)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [16000, 16000, 16000, 16000, 16000, 16000, 16000],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    StatsPage.prototype.main = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
        this.nativeAudio.play('buttonID1');
    };
    StatsPage.prototype.moredetails = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "<h5><u>Total Calories Consumed</u><br></h5>",
            subTitle: '<br>Total Intake(Food): <br> 12600 kcal <br><br> Total Burned(Exercise): <br> 5285 kcal <br><br> Total Burned(Overall) : <br> 17885 kcal',
            buttons: [
                {
                    text: 'Dismiss',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.nativeAudio.play('buttonID1');
                    }
                }
            ]
        });
        alert.present();
        this.nativeAudio.play('buttonID1');
    };
    StatsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        this.nativeAudio.play('buttonID1');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvasIPOP'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "lineCanvasIPOP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvasComputed'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "lineCanvasComputed", void 0);
    StatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stats',template:/*ion-inline-start:"C:\Project\FattyThomas\src\pages\stats\stats.html"*/'<ion-header>\n\n  <ion-title>\n  <table >\n    <tr>\n      <th align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="+2">Track Calories </font> </th>\n      <td align="right"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <button ion-button icon-only large (click)="main()" item-right>\n            <ion-icon name="close" ></ion-icon>\n        </button>      \n      </td>\n  </tr>\n  </table>    \n<!--    <h1 align="center">   Help  </h1>\n      <button ion-button icon-only large (click)="dismiss()" item-right>\n          <ion-icon name="close" ></ion-icon>\n      </button>  -->  \n  </ion-title>\n\n</ion-header>\n<ion-content>\n    <ion-list>\n<!--     <ion-item padding>\n        <h1 align="center">        </h1>\n\n        <button ion-button icon-only small (click)="main()" item-right>\n            <ion-icon name="close" ></ion-icon>\n        </button>\n    </ion-item> -->\n    <ion-card>\n      <ion-card-header>\n        <h2 align="center">Calories Burn-out Chart</h2>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvasIPOP></canvas>\n        <br>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <h2 align="center">Final Calories Consumed Chart</h2>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvasComputed></canvas>\n        <br>\n        <p align="center">Final Calories = Calories Input - Calories Output</p>\n        <br>\n        <p align="center"><button ion-button (click)="moredetails();" >Show total Calories consumed</button></p>  \n        \n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n<!--       <ion-card-header>\n        <h5 align="center"><u>TIPS</u></h5>\n      </ion-card-header> -->\n      <ion-card-content>\n        <h3><u><b>TIPS</b></u></h3>\n       <p>(1) To lose a pound, you must burn 3,500 more calories than he consumes in week. <br>(2) 60 or more minutes of daily exercise can boost caloric burn to a level that leads to weight loss</p>   \n\n      </ion-card-content>\n    </ion-card>    \n    \n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Project\FattyThomas\src\pages\stats\stats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], StatsPage);
    return StatsPage;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details/details.module": [
		456,
		2
	],
	"../pages/letseat/letseat.module": [
		457,
		1
	],
	"../pages/stats/stats.module": [
		458,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(25);
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
    function HelpModalPage(navCtrl, navParams, viewCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.nativeAudio = nativeAudio;
    }
    HelpModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        this.nativeAudio.play('buttonID1');
    };
    HelpModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-helpmodal',template:/*ion-inline-start:"C:\Project\FattyThomas\src\pages\helpmodal\helpmodal.html"*/'<ion-header>\n\n	<ion-title>\n	<table >\n	  <tr>\n	    <th align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="+3">Help</font> </th>\n	    <td align="right"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n	      <button ion-button icon-only large (click)="dismiss()" item-right>\n	          <ion-icon name="close" ></ion-icon>\n	      </button>      \n	    </td>\n	</tr>\n	</table>		\n<!-- 		<h1 align="center">   Help	</h1>\n	    <button ion-button icon-only large (click)="dismiss()" item-right>\n      		<ion-icon name="close" ></ion-icon>\n    	</button>	 -->	\n	</ion-title>\n\n</ion-header>\n\n<ion-content padding>\n<!--    <ion-item padding>\n   	  <h1 align="center">   Help	</h1>\n\n	    <button ion-button icon-only large (click)="dismiss()" item-right>\n      		<ion-icon name="close" ></ion-icon>\n    	</button>\n</ion-item>\n -->\n<p align="center"> Your Goal: Assist and guide Thomas to lead a healthy lifestyle! Be cautious when choosing meal for Thomas.</p>\n\n<h5 align="center"><u><ion-icon name="ios-heart" color="red"></ion-icon> HEALTH BAR <ion-icon name="ios-heart" color="red"></ion-icon> </u></h5>\n<p align="center"><img src="assets/imgs/helpinfo_health.jpg" style="width:200px;height:35px;" ></p>\n<p align="center">Select healthy meal and exercise Thomas to increase health bar!! </p>\n\n<!-- <p align="center"><img src="assets/imgs/healthbarhelpingo.jpg" style="width:230px;height:140px;" ></p> -->\n\n\n\n\n\n<h5 align="center"><u><ion-icon name="ios-flash-outline"></ion-icon> ENERGY BAR <ion-icon name="ios-flash-outline"></ion-icon> </u></h5>\n\n<p align="center"><img src="assets/imgs/help_infoEnergy.jpg" style="width:200px;height:35px;"></p>\n<p align="center">Feed Thomas to increase energy bar!!</p>\n<p align="center"><img src="assets/imgs/energybarhelpingo.jpg" style="width:230px;height:140px;"></p>\n\n\n\n\n<h6 align="center"><u><ion-icon name="md-pulse" large ></ion-icon> Health Description <ion-icon name="md-pulse" large ></ion-icon> </u></h6>\n<p align="center">Press and hold thomas at the homescreen to check out his current health status!</p>\n<p align="center"><img src="assets/imgs/weightinfo.png" style="width:200px;height:200px;"></p>\n\n\n<h6 align="center"><u> BMI </u></h6>\n<p align="center">The BMI is an attempt to quantify the amount of tissue mass (muscle, fat, and bone) in an individual</p> \n<p align="center"><img src="assets/imgs/bmiwframe.png" ></p>\n</ion-content>\n'/*ion-inline-end:"C:\Project\FattyThomas\src\pages\helpmodal\helpmodal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], HelpModalPage);
    return HelpModalPage;
}());

//# sourceMappingURL=helpmodal.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExercisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__running_running__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(25);
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
    function ExercisePage(modalCtrl, navCtrl, viewCtrl, nativeAudio) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.nativeAudio = nativeAudio;
    }
    ExercisePage.prototype.goToRunning = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__running_running__["a" /* RunningPage */]);
    };
    ExercisePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        this.nativeAudio.play('buttonID1');
    };
    ExercisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exercise',template:/*ion-inline-start:"C:\Project\FattyThomas\src\pages\exercise\exercise.html"*/'<ion-header>\n\n  <ion-title>\n  <table >\n    <tr>\n      <th align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="+3">Let\'s Exercise!   </font> </th>\n      <td align="right"> &nbsp;&nbsp;&nbsp;\n        <button ion-button icon-only large (click)="dismiss()" item-right>\n            <ion-icon name="close" ></ion-icon>\n        </button>      \n      </td>\n  </tr>\n  </table>    \n\n  </ion-title>\n\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <h3 align="center"> Today\'s Exercise is Running !! </h3>\n<br>\n <p align="center"> <img src="assets/imgs/thomasexe.jpg" style="width:250px;height:300px;"> </p>\n\n<br>\n<h3 align="center">Are you ready?</h3>\n<h3>  Move around to burn off calories ... </h3>\n<p align="center"> <img src="assets/imgs/walking.png" style="width:70px;height:70px;"> </p>\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n\n      <button ion-button large block (click)="goToRunning();"> Start\n      </button>\n\n           \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Project\FattyThomas\src\pages\exercise\exercise.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], ExercisePage);
    return ExercisePage;
}());

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_pedometer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(25);
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
    function RunningPage(platform, navCtrl, viewCtrl, alertCtrl, pedometer, vibration, nativeAudio, ref) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.pedometer = pedometer;
        this.vibration = vibration;
        this.nativeAudio = nativeAudio;
        this.ref = ref;
        this.steps = 12;
        this.img = "progress0.jpg";
        this.img1 = "progress20.jpg";
        this.img2 = "progress40.jpg";
        this.img3 = "progress60.jpg";
        this.img4 = "progress60.jpg";
        this.img5 = "progress80.jpg";
        this.img6 = "progress100.jpg";
        this.walking();
        this.nativeAudio.preloadSimple('correct1', 'assets/audio/correct.mp3');
    }
    RunningPage.prototype.update = function () {
        this.ref.detectChanges();
    };
    RunningPage.prototype.walking = function () {
        var _this = this;
        this.nativeAudio.play('buttonID1');
        this.pedometer.startPedometerUpdates().subscribe(function (data) {
            _this.steps = _this.steps - 1;
            if (_this.steps > 7 && _this.steps < 10) {
                _this.img = _this.img1;
                _this.update();
            }
            if (_this.steps > 5 && _this.steps < 8) {
                _this.img = _this.img2;
                _this.update();
            }
            if (_this.steps > 3 && _this.steps < 6) {
                _this.img = _this.img3;
                _this.update();
            }
            if (_this.steps > 1 && _this.steps < 4) {
                _this.img = _this.img4;
                _this.update();
            }
            if (_this.steps > 0 && _this.steps < 2) {
                _this.img = _this.img5;
                _this.update();
            }
            if (_this.steps < 1) {
                _this.img = _this.img6;
                _this.pedometer.stopPedometerUpdates();
                _this.nativeAudio.play('correct1');
                _this.vibration.vibrate(500);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Good Job!!',
                    message: 'You have completed 30 minutes running for today! <br><br> Calories Burned: 350kcal <br><br><b>Energy - 3</b>',
                    buttons: [
                        {
                            text: 'Back to Main',
                            handler: function () {
                                console.log('Quit clicked'),
                                    _this.details();
                                _this.nativeAudio.play('buttonID1');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */], { thomas: "moderate_background_main", bmistatus: "50healthbar" });
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    RunningPage.prototype.dismiss = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Quit',
            message: 'Do you really want to quit?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.nativeAudio.play('buttonID1');
                    }
                },
                {
                    text: 'Quit',
                    handler: function () {
                        console.log('Quit clicked'),
                            _this.details();
                        _this.nativeAudio.play('buttonID1');
                    }
                }
            ]
        });
        alert.present();
        this.nativeAudio.play('buttonID1');
    };
    RunningPage.prototype.details = function () {
        this.nativeAudio.play('buttonID1');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */], { health: "50healthbar" });
    };
    RunningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-running',template:/*ion-inline-start:"C:\Project\FattyThomas\src\pages\running\running.html"*/'<ion-header>\n\n  <ion-title>\n  <table >\n    <tr>\n      <th align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="+2">Exercise - Running </font> </th>\n      <td align="right"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <button ion-button icon-only large (click)="dismiss()" item-right>\n            <ion-icon name="close" ></ion-icon>\n        </button>      \n      </td>\n  </tr>\n  </table>    \n<!--    <h1 align="center">   Help  </h1>\n      <button ion-button icon-only large (click)="dismiss()" item-right>\n          <ion-icon name="close" ></ion-icon>\n      </button>  -->  \n  </ion-title>\n\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <br>\n  <br>\n  <br>\n\n<!--       <ion-item padding>\n        <h1 align="center">    Exercise - Running     </h1>\n\n        <button ion-button icon-only small (click)="dismiss()" item-right>\n            <ion-icon name="close" ></ion-icon>\n        </button>\n    </ion-item> -->\n\n\n\n    <h3 align="center"><b>{{steps}}</b> more step(s) to go ..</h3>\n      <p align="center"><img src="assets/imgs/{{img}}" ></p>\n\n\n\n</ion-content>\n\n\n\n\n\n\n<!-- <ion-footer>\n  <ion-toolbar>\n\n      <button ion-button large block color="red"> Stop\n      </button>\n\n           \n  </ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"C:\Project\FattyThomas\src\pages\running\running.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_pedometer__["a" /* Pedometer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], RunningPage);
    return RunningPage;
}());

//# sourceMappingURL=running.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(25);
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
    function HomePage(navCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.nativeAudio = nativeAudio;
        this.splash = true;
        nativeAudio.preloadComplex('uniqueId2', 'assets/audio/GB1.mp3', 1, 1, 0);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
    };
    HomePage.prototype.nextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */]);
        this.nativeAudio.loop('uniqueId2');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Project\FattyThomas\src\pages\home\home.html"*/'\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="assets/splash/sticker.png">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <h1 align="center" ><font size="+3.5">Thomas Storyline</font></h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-slides pager>\n\n  <ion-slide>\n    <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="nextPage();">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n    <img src="assets/imgs/first_slide.jpg" style="width:400px;height:500px;"><br><br><br><br>\n  </ion-slide>\n\n  <ion-slide>\n        <ion-toolbar blackcolor="white">\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="nextPage();">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n    <img src="assets/imgs/junkfood_slide.jpg" style="width:400px;height:500px;"><br><br><br><br>\n  </ion-slide>\n\n  <ion-slide>\n        <ion-toolbar blackcolor="white">\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="nextPage();">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n    <img src="assets/imgs/second_slide.jpg" style="width:400px;height:500px;"><br><br><br><br>\n  </ion-slide>\n\n  <ion-slide>\n            <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="nextPage();">Skip</button>\n        </ion-buttons>\n      </ion-toolbar>\n    <img src="assets/imgs/third_slide.jpg" style="width:400px;height:500px;"><br><br><br><br>\n  </ion-slide>\n    <ion-slide>\n  \n      <img src="assets/imgs/ready.jpg" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="nextPage();" >\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Project\FattyThomas\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main_main__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_helpmodal_helpmodal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_letseat_letseat__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_details_details__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_stats_stats__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_exercise_exercise__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_running_running__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_vibration__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_audio__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_pedometer__ = __webpack_require__(169);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_letseat_letseat__["a" /* LetseatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_exercise_exercise__["a" /* ExercisePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_running_running__["a" /* RunningPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_stats_stats__["a" /* StatsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/letseat/letseat.module#LetseatPageModule', name: 'LetseatPage', segment: 'letseat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stats/stats.module#StatsPageModule', name: 'StatsPage', segment: 'stats', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_helpmodal_helpmodal__["a" /* HelpModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_letseat_letseat__["a" /* LetseatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_exercise_exercise__["a" /* ExercisePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_running_running__["a" /* RunningPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_stats_stats__["a" /* StatsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_pedometer__["a" /* Pedometer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpmodal_helpmodal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exercise_exercise__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__letseat_letseat__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stats_stats__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(25);
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
    function MainPage(modalCtrl, navCtrl, navParams, alertCtrl, viewCtrl, nativeAudio) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.nativeAudio = nativeAudio;
        this.thomas = "fatty_background_main";
        this.health = "60healthbar";
        this.bmistatus = "40healthbar";
        nativeAudio.preloadComplex('buttonID1', 'assets/audio/button.mp3', 1, 3, 0);
        nativeAudio.preloadComplex('foodback', 'assets/audio/food.mp3', 1, 1, 0);
        if (navParams.get('health') != null) {
            this.health = navParams.get('health');
        }
        if (navParams.get('thomas') != null) {
            this.thomas = navParams.get('thomas');
        }
        if (navParams.get('bmistatus') != null) {
            this.bmistatus = navParams.get('bmistatus');
        }
    }
    MainPage.prototype.help = function () {
        this.nativeAudio.play('buttonID1');
        var helpModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__helpmodal_helpmodal__["a" /* HelpModalPage */], { userId: 8675309 });
        helpModal.present();
    };
    MainPage.prototype.goToExercise = function () {
        this.nativeAudio.play('buttonID1');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exercise_exercise__["a" /* ExercisePage */]);
    };
    MainPage.prototype.goToEat = function () {
        this.nativeAudio.play('buttonID1');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__letseat_letseat__["a" /* LetseatPage */]);
        this.nativeAudio.stop('uniqueId2');
        this.nativeAudio.loop('foodback');
    };
    MainPage.prototype.goToStats = function () {
        this.nativeAudio.play('buttonID1');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__stats_stats__["a" /* StatsPage */]);
    };
    MainPage.prototype.checkStats = function () {
        this.nativeAudio.play('buttonID1');
        var alert = this.alertCtrl.create({
            title: '<u>Health Description</u><br>',
            subTitle: '<br>Weight(KG)&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45 <br> Height(CM)&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;120 <br> BMI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31.3',
            buttons: [
                {
                    text: 'Dismiss',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    MainPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        this.nativeAudio.loop('uniqueId2');
        this.nativeAudio.stop('foodback');
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Project\FattyThomas\src\pages\main\main.html"*/'<ion-header>\n \n    <ion-title align="center">\n      <ion-item><h2 align="center" ><font size="+2"><b>Stay Healthy with Thomas!</b></font></h2></ion-item>\n      \n    </ion-title>\n  <style>\n  .backgroundpic\n  {\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n  .statspic\n  {\n    position: absolute;\n    bottom: 30px;\n    right: 25px;\n  }\n  </style> \n</ion-header>\n\n<ion-content padding>\n<table align="center">\n  <tr>\n    <td>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<img src="assets/imgs/heart.jpg" style="width:50px;height:50px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n    </td>\n    <td>\n\n       <img src="assets/imgs/{{bmistatus}}.jpg" style="width:200px;height:50px;">\n       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    </td>\n    <td>\n&nbsp;\n       <img src="assets/imgs/info-button.png" style="width:45px;height:45px;" (click)="help()">         \n    </td>\n  </tr>\n  <tr>\n\n       <td>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<img src="assets/imgs/energy.jpg" style="width:50px;height:50px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n    </td>\n    <td>\n\n       <img src="assets/imgs/{{health}}.jpg" style="width:200px;height:50px;">\n       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    </td>\n    <td>\n     \n    </td>\n\n  </tr>\n\n</table>\n\n<br>\n\n<table >\n  <tr>\n    <td rowspan="2"><img src="assets/imgs/{{thomas}}.jpg" style="width:350px;height:500px;"  (press)="checkStats()" class="backgroundpic">\n    </td>\n    <td> &nbsp; </td>\n  </tr>\n<tr><td></td><td valign="bottom">\n\n<img src="assets/imgs/st2.png" style="width:75px;height:75px;" (click)="goToStats();" class="statspic">\n</td></tr>\n</table>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n\n<!--       <button ion-button color="primary" round (click)="goToEat();">\n        Let\'s Eat &nbsp;\n        <ion-icon name="ios-restaurant" ></ion-icon>\n      </button> \n\n      <button ion-button color="primary" round (click)="goToExercise();"> \n        Let\'s EXERCISE &nbsp;\n        <ion-icon name="ios-walk"></ion-icon>\n      </button> -->\n  <table  >\n\n    <tr>\n        <td rowspan="2" align="center"><button ion-button color="primary" block (click)="goToEat();" style="height:70px;">\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="+2">Let\'s <br> Eat </font>&nbsp;&nbsp;&nbsp;\n        <h1><ion-icon name="ios-restaurant"></ion-icon></h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      </button> </td><td><p>&nbsp;</p></td>\n\n\n      <td align="center" ><button ion-button color="primary" block (click)="goToExercise();" style="height:70px;"> \n        &nbsp;&nbsp;&nbsp;<font size="+2" >Let\'s <br> EXERCISE </font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <h1><ion-icon name="ios-walk"></ion-icon></h1>\n      </button></td>\n  </tr>\n  <tr>\n    <td></td><td></td>\n\n\n  </tr>\n  </table>\n</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Project\FattyThomas\src\pages\main\main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 176,
	"./af.js": 176,
	"./ar": 177,
	"./ar-dz": 178,
	"./ar-dz.js": 178,
	"./ar-kw": 179,
	"./ar-kw.js": 179,
	"./ar-ly": 180,
	"./ar-ly.js": 180,
	"./ar-ma": 181,
	"./ar-ma.js": 181,
	"./ar-sa": 182,
	"./ar-sa.js": 182,
	"./ar-tn": 183,
	"./ar-tn.js": 183,
	"./ar.js": 177,
	"./az": 184,
	"./az.js": 184,
	"./be": 185,
	"./be.js": 185,
	"./bg": 186,
	"./bg.js": 186,
	"./bn": 187,
	"./bn.js": 187,
	"./bo": 188,
	"./bo.js": 188,
	"./br": 189,
	"./br.js": 189,
	"./bs": 190,
	"./bs.js": 190,
	"./ca": 191,
	"./ca.js": 191,
	"./cs": 192,
	"./cs.js": 192,
	"./cv": 193,
	"./cv.js": 193,
	"./cy": 194,
	"./cy.js": 194,
	"./da": 195,
	"./da.js": 195,
	"./de": 196,
	"./de-at": 197,
	"./de-at.js": 197,
	"./de-ch": 198,
	"./de-ch.js": 198,
	"./de.js": 196,
	"./dv": 199,
	"./dv.js": 199,
	"./el": 200,
	"./el.js": 200,
	"./en-au": 201,
	"./en-au.js": 201,
	"./en-ca": 202,
	"./en-ca.js": 202,
	"./en-gb": 203,
	"./en-gb.js": 203,
	"./en-ie": 204,
	"./en-ie.js": 204,
	"./en-nz": 205,
	"./en-nz.js": 205,
	"./eo": 206,
	"./eo.js": 206,
	"./es": 207,
	"./es-do": 208,
	"./es-do.js": 208,
	"./es.js": 207,
	"./et": 209,
	"./et.js": 209,
	"./eu": 210,
	"./eu.js": 210,
	"./fa": 211,
	"./fa.js": 211,
	"./fi": 212,
	"./fi.js": 212,
	"./fo": 213,
	"./fo.js": 213,
	"./fr": 214,
	"./fr-ca": 215,
	"./fr-ca.js": 215,
	"./fr-ch": 216,
	"./fr-ch.js": 216,
	"./fr.js": 214,
	"./fy": 217,
	"./fy.js": 217,
	"./gd": 218,
	"./gd.js": 218,
	"./gl": 219,
	"./gl.js": 219,
	"./gom-latn": 220,
	"./gom-latn.js": 220,
	"./he": 221,
	"./he.js": 221,
	"./hi": 222,
	"./hi.js": 222,
	"./hr": 223,
	"./hr.js": 223,
	"./hu": 224,
	"./hu.js": 224,
	"./hy-am": 225,
	"./hy-am.js": 225,
	"./id": 226,
	"./id.js": 226,
	"./is": 227,
	"./is.js": 227,
	"./it": 228,
	"./it.js": 228,
	"./ja": 229,
	"./ja.js": 229,
	"./jv": 230,
	"./jv.js": 230,
	"./ka": 231,
	"./ka.js": 231,
	"./kk": 232,
	"./kk.js": 232,
	"./km": 233,
	"./km.js": 233,
	"./kn": 234,
	"./kn.js": 234,
	"./ko": 235,
	"./ko.js": 235,
	"./ky": 236,
	"./ky.js": 236,
	"./lb": 237,
	"./lb.js": 237,
	"./lo": 238,
	"./lo.js": 238,
	"./lt": 239,
	"./lt.js": 239,
	"./lv": 240,
	"./lv.js": 240,
	"./me": 241,
	"./me.js": 241,
	"./mi": 242,
	"./mi.js": 242,
	"./mk": 243,
	"./mk.js": 243,
	"./ml": 244,
	"./ml.js": 244,
	"./mr": 245,
	"./mr.js": 245,
	"./ms": 246,
	"./ms-my": 247,
	"./ms-my.js": 247,
	"./ms.js": 246,
	"./my": 248,
	"./my.js": 248,
	"./nb": 249,
	"./nb.js": 249,
	"./ne": 250,
	"./ne.js": 250,
	"./nl": 251,
	"./nl-be": 252,
	"./nl-be.js": 252,
	"./nl.js": 251,
	"./nn": 253,
	"./nn.js": 253,
	"./pa-in": 254,
	"./pa-in.js": 254,
	"./pl": 255,
	"./pl.js": 255,
	"./pt": 256,
	"./pt-br": 257,
	"./pt-br.js": 257,
	"./pt.js": 256,
	"./ro": 258,
	"./ro.js": 258,
	"./ru": 259,
	"./ru.js": 259,
	"./sd": 260,
	"./sd.js": 260,
	"./se": 261,
	"./se.js": 261,
	"./si": 262,
	"./si.js": 262,
	"./sk": 263,
	"./sk.js": 263,
	"./sl": 264,
	"./sl.js": 264,
	"./sq": 265,
	"./sq.js": 265,
	"./sr": 266,
	"./sr-cyrl": 267,
	"./sr-cyrl.js": 267,
	"./sr.js": 266,
	"./ss": 268,
	"./ss.js": 268,
	"./sv": 269,
	"./sv.js": 269,
	"./sw": 270,
	"./sw.js": 270,
	"./ta": 271,
	"./ta.js": 271,
	"./te": 272,
	"./te.js": 272,
	"./tet": 273,
	"./tet.js": 273,
	"./th": 274,
	"./th.js": 274,
	"./tl-ph": 275,
	"./tl-ph.js": 275,
	"./tlh": 276,
	"./tlh.js": 276,
	"./tr": 277,
	"./tr.js": 277,
	"./tzl": 278,
	"./tzl.js": 278,
	"./tzm": 279,
	"./tzm-latn": 280,
	"./tzm-latn.js": 280,
	"./tzm.js": 279,
	"./uk": 281,
	"./uk.js": 281,
	"./ur": 282,
	"./ur.js": 282,
	"./uz": 283,
	"./uz-latn": 284,
	"./uz-latn.js": 284,
	"./uz.js": 283,
	"./vi": 285,
	"./vi.js": 285,
	"./x-pseudo": 286,
	"./x-pseudo.js": 286,
	"./yo": 287,
	"./yo.js": 287,
	"./zh-cn": 288,
	"./zh-cn.js": 288,
	"./zh-hk": 289,
	"./zh-hk.js": 289,
	"./zh-tw": 290,
	"./zh-tw.js": 290
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 420;

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(332);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Project\FattyThomas\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Project\FattyThomas\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[333]);
//# sourceMappingURL=main.js.map