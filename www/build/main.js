webpackJsonp([4],{

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		287,
		3
	],
	"../pages/map-view/map-view.module": [
		286,
		2
	],
	"../pages/menus/menus.module": [
		284,
		1
	],
	"../pages/scan-property/scan-property.module": [
		285,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan_property_scan_property__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_view_map_view__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_near_by_places_near_by_places__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_current_location_current_location__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, CameraPreview, geolocation, http, nearByPlacesProvider, currentLocationProvider) {
        this.navCtrl = navCtrl;
        this.CameraPreview = CameraPreview;
        this.geolocation = geolocation;
        this.http = http;
        this.nearByPlacesProvider = nearByPlacesProvider;
        this.currentLocationProvider = currentLocationProvider;
        this.currentLocation = '';
    }
    HomePage.prototype.scanProperty = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__scan_property_scan_property__["a" /* ScanPropertyPage */]);
    };
    HomePage.prototype.viewMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_view_map_view__["a" /* MapViewPage */]);
    };
    HomePage.prototype.previewCamera = function () {
        var _this = this;
        this.currentLocationProvider.getCurrentLocation()
            .then(function (response) {
            console.log(response);
            _this.getCurrentLocationAddress(response.coords.latitude, response.coords.longitude);
            _this.getNearByPlaces(response.coords.latitude, response.coords.longitude);
        });
        //this.navCtrl.push(ScanPropertyPage)
        var options = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: this.CameraPreview.CAMERA_DIRECTION.BACK,
            toBack: true,
            tapPhoto: true,
            previewDrag: true
        };
        this.CameraPreview.startCamera(options);
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.CameraPreview.stopCamera();
    };
    HomePage.prototype.getCurrentLocationAddress = function (lat, lng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(lat, lng);
        if (geocoder) {
            geocoder.geocode({ 'latLng': latLng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results[0].formatted_address);
                    _this.currentLocation = results[0].formatted_address;
                }
                else {
                    console.log("Geocoding failed: " + status);
                }
            }); //geocoder.geocode()
        }
    };
    HomePage.prototype.getNearByPlaces = function (lat, lng) {
        var _this = this;
        this.nearByPlacesProvider.getNearByPlaces(lat, lng)
            .subscribe(function (response) {
            console.log(response['results']);
            //filter nearby location
            var nearByplacesResponse = response['results'];
            var filterednearByPlaces = nearByplacesResponse.filter(function (el) {
                return el.types[0] != 'point_of_interest';
            });
            //add distance to filtered nearby location
            filterednearByPlaces.forEach(function (element) {
                var distance = getDistanceFromLatLonInKm(lat, lng, element.geometry.location.lat, element.geometry.location.lng);
                element.distance = distance.toFixed(3) + ' KM';
            });
            _this.nearbyPlaces = filterednearByPlaces;
            console.log(_this.nearbyPlaces);
        }, function (error) {
            _this.errorMessage = error;
        });
        //calculate distance between two location
        function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2 - lat1); // deg2rad below
            var dLon = deg2rad(lon2 - lon1);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            return d;
        }
        function deg2rad(deg) {
            return deg * (Math.PI / 180);
        }
        // var map = new google.maps.Map(document.getElementById('maps'), {
        //   center: lat,lng,
        //   zoom: 15
        // });
        // var infowindow = new google.maps.InfoWindow();
        // var service = new google.maps.places.PlacesService();
        // service.nearbySearch({
        //   location: lat,lng,
        //   radius: 500,
        //   type: ['']
        // }, callback);
        // function callback(results, status) {
        //   console.log("places");
        //   if (status === google.maps.places.PlacesServiceStatus.OK) {
        //     for (var i = 0; i < results.length; i++) {
        //       console.log(results[i]);
        //     }
        //   }
        // }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\POC\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Symitar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <button ion-button (click)="previewCamera()">\n    <ion-icon name="eye"></ion-icon> Preview Camera\n  </button> -->\n\n  <button ion-button full (click)="previewCamera()">\n    <ion-icon name="search"></ion-icon> Scan Property\n  </button>\n\n  <ion-list>\n    <ion-item *ngFor="let places of nearbyPlaces">\n      <ion-avatar item-start>\n        <img [src]="places.icon" width="20">\n      </ion-avatar>\n      <h2>{{places.types[0]}}</h2>\n      <h3>{{places.distance}}</h3>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n\n    <ion-title center (click)="viewMap()">View Map</ion-title>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-footer>\n  <ion-toolbar>\n    <p>{{currentLocation}}</p>\n    <ion-buttons end>\n      <button ion-button icon-right color="royal" (click)="viewMap()">\n        View Map\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\POC\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__providers_near_by_places_near_by_places__["a" /* NearByPlacesProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_current_location_current_location__["a" /* CurrentLocationProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearByPlacesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NearByPlacesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NearByPlacesProvider = /** @class */ (function () {
    function NearByPlacesProvider(http) {
        this.http = http;
        console.log('Hello NearByPlacesProvider Provider');
    }
    NearByPlacesProvider.prototype.getNearByPlaces = function (ln, lt) {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var url = "https://maps.googleapis.com/maps/api/place/search/json?location=" + ln + "," + lt + "&radius=5000&sensor=false&key=AIzaSyAImBQiqvaXOQtqeK8VC-9I96kMmB6Mz7I";
        return this.http.get(url);
    };
    NearByPlacesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NearByPlacesProvider);
    return NearByPlacesProvider;
}());

//# sourceMappingURL=near-by-places.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentLocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CurrentLocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CurrentLocationProvider = /** @class */ (function () {
    function CurrentLocationProvider(http, geolocation) {
        this.http = http;
        this.geolocation = geolocation;
        console.log('Hello CurrentLocationProvider Provider');
    }
    CurrentLocationProvider.prototype.getCurrentLocation = function () {
        return this.geolocation.getCurrentPosition();
    };
    CurrentLocationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], CurrentLocationProvider);
    return CurrentLocationProvider;
}());

//# sourceMappingURL=current-location.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\POC\myApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\POC\myApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenusPage = /** @class */ (function () {
    function MenusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenusPage');
    };
    MenusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menus',template:/*ion-inline-start:"E:\POC\myApp\src\pages\menus\menus.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button ion-item (click)="openPage(homePage)">\n          Home\n        </button>\n        <button ion-item (click)="openPage(friendsPage)">\n          Friends\n        </button>\n        <button ion-item (click)="openPage(eventsPage)">\n          Events\n        </button>\n        <button ion-item (click)="closeMenu()">\n          Close Menu\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav id="nav" #content [root]="ScanPropertyPage"></ion-nav>'/*ion-inline-end:"E:\POC\myApp\src\pages\menus\menus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MenusPage);
    return MenusPage;
}());

//# sourceMappingURL=menus.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_menus_menus__ = __webpack_require__(205);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        if (this.username == "admin" && this.password == "admin") {
            //this.navCtrl.push(ScanPropertyPage);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_menus_menus__["a" /* MenusPage */]);
        }
        else {
            this.loginStatus = "Invalid Username or Password";
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\POC\myApp\src\pages\login\login.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>{{loginStatus}}</div>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="username"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  <div padding>\n    <button block ion-button (click)="login()">Sign In</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\POC\myApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_scan_property_scan_property__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_view_map_view__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera_preview__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_near_by_places_near_by_places__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_current_location_current_location__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_scan_property_scan_property__["a" /* ScanPropertyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_view_map_view__["a" /* MapViewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/menus/menus.module#MenusPageModule', name: 'MenusPage', segment: 'menus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scan-property/scan-property.module#ScanPropertyPageModule', name: 'ScanPropertyPage', segment: 'scan-property', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-view/map-view.module#MapViewPageModule', name: 'MapViewPage', segment: 'map-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_scan_property_scan_property__["a" /* ScanPropertyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_view_map_view__["a" /* MapViewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_14__providers_near_by_places_near_by_places__["a" /* NearByPlacesProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_current_location_current_location__["a" /* CurrentLocationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\POC\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\POC\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPropertyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_view_map_view__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScanPropertyPage = /** @class */ (function () {
    function ScanPropertyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScanPropertyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScanPropertyPage');
    };
    ScanPropertyPage.prototype.loadMapView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_map_view_map_view__["a" /* MapViewPage */]);
    };
    ScanPropertyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan-property',template:/*ion-inline-start:"E:\POC\myApp\src\pages\scan-property\scan-property.html"*/'<!--\n  Generated template for the ScanPropertyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>\n        Page Title\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="openModal()">\n          <ion-icon name="options"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n<ion-content class="card-background-page">\n  <ion-card>\n\n\n    <img src="assets/imgs/property1.jpg">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon name="football" item-start large></ion-icon>\n      <h2>Museum of Football</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="wine" item-left large></ion-icon>\n      <h2>SCHOOLS AND COLLEGES</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="wine" item-left large></ion-icon>\n      <h2>METRO</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="wine" item-left large></ion-icon>\n      <h2>HOSPITALS</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="wine" item-left large></ion-icon>\n      <h2>ATM\'s</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="wine" item-left large></ion-icon>\n      <h2>STORE</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="wine" item-left large></ion-icon>\n      <h2>BANKS</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n   \n\n  </ion-card>\n</ion-content>\n<!-- <ion-footer>\n    <ion-toolbar>\n      <ion-title>\n          <button ion-button icon-center clear item-end (click)="loadMapView()">\n              <ion-icon name="navigate"></ion-icon>\n              Start\n            </button>\n      </ion-title>\n    </ion-toolbar>\n  </ion-footer> -->\n\n  <ion-footer>\n      <ion-grid>\n          <ion-row no-padding no-margin>\n              <ion-col col-4 no-padding>\n                  <button ion-button full></button>\n              </ion-col>\n              <ion-col col-4 no-padding (click)="loadMapView()">\n                  <button ion-button full>View More</button>\n              </ion-col>\n              <ion-col col-4 no-padding>\n                  <button ion-button full></button>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-footer>'/*ion-inline-end:"E:\POC\myApp\src\pages\scan-property\scan-property.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ScanPropertyPage);
    return ScanPropertyPage;
}());

//# sourceMappingURL=scan-property.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scan_property_scan_property__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_current_location_current_location__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapViewPage = /** @class */ (function () {
    function MapViewPage(navCtrl, navParams, geolocation, currentLocationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.currentLocationProvider = currentLocationProvider;
        this.currentLocation = '';
    }
    MapViewPage.prototype.getCurrentLatLng = function () {
        var _this = this;
        this.currentLocationProvider.getCurrentLocation()
            .then(function (response) {
            var lat = response.coords.latitude;
            var lng = response.coords.longitude;
            var position = { lat: lat, lng: lng };
            _this.getCurrentLocation(lat, lng);
            _this.mapInit(lat, lng);
        });
    };
    MapViewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            _this.getCurrentLatLng();
        }, 5000);
    };
    MapViewPage.prototype.scanProperty = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__scan_property_scan_property__["a" /* ScanPropertyPage */]);
    };
    MapViewPage.prototype.mapInit = function (lat, lng) {
        var position = { lat: lat, lng: lng };
        var map = new google.maps.Map(document.getElementById('maps'), {
            center: position,
            zoom: 15
        });
        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: position,
            radius: 5000,
            type: ['']
        }, callback);
        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }
        function createMarker(place) {
            console.log(place);
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                icon: place.icon
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });
        }
        //current location marker
        var marker1 = new google.maps.Marker({
            map: map,
            position: position,
            draggable: true,
            animation: google.maps.Animation.DROP,
            icon: "https://images.vexels.com/media/users/3/141916/isolated/lists/dcd10d362e49a3c161379047a940ba7d-location-pin-stroke-icon.png"
        });
        marker1.addListener('click', toggleBounce);
        function toggleBounce() {
            if (marker1.getAnimation() !== null) {
                marker1.setAnimation(null);
            }
            else {
                marker1.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        //trigger when marker changed
        // var _this = this;
        // function markerCoords(markerobject) {
        //   google.maps.event.addListener(markerobject, 'dragend', function (evt) {
        //     console.log(evt.latLng.lat() + " " + evt.latLng.lng());
        //   });
        //   google.maps.event.addListener(markerobject, 'drag', function (evt) {
        //     console.log(evt.latLng.lat() + " " + evt.latLng.lng());
        //     this.mapInit(evt.latLng.lat(),evt.latLng.lng());
        //   });
        // }
        this.markerCoords(marker1);
    };
    MapViewPage.prototype.markerCoords = function (markerobject) {
        google.maps.event.addListener(markerobject, 'dragend', function (evt) {
            console.log(evt.latLng.lat() + " " + evt.latLng.lng());
        });
        google.maps.event.addListener(markerobject, 'drag', function (evt) {
            console.log(evt.latLng.lat() + " " + evt.latLng.lng());
            //this.mapInit(evt.latLng.lat(),evt.latLng.lng());
        });
    };
    MapViewPage.prototype.getCurrentLocation = function (lat, lng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(lat, lng);
        if (geocoder) {
            geocoder.geocode({ 'latLng': latLng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results[0].formatted_address);
                    _this.currentLocation = results[0].formatted_address;
                }
                else {
                    console.log("Geocoding failed: " + status);
                }
            }); //geocoder.geocode()
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], MapViewPage.prototype, "mapElement", void 0);
    MapViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-view',template:/*ion-inline-start:"E:\POC\myApp\src\pages\map-view\map-view.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>map-view</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-fab right top (click)="navigate()">\n        <button ion-fab class="primary-bcolor">\n            <ion-icon name="pin"></ion-icon>\n          </button>\n      </ion-fab>\n  <div id="maps" style="width: 100%; height: 100%;"></div>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <p>{{currentLocation}}</p>\n      <ion-buttons end>\n        <button ion-button icon-right color="royal" (click)="scanProperty()">\n          Property Details\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"E:\POC\myApp\src\pages\map-view\map-view.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_current_location_current_location__["a" /* CurrentLocationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_current_location_current_location__["a" /* CurrentLocationProvider */]) === "function" && _e || Object])
    ], MapViewPage);
    return MapViewPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=map-view.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map