webpackJsonp([14],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentLocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(79);
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearByPlacesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
    NearByPlacesProvider.prototype.getNearByPlaces = function (ln, lt, type) {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        //var url = "https://maps.googleapis.com/maps/api/place/search/json?location="+ln+","+lt+"&radius=2000&type="+type+"sensor=false&key=AIzaSyAImBQiqvaXOQtqeK8VC-9I96kMmB6Mz7I";
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + ln + "," + lt + "&radius=1500&type=" + type + "&key=AIzaSyAImBQiqvaXOQtqeK8VC-9I96kMmB6Mz7I";
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var client_url = 'http://quickloanapi.azurewebsites.net';
var UploadDocumentsPage = /** @class */ (function () {
    function UploadDocumentsPage(navCtrl, navParams, transfer, camera, loadingCtrl, alertCtrl, toastCtrl, fileChooser, http, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.fileChooser = fileChooser;
        this.http = http;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.dlVerification = true;
        this.passportVerification = true;
        this.documents = [];
        this.referenceNo = this.navParams.get('data').referenceNo;
        this.selectedLoanOption = this.navParams.get('data').selectedLoanOption;
        //this.referenceNo = 'BR0001HL00023';
        //this.selectedLoanOption = 127;
    }
    UploadDocumentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentLoadingDefault('Loading application form');
        this.http.get(client_url + "/api/loan/details/" + this.referenceNo + "/true")
            .subscribe(function (response) {
            console.log(response);
            setTimeout(function () {
                _this.loanFormDetails = response;
                console.log(response['account']['addresses']);
                console.log(response['account']['addresses'][0]);
                _this.accountAddress = response['account']['addresses'][0];
                _this.propertyAddress = response['property']['propertyAddress'];
                // this.propertyAddress.streetAddress = this.propertyAddress.split(',')[0];
                //this.propertyAddress.streetAddress1 = this.propertyAddress.split(',')[1];
                var paddress = _this.propertyAddress['fullAddress'];
                var paddr = paddress.split(",");
                if (paddr[0] && paddr[1]) {
                    _this.propertyAddress.streetAddress = paddr[0] + ", " + paddr[1];
                }
                if (paddr[2]) {
                    _this.propertyAddress.streetAddress1 = paddr[2];
                }
                if (paddr[3]) {
                    _this.propertyAddress.streetAddress1 = _this.propertyAddress.streetAddress1 + ", " + paddr[3];
                }
                console.log(_this.propertyAddress);
                _this.loading.dismiss();
            }, 2000);
        });
    };
    UploadDocumentsPage.prototype.submitApplication = function (data) {
        var _this = this;
        data.selectedLoanOption = this.selectedLoanOption;
        data.propertyAddress = data.property.propertyAddress;
        //delete data.property;
        //delete data.loanOptions;
        this.presentLoadingDefault('Submiting the application');
        this.http.post(client_url + "/api/loan/update/false", data)
            .subscribe(function (response) {
            console.log(response);
            setTimeout(function () {
                _this.loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
            }, 2000);
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    UploadDocumentsPage.prototype.saveApplication = function (data) {
        var _this = this;
        data.selectedLoanOption = this.selectedLoanOption;
        data.propertyAddress = data.property.propertyAddress;
        //delete data.property;
        //delete data.loanOptions;
        this.presentLoadingDefault('Saving the application');
        this.http.post(client_url + "/api/loan/update/true", data)
            .subscribe(function (response) {
            console.log(response);
            setTimeout(function () {
                _this.loading.dismiss();
                // this.navCtrl.setRoot(HomePage);
            }, 2000);
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    UploadDocumentsPage.prototype.openFiles = function () {
        this.fileChooser.open()
            .then(function (uri) { return console.log(uri); })
            .catch(function (e) { return console.log(e); });
    };
    UploadDocumentsPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.imageData = 'data:image/jpeg;base64,' + imageData;
            //this.imageURI = imageData+".jpg";
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    UploadDocumentsPage.prototype.captureImage = function () {
        var _this = this;
        var options = {
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.imageData = 'data:image/jpeg;base64,' + imageData;
            //this.imageURI = imageData+".jpg";
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    UploadDocumentsPage.prototype.uploadImages = function () {
        var _this = this;
        this.presentLoadingDefault('Verifying document');
        var data = new FormData();
        data.append('file', this.imageData);
        this.http.post('http://virtiledge.com/admin/file_upload.php', data)
            .subscribe(function (response) {
            console.log(response);
            _this.getOCRData(response);
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    UploadDocumentsPage.prototype.getOCRData = function (file) {
        var _this = this;
        console.log("OCR");
        setTimeout(function () {
            if (_this.loading.dismiss()) {
                _this.loading.dismiss();
            }
        }, 80000);
        var path = "http://virtiledge.com/admin/" + file['image_url'] + '.jpg';
        //this.http.get("https://api.ocr.space/parse/imageurl?apikey=273ed2d3bf88957&url=https://assets.thaivisa.com/forum/uploads/monthly_12_2015/post-250519-0-04774200-1449916274_thumb.jpg")
        this.http.get("https://api.ocr.space/parse/imageurl?apikey=273ed2d3bf88957&url=" + path)
            .subscribe(function (res) {
            _this.storage.set('ocr', res['ParsedResults']);
            console.log(res);
            if (res) {
                if (res['ParsedResults'] != null) {
                    console.log(res['ParsedResults']);
                    console.log(res['ParsedResults'][0]);
                    console.log(res['ParsedResults'][0]['ParsedText']);
                    _this.OCRParseText = res['ParsedResults'][0]['ParsedText'];
                    _this.verifyDocument(path);
                }
                else {
                    _this.showAlert(res['ErrorMessage'][0]);
                    _this.loading.dismiss();
                }
            }
            else {
                _this.loading.dismiss();
                _this.showAlert('OCR failed to detect text.Please try again');
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    UploadDocumentsPage.prototype.verifyDocument = function (filePath) {
        var _this = this;
        var parsedText = this.OCRParseText.toString().toLowerCase();
        console.log(parsedText);
        var name = this.loanFormDetails.account.firstName.toString().toLowerCase().replace(/[^a-zA-Z ]/g, "");
        var document_status = false;
        /****** DL verfification  *******/
        console.log("dl name " + name);
        var dl_verify1 = parsedText.toString().search('driving');
        var dl_verify2 = parsedText.toString().search(name);
        var pass_verify1 = parsedText.toString().search('passport');
        var pass_verify2 = parsedText.toString().replace(/\s+/, "").search(name);
        if (dl_verify1 != -1) {
            if (dl_verify2 != -1) {
                console.log("DL verified");
                this.dlVerification = true;
                //this.findDlNumber(parsedText);
                var array = parsedText.split("\n");
                console.log(array);
                array.forEach(function (element) {
                    var str = element.replace(/[^0-9]/g, "");
                    console.log(str);
                    console.log(str.length);
                    if (str.length == 9) {
                        if (!isNaN(str)) {
                            _this.loanFormDetails.stateDLNo = str;
                            _this.loanFormDetails.documents[0]['path'] = filePath;
                            _this.loanFormDetails.documents[0]['referenceNumber'] = str;
                        }
                    }
                });
                console.log(array);
            }
            else {
                this.dlVerification = false;
                //this.name.nativeElement.focus();
                this.showAlert('Failed to verify document.Please try again');
                console.log("invalid DL");
            }
        }
        else if (pass_verify1 != -1) {
            if (pass_verify2 != -1) {
                console.log("Passport verified");
                this.passportVerification = true;
                //this.findDlNumber(parsedText);
                var array = parsedText.split("\n");
                array.forEach(function (element) {
                    var str = element.replace(/[^0-9]/g, "");
                    console.log(str);
                    console.log(str.length);
                    if (str.length == 7) {
                        if (!isNaN(str)) {
                            var firstLetter = element;
                            _this.loanFormDetails.passportNo = element[0].toUpperCase() + ' ' + str;
                            _this.loanFormDetails.documents[1]['path'] = filePath;
                            _this.loanFormDetails.documents[1]['referenceNumber'] = element[0] + ' ' + str;
                        }
                    }
                });
                console.log(array);
            }
            else {
                this.passportVerification = false;
                // this.name.nativeElement.focus();
                this.showAlert('Failed to verify passport.Please try again.');
                console.log("invalid Passport");
            }
        }
        else {
            this.showAlert('Kindly upload the document again');
        }
        this.loading.dismiss();
    };
    UploadDocumentsPage.prototype.findDlNumber = function (str) {
        var serach = str.search('Customer');
        var n = parseInt(serach) + 35;
        str = str.slice(serach, n);
        str = str.replace(/^\D+/g, '');
        str = str.slice(0, 11);
        return str;
    };
    UploadDocumentsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UploadDocumentsPage.prototype.presentLoadingDefault = function (content) {
        this.loading = this.loadingCtrl.create({
            content: content,
            spinner: 'dots',
            showBackdrop: false
        });
        this.loading.present();
    };
    UploadDocumentsPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__modal_modal__["a" /* ModalPage */]);
        modal.present();
    };
    UploadDocumentsPage.prototype.showAlert = function (content) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: content,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], UploadDocumentsPage.prototype, "name", void 0);
    UploadDocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload-documents',template:/*ion-inline-start:"E:\POC\myApp\src\pages\upload-documents\upload-documents.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Upload Documents</ion-title>\n    <ion-buttons end class="user-btn" (click)="userInfo()">\n      <button ion-button icon-only>\n        <ion-icon name="person" ios="ios-person" md="md-person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form *ngIf="loanFormDetails">\n\n    <ion-item-group>\n      <ion-item-divider color="light">Upload Documents</ion-item-divider>\n      <ion-item>\n        <p>{{imageURI}}</p>\n        <button ion-button color="secondary" (click)="getImage()">From Phome</button>\n        <button ion-button color="secondary" (click)="captureImage()">From Camera</button>\n      </ion-item>\n      <ion-item>\n        <h4>Document Preview</h4>\n        <img [src]="imageData" />\n        <div class="row">\n          <button ion-button *ngIf="imageData" (click)="uploadImages()" button-center>Verify</button>\n        </div>\n      </ion-item>\n\n      <ion-list class="verification">\n        <ion-item>\n          Driving License\n          <button ion-button item-end icon-left color="{{dlVerification?\'secondary\':\'danger\'}}">\n            <ion-icon name="success"></ion-icon>\n            <div *ngIf="dlVerification && loanFormDetails.stateDLNo">\n              <img src="assets/icon/success.png">\n            </div>\n            <div *ngIf="!dlVerification && !loanFormDetails.stateDLNo">\n              <img src="assets/icon/error.png">\n            </div>\n          </button>\n        </ion-item>\n        <ion-item>\n          Passport\n          <button ion-button item-end icon-left color="{{passportVerification?\'secondary\':\'danger\'}}">\n            <div *ngIf="passportVerification && loanFormDetails.passportNo">\n              <img src="assets/icon/success.png">\n            </div>\n            <div *ngIf="!passportVerification && !loanFormDetails.passportNo">\n              <img src="assets/icon/error.png">\n            </div>\n          </button>\n        </ion-item>\n      </ion-list>\n\n    </ion-item-group>\n\n\n    <ion-item-group>\n      <ion-item-divider color="light">Verification Details</ion-item-divider>\n      <ion-item>\n        <ion-label floating>Passport No</ion-label>\n        <ion-input type="text" name="passportNumber" [(ngModel)]="loanFormDetails.passportNo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Driving License</ion-label>\n        <ion-input type="text" name="dl" [(ngModel)]="loanFormDetails.stateDLNo"></ion-input>\n      </ion-item>\n      <ion-item>\n        &nbsp;\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="light">Personal Information</ion-item-divider>\n      <!-- {{loanFormDetails.account}} {{loanFormDetails.account.addresses[0]}} -->\n      <ion-item>\n        <ion-label floating>Account Number</ion-label>\n        <ion-input type="text" name="accountNumber" readonly value="{{ loanFormDetails.account.number | maskNumber }}"></ion-input>\n         <ion-input type="hidden" name="accountNumber" readonly [(ngModel)]="loanFormDetails.account.number"></ion-input>\n      </ion-item>\n      <ion-item class="{{!dlVerification && !loanFormDetails.stateDLNo || !passportVerification && !loanFormDetails.passportNo?\'item-input item-label-floating ng-untouched input-has-focus item-input-has-focus item-focus\':\'item item-block item-md item-input item-label-floating ng-untouched ng-pristine ng-valid input-has-value item-input-has-value\'}}">\n        <ion-label floating>First Name </ion-label>\n        <ion-input type="text" #name name="firstName" [(ngModel)]="loanFormDetails.account.firstName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Last name</ion-label>\n        <ion-input type="text" name="lastName" [(ngModel)]="loanFormDetails.account.lastName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Address Line1</ion-label>\n\n        <ion-input type="text" name="address" [(ngModel)]="accountAddress.streetAddress"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Address Line2</ion-label>\n        <ion-input type="text" name="address1" [(ngModel)]="accountAddress.streetAddress1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Account with Branch</ion-label>\n        <ion-input type="text" name="branch" [(ngModel)]="loanFormDetails.account.branch.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        &nbsp;\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="light">Information of the property</ion-item-divider>\n      <ion-item>\n        <ion-label floating>Address Line1</ion-label>\n        <ion-input type="text" name="addressLine" [(ngModel)]="propertyAddress.streetAddress"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Address Line2</ion-label>\n        <ion-input type="text" name="addressLine1" [(ngModel)]="propertyAddress.streetAddress1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Country</ion-label>\n        <ion-input type="text" name="country" [(ngModel)]="propertyAddress.country"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>State</ion-label>\n        <ion-input type="text" name="state" [(ngModel)]="propertyAddress.state"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>City</ion-label>\n        <ion-input type="text" name="city" [(ngModel)]="propertyAddress.city"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Zip</ion-label>\n        <ion-input type="text" name="zip" [(ngModel)]="loanFormDetails.property.propertyAddress.zipCode"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>APN</ion-label>\n        <ion-input type="text" name="apn" readonly [(ngModel)]="loanFormDetails.property.apn"></ion-input>\n      </ion-item>\n      <ion-item>\n        &nbsp;\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="light">Employment Details</ion-item-divider>\n      <ion-item>\n        <ion-label floating>Name of the Employer</ion-label>\n        <ion-input type="text" name="employerName" [(ngModel)]="loanFormDetails.employerName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Monthly salary</ion-label>\n        <ion-input type="text" name="salary" [(ngModel)]="loanFormDetails.monthlySalary"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Total Year Experience</ion-label>\n        <ion-input type="text" name="experience" [(ngModel)]="loanFormDetails.noofYearsExp"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Employer Phone</ion-label>\n        <ion-input type="text" name="phone" [(ngModel)]="loanFormDetails.employerPhone"></ion-input>\n      </ion-item>\n      <ion-item>\n        &nbsp;\n      </ion-item>\n    </ion-item-group>\n    <ion-row class="row">\n      <ion-col class="col">\n        <button ion-button type="submit" (click)="saveApplication(loanFormDetails)" block>Save</button>\n      </ion-col>\n      <ion-col class="col">\n        <button ion-button type="submit" (click)="submitApplication(loanFormDetails)" block>Submit</button>\n      </ion-col>\n    </ion-row>\n\n\n  </form>\n</ion-content>'/*ion-inline-end:"E:\POC\myApp\src\pages\upload-documents\upload-documents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], UploadDocumentsPage);
    return UploadDocumentsPage;
}());

//# sourceMappingURL=upload-documents.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_info_user_info__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loan_details_loan_details__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var client_url = 'http://quickloanapi.azurewebsites.net';
var PropertyDetailsPage = /** @class */ (function () {
    function PropertyDetailsPage(navCtrl, navParams, photoViewer, http, alertCtrl, storage, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.tabStatus = 'ownerInfo';
        this.interestedBtn = false;
        this.scanPropertyPicture = this.navParams.get('data').scanPropertyPicture;
        this.currentLocationAddress = this.navParams.get('data').currentLocationAddress;
        // Or to get a key/value pair
        storage.get('registrationId').then(function (val) {
            _this.registrationId = val;
        });
        storage.get('userId').then(function (val) {
            _this.userId = val;
        });
    }
    PropertyDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PropertyDetailsPage');
        this.storage.get('propertyAddress').then(function (paddress) {
            console.log("property address");
            console.log(paddress);
            _this.propertyAddress = paddress;
            _this.http.post(client_url + "/api/property/details", { address: paddress })
                .subscribe(function (response) {
                console.log(response);
                _this.presentLoadingDefault('Fetching property details');
                setTimeout(function () {
                    _this.propertyDetails = response;
                    _this.loading.dismiss();
                }, 2000);
            });
            //this.tab.nativeElement.click();
            var el = document.getElementById("tab");
            el.click();
        });
    };
    PropertyDetailsPage.prototype.switchTabs = function (status) {
        if (status == 'ownerInfo')
            this.tabStatus = 'ownerInfo';
        else if (status == 'basicInfo')
            this.tabStatus = 'basicInfo';
        else
            this.tabStatus = 'gallery';
    };
    PropertyDetailsPage.prototype.registerNotification = function () {
        var _this = this;
        //this.http.get("http://virtiledge.com/fcm/?registrationid=" + this.registrationId)
        this.http.post(client_url + "/api/loan/create", { userId: this.userId, address: this.propertyAddress })
            .subscribe(function (response) {
            _this.showAlert();
            console.log(response);
            // this.interested = response;
        });
    };
    PropertyDetailsPage.prototype.userInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_info_user_info__["a" /* UserInfoPage */]);
    };
    PropertyDetailsPage.prototype.viewPhoto = function (url) {
        this.photoViewer.show(url);
    };
    PropertyDetailsPage.prototype.LoanDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__loan_details_loan_details__["a" /* LoanDetailsPage */]);
    };
    PropertyDetailsPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: 'Thank you for your interest. You will recieve a notification shortly',
            buttons: ['OK']
        });
        alert.present();
    };
    PropertyDetailsPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Need Loan?<hr>',
            message: 'Would you like to apply for loan?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes, Check for Eligibility',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.interestedBtn = true;
                        _this.presentLoadingDefault('Property information is being sent to the financial institution');
                        setTimeout(function () {
                            _this.registerNotification();
                            _this.loading.dismiss();
                            _this.navCtrl.setRoot(_this.propertyDetails);
                        }, 2000);
                    }
                }
            ]
        });
        confirm.present();
    };
    PropertyDetailsPage.prototype.presentLoadingDefault = function (content) {
        this.loading = this.loadingCtrl.create({
            content: content,
            spinner: 'dots'
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('tab'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PropertyDetailsPage.prototype, "tab", void 0);
    PropertyDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-property-details',template:/*ion-inline-start:"E:\POC\myApp\src\pages\property-details\property-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Property Details\n    </ion-title>\n    <ion-buttons end class="user-btn" (click)="userInfo()">\n      <button ion-button icon-only>\n        <ion-icon name="person" ios="ios-person" md="md-person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- Segment buttons with icons -->\n  <ion-segment [(ngModel)]="icons">\n    <ion-segment-button #tab id="tab" value="camera" (click)="switchTabs(\'ownerInfo\')" class="segment-button segment-activated">\n      <img src="assets/imgs/OwnerInfo/owner.png" /> Owner\n    </ion-segment-button>\n    <ion-segment-button value="bookmark" (click)="switchTabs(\'basicInfo\')">\n      <img src="assets/imgs/OwnerInfo/information.png" /> Basic Info\n    </ion-segment-button>\n    <ion-segment-button value="gallery" (click)="switchTabs(\'gallery\')">\n      <img src="assets/imgs/OwnerInfo/gallery.png" /> Gallery\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid *ngIf="tabStatus==\'ownerInfo\' && propertyDetails" class="owner-info">\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/OwnerInfo/real-state-seller.png" />\n        <span> Owner</span>\n      </ion-col>\n      <ion-col>\n        {{propertyDetails?.ownerFirstName}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/OwnerInfo/home.png" />\n        <span> Property Type</span>\n      </ion-col>\n      <ion-col>\n        {{propertyDetails?.propertyType}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/OwnerInfo/calendar.png" />\n        <span> Year Built</span>\n      </ion-col>\n      <ion-col>\n        {{propertyDetails?.yearBuilt}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/OwnerInfo/house-with-dollar-sign.png" />\n        <span> Last Sold </span>\n      </ion-col>\n      <ion-col>\n        {{propertyDetails?.lastSold | customCurrency}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/OwnerInfo/price-tag.png" />\n        <span> Price Per sqft </span>\n      </ion-col>\n      <ion-col>\n        {{propertyDetails?.pricePerSqrt | customCurrency}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/OwnerInfo/style.png" />\n        <span> Style </span>\n      </ion-col>\n      <ion-col>\n        {{propertyDetails?.propertyStyle}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/OwnerInfo/last mortgage.png" />\n        <span> Last Mortgaged </span>\n      </ion-col>\n      <ion-col>\n        {{propertyDetails?.lastMortgaged | customCurrency}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf="tabStatus==\'basicInfo\'" class="basic-info">\n    <ion-row>\n      <ion-col>\n        <img [src]="scanPropertyPicture" height="380" style="width: 100%;" (click)="viewPhoto(scanPropertyPicture)" />\n        <!-- <img src="https://teja9.kuikr.com/restatic/build/image/c_img6.jpg" height="330" style="width: 100%;" /> -->\n        <!-- <img (click)="viewPhoto(\'https://mediacdn.99acres.com/6261/3/125223515M-1524302078.jpeg\')" src="https://mediacdn.99acres.com/6261/3/125223515M-1524302078.jpeg"\n        /> -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="currentAddress">\n        {{currentLocationAddress}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf="tabStatus==\'gallery\'" class="gallery">\n\n    <ion-row>\n      <ion-col>\n        <img (click)="viewPhoto(\'http://virtiledge.com/gallery/property1.jpg\')" src="http://virtiledge.com/gallery/property1.jpg"\n        />\n      </ion-col>\n      <ion-col>\n        <img (click)="viewPhoto(\'http://virtiledge.com/gallery/property2.jpg\')" src="http://virtiledge.com/gallery/property2.jpg"\n        />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img (click)="viewPhoto(\'http://virtiledge.com/gallery/property3.jpg\')" src="http://virtiledge.com/gallery/property3.jpg"\n        />\n      </ion-col>\n      <ion-col>\n        <img (click)="viewPhoto(\'http://virtiledge.com/gallery/property4.jpg\')" src="http://virtiledge.com/gallery/property4.jpg"\n        />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img (click)="viewPhoto(\'http://virtiledge.com/gallery/property5.jpg\')" src="http://virtiledge.com/gallery/property5.jpg"\n        />\n      </ion-col>\n      <ion-col>\n        <img (click)="viewPhoto(\'http://virtiledge.com/gallery/property6.jpg\')" src="http://virtiledge.com/gallery/property6.jpg"\n        />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar *ngIf="tabStatus==\'gallery\' || tabStatus==\'ownerInfo\'">\n    <ion-buttons text-center>\n      <button ion-button class="navigation-btn {{interestedBtn?\'btnDisabled\':\'navigation-btn\'}}" *ngIf="!interested" [disabled]="interestedBtn"\n        (click)="showConfirm()">\n        <span class="btn-text"> Interested In Property ? </span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf="tabStatus==\'basicInfo\'" class="basic-info-toolbar">\n    <ion-grid>\n      <ion-row>\n        <ion-col class="property-info">\n          <div class="icon">\n            <img src="assets/imgs/PropertyDetails/BEDROOMS.png" />\n          </div>\n          <div class="total"> {{propertyDetails?.bedRoom}}</div>\n        </ion-col>\n        <ion-col class="property-info">\n          <div class="icon">\n            <img src="assets/imgs/PropertyDetails/bath.png" />\n          </div>\n          <div class="total"> {{propertyDetails?.bathRoom}}</div>\n        </ion-col>\n        <ion-col class="property-info">\n          <div class="icon">\n            <img src="assets/imgs/PropertyDetails/squarefeet.png" />\n          </div>\n          <div class="total"> {{propertyDetails?.pricePerSqrt}}</div>\n        </ion-col>\n        <ion-col class="property-info">\n          <div class="icon">\n            <img src="assets/imgs/PropertyDetails/sqftlot.png" />\n          </div>\n          <div class="total">{{propertyDetails?.lotAreaSquareFeet}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\POC\myApp\src\pages\property-details\property-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PropertyDetailsPage);
    return PropertyDetailsPage;
}());

//# sourceMappingURL=property-details.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ModalPage');
        this.storage.get('ocr').then(function (val) {
            console.log(val);
            _this.ocrText = val;
        });
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"E:\POC\myApp\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>OCR Text</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="ocrText">\n  {{ocrText}}\n</ion-content>\n'/*ion-inline-end:"E:\POC\myApp\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var client_url = 'http://quickloanapi.azurewebsites.net';
var LoanHistoryPage = /** @class */ (function () {
    function LoanHistoryPage(navCtrl, navParams, http, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
    }
    LoanHistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PropertyDetailsPage');
        this.presentLoadingDefault();
        this.storage.get('userId')
            .then(function (userId) {
            _this.http.get(client_url + "/api/loan/history/" + userId + "/false")
                .subscribe(function (response) {
                console.log(response);
                _this.loanHistoryDetails = response;
                _this.loading.dismiss();
                _this.loanHistoryDetails.forEach(function (element) {
                    if (element.createdDate) {
                        element.createdDate = new Date(element.createdDate.replace('T', ' ') + ' UTC').toString();
                    }
                });
            });
        });
    };
    LoanHistoryPage.prototype.itemSelected = function () {
    };
    LoanHistoryPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Fetching loan history list',
            spinner: 'dots',
            showBackdrop: false
        });
        this.loading.present();
    };
    LoanHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loan-history',template:/*ion-inline-start:"E:\POC\myApp\src\pages\loan-history\loan-history.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>Loan History</ion-title>\n      <ion-buttons end class="user-btn" (click)="userInfo()">\n        <button ion-button icon-only>\n          <ion-icon name="person" ios="ios-person" md="md-person"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n        <ion-item *ngFor="let details of loanHistoryDetails" (click)="itemSelected()">\n          <h2>{{details?.referenceNo}}</h2>\n          <p>{{details?.property?.propertyAddress.fullAddress}}</p>\n          <span class="pull-right">{{details?.createdDate | date:\'dd MMM yyyy HH:mm aa\'}}</span>\n        </ion-item>\n      </ion-list>\n  </ion-content>'/*ion-inline-end:"E:\POC\myApp\src\pages\loan-history\loan-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoanHistoryPage);
    return LoanHistoryPage;
}());

//# sourceMappingURL=loan-history.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var client_url = 'http://quickloanapi.azurewebsites.net';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, alertCtrl, http, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.loginBtn = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginBtn = true;
        this.presentLoadingDefault();
        this.http.get(client_url + "/api/auth/" + this.username + "/" + this.password)
            .subscribe(function (response) {
            if (response['isAuthenticated']) {
                _this.userId = response['userId'];
                _this.setSessionData(response);
                _this.postDeviceRegisterId();
                setTimeout(function () {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }, 1000);
            }
            else {
                _this.loading.dismiss();
                _this.loginBtn = false;
                _this.username = '';
                _this.password = '';
                _this.showAlert();
            }
        });
    };
    LoginPage.prototype.setSessionData = function (response) {
        this.storage.set('userId', response['userId']);
    };
    LoginPage.prototype.postDeviceRegisterId = function () {
        var _this = this;
        this.storage.get('registrationId')
            .then(function (regid) {
            _this.http.post(client_url + "/api/auth/register", { registrationId: regid, userId: _this.userId })
                .subscribe(function (res) {
                console.log(res);
            });
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: 'Invalid Username or Password',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating',
            showBackdrop: false,
            spinner: 'dots'
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\POC\myApp\src\pages\login\login.html"*/'<ion-content>\n  <ion-list>\n    <ion-item>\n      <h4 class="header">Login</h4>\n    </ion-item>\n\n    <ion-item class="login-item">\n      <ion-label>\n        <img src="assets/imgs/Login/profile.png">\n      </ion-label>\n\n      <ion-input type="text" [(ngModel)]="username" placeholder="User Name"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item class="login-item">\n      <ion-label>\n        <img src="assets/imgs/Login/lock.png" style="height: 21px;">\n      </ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n    <ion-item class="login-links">\n      <a text-start>Forgot Password?</a>\n      <a text-end (click)="signup()">User Signup</a>\n    </ion-item>\n\n  </ion-list>\n  <div padding text-center>\n    <button block ion-button [disabled]="loginBtn" (click)="login()">Sign In</button>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\POC\myApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\POC\myApp\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"E:\POC\myApp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loan_details_loan_details__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var client_url = 'http://quickloanapi.azurewebsites.net';
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, http, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PropertyDetailsPage');
        this.presentLoadingDefault();
        this.storage.get('userId')
            .then(function (userId) {
            _this.http.get(client_url + "/api/loan/history/" + userId + "/true")
                .subscribe(function (response) {
                console.log(response);
                _this.loading.dismiss();
                _this.notificationsDetails = response;
                _this.notificationsDetails.forEach(function (element) {
                    if (element.createdDate) {
                        element.createdDate = new Date(element.createdDate.replace('T', ' ') + ' UTC').toString();
                    }
                });
            });
        });
    };
    NotificationsPage.prototype.itemSelected = function (referenceNo) {
        var data = {
            data: {
                referenceNo: referenceNo
            }
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__loan_details_loan_details__["a" /* LoanDetailsPage */], data);
    };
    NotificationsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Fetching Notifications List',
            spinner: 'dots',
            showBackdrop: false
        });
        this.loading.present();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"E:\POC\myApp\src\pages\notifications\notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Notifications</ion-title>\n    <ion-buttons end class="user-btn">\n      <button ion-button icon-only>\n        <ion-icon name="person" ios="ios-person" md="md-person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list>\n      <ion-item *ngFor="let details of notificationsDetails" (click)="itemSelected(details?.referenceNo)">\n        <h2>{{details?.referenceNo}}</h2>\n        <p>{{details?.property?.propertyAddress.fullAddress}}</p>\n        <span class="pull-right">{{details?.createdDate | date:\'dd MMM yyyy HH:mm aa\'}}</span>\n      </ion-item>\n    </ion-list> -->\n\n\n  <ion-list class="notification-list">\n\n    <ion-item *ngFor="let details of notificationsDetails" (click)="itemSelected(details?.referenceNo)">\n      <ion-avatar item-start>\n        <img src="assets/icon/bank.png">\n      </ion-avatar>\n      <h2>{{details?.referenceNo}} - Eligible for loan</h2>\n      <p>{{details?.property?.propertyAddress.fullAddress}}</p>\n      <div text-right>\n        <ion-note item-end>{{details?.createdDate | date:\'dd MMM yyyy HH:mm aa\'}}</ion-note>\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\POC\myApp\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 177:
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
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/loan-details/loan-details.module": [
		702,
		13
	],
	"../pages/loan-history/loan-history.module": [
		703,
		12
	],
	"../pages/login/login.module": [
		704,
		11
	],
	"../pages/map-view/map-view.module": [
		705,
		10
	],
	"../pages/menus/menus.module": [
		706,
		1
	],
	"../pages/modal/modal.module": [
		707,
		9
	],
	"../pages/notifications/notifications.module": [
		708,
		8
	],
	"../pages/property-details/property-details.module": [
		709,
		7
	],
	"../pages/scan-property/scan-property.module": [
		710,
		6
	],
	"../pages/settings/settings.module": [
		711,
		5
	],
	"../pages/signup/signup.module": [
		712,
		4
	],
	"../pages/success/success.module": [
		713,
		0
	],
	"../pages/upload-documents/upload-documents.module": [
		714,
		3
	],
	"../pages/user-info/user-info.module": [
		715,
		2
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
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPropertyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_view_map_view__ = __webpack_require__(93);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ScanPropertyPage);
    return ScanPropertyPage;
}());

//# sourceMappingURL=scan-property.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.settings.getActiveTheme().subscribe(function (val) {
            _this.selectedTheme = val;
            console.log(val);
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.toggleAppTheme = function () {
        if (this.selectedTheme === 'dark-theme') {
            this.settings.setActiveTheme('light-theme');
        }
        else {
            this.settings.setActiveTheme('dark-theme');
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\POC\myApp\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Settings</ion-title>\n    <ion-buttons end class="user-btn" (click)="userInfo()">\n      <button ion-button icon-only>\n        <ion-icon name="person" ios="ios-person" md="md-person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <p text-center>I shine at night and glow at day.</p>\n  <button ion-button full icon-left (click)="toggleAppTheme()">\n    <ion-icon  name="bulb"></ion-icon>Toggle Theme\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"E:\POC\myApp\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_scan_property_scan_property__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_view_map_view__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_property_details_property_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_loan_details_loan_details__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera_preview__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_near_by_places_near_by_places__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_current_location_current_location__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_user_info_user_info__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_photo_viewer__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notifications__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_chooser__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_upload_documents_upload_documents__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_loan_history_loan_history__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_modal_modal__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_mask_number_mask_number__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_custom_currency_custom_currency__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_settings_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_settings_settings__ = __webpack_require__(365);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_map_view_map_view__["a" /* MapViewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_property_details_property_details__["a" /* PropertyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loan_details_loan_details__["a" /* LoanDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_upload_documents_upload_documents__["a" /* UploadDocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_loan_history_loan_history__["a" /* LoanHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_mask_number_mask_number__["a" /* MaskNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_custom_currency_custom_currency__["a" /* CustomCurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_34__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/loan-details/loan-details.module#LoanDetailsPageModule', name: 'LoanDetailsPage', segment: 'loan-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loan-history/loan-history.module#LoanHistoryPageModule', name: 'LoanHistoryPage', segment: 'loan-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-view/map-view.module#MapViewPageModule', name: 'MapViewPage', segment: 'map-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menus/menus.module#MenusPageModule', name: 'MenusPage', segment: 'menus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property-details/property-details.module#PropertyDetailsPageModule', name: 'PropertyDetailsPage', segment: 'property-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scan-property/scan-property.module#ScanPropertyPageModule', name: 'ScanPropertyPage', segment: 'scan-property', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/success/success.module#SuccessPageModule', name: 'SuccessPage', segment: 'success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-documents/upload-documents.module#UploadDocumentsPageModule', name: 'UploadDocumentsPage', segment: 'upload-documents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-info/user-info.module#UserInfoPageModule', name: 'UserInfoPage', segment: 'user-info', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_scan_property_scan_property__["a" /* ScanPropertyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_view_map_view__["a" /* MapViewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_property_details_property_details__["a" /* PropertyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loan_details_loan_details__["a" /* LoanDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_upload_documents_upload_documents__["a" /* UploadDocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_loan_history_loan_history__["a" /* LoanHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_16__providers_near_by_places_near_by_places__["a" /* NearByPlacesProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_current_location_current_location__["a" /* CurrentLocationProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_33__providers_settings_settings__["a" /* SettingsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_documents_upload_documents__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var client_url = 'http://quickloanapi.azurewebsites.net';
var LoanDetailsPage = /** @class */ (function () {
    function LoanDetailsPage(navCtrl, navParams, http, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.tabStatus = 'ownerInfo';
        if (this.navParams.get('data')) {
            this.referenceNo = this.navParams.get('data').referenceNo;
            this.presentLoadingDefault();
            this.getLoanDetails(this.referenceNo);
        }
        else {
            storage.get('userId').then(function (userId) {
                _this.presentLoadingDefault();
                _this.http.get(client_url + "/api/loan/latestRefNo/" + userId)
                    .subscribe(function (response) {
                    _this.referenceNo = response['refNo'];
                    _this.getLoanDetails(response['refNo']);
                });
            });
        }
    }
    LoanDetailsPage.prototype.switchTabs = function (status) {
        if (status == 'ownerInfo')
            this.tabStatus = 'ownerInfo';
        else if (status == 'basicInfo')
            this.tabStatus = 'basicInfo';
        else
            this.tabStatus = 'gallery';
    };
    LoanDetailsPage.prototype.loanSchedule = function (loanOptionId, loanTenureArrayObject, index, tenure) {
        this.loanOptionId = loanOptionId;
        this.tenure = tenure;
        var principalPaidTotal = 0;
        var interestPaidTotal = 0;
        var balanceTotal = 0;
        for (var i = 0; i < loanTenureArrayObject.length; i++) {
            principalPaidTotal = principalPaidTotal + parseFloat(loanTenureArrayObject[i].principalPaid);
        }
        ;
        for (var i = 0; i < loanTenureArrayObject.length; i++) {
            interestPaidTotal = interestPaidTotal + parseFloat(loanTenureArrayObject[i].interestPaid);
        }
        ;
        var yearlyTotal = (principalPaidTotal + interestPaidTotal - loanTenureArrayObject[0].principalPaid).toFixed(2);
        this.loanTenureDetails = loanTenureArrayObject;
        this.loanTenureDetails.index = index;
        this.loanTenureDetails.principalPaidTotal = principalPaidTotal.toFixed(2);
        ;
        this.loanTenureDetails.interestPaidTotal = interestPaidTotal.toFixed(2);
        ;
        this.loanTenureDetails.yearlyTotal = yearlyTotal;
        this.tabStatus = 'loanTenureDetails';
    };
    LoanDetailsPage.prototype.applyLoan = function () {
        console.log(this.loanOptionId);
        var data = {
            data: {
                referenceNo: this.referenceNo,
                selectedLoanOption: this.loanOptionId
            }
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__upload_documents_upload_documents__["a" /* UploadDocumentsPage */], data);
    };
    LoanDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropertyDetailsPage');
        var el = document.getElementById("loantab");
        el.click();
    };
    LoanDetailsPage.prototype.getLoanDetails = function (referenceNo) {
        var _this = this;
        this.http.get(client_url + "/api/loan/details/" + referenceNo + "/true")
            .subscribe(function (response) {
            console.log(response);
            setTimeout(function () {
                _this.loanDetails = response;
                _this.loading.dismiss();
            }, 4000);
        });
    };
    LoanDetailsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Fetching account information and loan tenure details',
            spinner: 'dots',
            showBackdrop: false
        });
        this.loading.present();
    };
    LoanDetailsPage.prototype.ionViewWillLeave = function () {
        this.loading.dismiss();
    };
    LoanDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loan-details',template:/*ion-inline-start:"E:\POC\myApp\src\pages\loan-details\loan-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Loan Eligibility</ion-title>\n    <ion-buttons end class="user-btn" (click)="userInfo()">\n      <button ion-button icon-only>\n        <ion-icon name="person" ios="ios-person" md="md-person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- Segment buttons with icons -->\n  <ion-segment [(ngModel)]="icons">\n\n    <ion-segment-button value="camera" id="loantab" (click)="switchTabs(\'ownerInfo\')" class="segment-button {{tabStatus==\'ownerInfo\'?\'activate\':\'\'}}">\n      <img src="assets/imgs/LoanEligibility/AccountInformationDark-01.png" /> Account Info\n    </ion-segment-button>\n    <ion-segment-button value="bookmark" (click)="switchTabs(\'basicInfo\')" class="segment-button">\n      <img src="assets/imgs/LoanEligibility/LoanEligibilityDark-01.png" /> Loan Schedule\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-grid *ngIf="tabStatus==\'ownerInfo\' && loanDetails" class="owner-info">\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/AccountInfo/user.png" />\n        <span> Name </span>\n      </ion-col>\n      <ion-col>\n        {{loanDetails?.account?.firstName}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/AccountInfo/accountnumber.png" />\n        <span> Account Number </span>\n      </ion-col>\n      <ion-col>\n        {{loanDetails?.account?.number | maskNumber}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/AccountInfo/propertyaddress.png" />\n        <span> Property Address </span>\n      </ion-col>\n      <ion-col>\n        {{loanDetails?.property?.propertyAddress?.fullAddress}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/AccountInfo/requireddocuments.png" />\n        <span> Required Documents </span>\n      </ion-col>\n      <ion-col>\n        {{loanDetails?.documents[0]?.documentType}}\n        <br> {{loanDetails?.documents[1]?.documentType}}\n        <br> {{loanDetails?.documents[2]?.documentType}}\n        <br>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="heading">\n        <img src="assets/imgs/AccountInfo/comments.png" />\n        <span> Comments From Bank </span>\n      </ion-col>\n      <ion-col>\n        <!-- {{loanDetails?.comments}} -->\n        You are eligible for loan\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf="tabStatus==\'basicInfo\'" class="basic-info">\n    <ion-card *ngFor="let loan of loanDetails.loanOptions; let i = index">\n      <ion-card-header>\n        <ion-grid>\n          <ion-row class="row">\n            <ion-col class="col">\n              <h3>Loan Tenure {{i+1}} :</h3>\n            </ion-col>\n            <ion-col class="col">\n              <h3>{{loan?.tenure}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row class="row">\n            <ion-col class="col-md-8">\n              Maximun Loan\n            </ion-col>\n            <ion-col class="col-md-4">\n              {{loan?.loanAmount | customCurrency}}\n            </ion-col>\n          </ion-row>\n          <ion-row class="row">\n            <ion-col class="col">\n              Interest Rate\n            </ion-col>\n            <ion-col class="col">\n              {{loan?.interestRate}} %\n            </ion-col>\n          </ion-row>\n          <ion-row class="row">\n            <ion-col class="col">\n              Monthly Payment\n            </ion-col>\n            <ion-col class="col">\n              {{loan?.emiAmount | customCurrency}}\n            </ion-col>\n          </ion-row>\n          <ion-row class="row">\n            <ion-col class="col">\n              Loan Schedule\n            </ion-col>\n            <ion-col class="col">\n              <a href="#" (click)="loanSchedule(loan.id,loan.loanSchedule,i,loan?.tenure)">Click Here</a>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n\n  <ion-grid class="basic-info" *ngIf="tabStatus==\'loanTenureDetails\'">\n    <ion-row class="row">\n      <ion-col class="col" text-center>\n        <h6>Loan Tenure - {{tenure}} </h6>\n      </ion-col>\n    </ion-row>\n    <ion-scroll scrollX="true" scrollY="true" zoom="true">\n      <table>\n        <thead>\n          <tr>\n            <th>Tenure (Yr)</th>\n            <th text-right>Principal Paid</th>\n            <th text-right>Interest Paid</th>\n            <th text-right>Balance Amount</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let loanTenure of loanTenureDetails">\n            <td style="text-transform: uppercase">{{loanTenure?.tenureYear}}</td>\n            <td text-right>{{loanTenure?.principalPaid | customCurrency}}</td>\n            <td text-right>{{loanTenure?.interestPaid | customCurrency }}</td>\n            <td text-right *ngIf="loanTenure?.balance>0">{{loanTenure?.balance | customCurrency}}</td>\n            <td text-right *ngIf="loanTenure?.balance==0"> 0 </td>\n          </tr>\n          <tr>\n            <th>Total</th>\n            <th text-right>{{loanTenureDetails?.principalPaidTotal | customCurrency}}</th>\n            <th text-right>{{loanTenureDetails?.interestPaidTotal | customCurrency}}</th>\n            <th text-right>  </th>\n          </tr>\n        </tbody>\n        <tfoot>\n<!-- \n          <tr>\n            <th colspan="2" text-left>Yearly Payment</th>\n            <th colspan="2">{{loanTenureDetails?.yearlyTotal | customCurrency}}</th>\n          </tr> -->\n          <tr>\n            <th colspan="4" text-left>&nbsp;</th>\n          </tr>\n          <tr>\n            <th colspan="4" text-left>&nbsp;</th>\n          </tr>\n        </tfoot>\n      </table>\n    </ion-scroll>\n  </ion-grid>\n\n  <ion-grid *ngIf="tabStatus==\'loanTenureDetails\'">\n    <ion-row class="row">\n      <ion-col class="col" text-left>\n        &nbsp;\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-grid *ngIf="tabStatus==\'loanTenureDetails\'">\n    <ion-row class="row">\n      <ion-col class="col" text-left>\n        <h6>YEARLY TOTAL</h6>\n      </ion-col>\n      <ion-col class="col" text-right>\n        <h5>{{loanTenureDetails?.yearlyTotal | customCurrency}}</h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n\n<ion-footer *ngIf="tabStatus==\'loanTenureDetails\'">\n  <ion-toolbar>\n\n    <ion-buttons text-center>\n      <button ion-button class="navigation-btn {{loanDetails.status==\'AC\'?\'btnDisabled\':\'\'" [disabled]="loanDetails.status==\'AC\'"\n        (click)="applyLoan()">\n        <span class="btn-text">Apply Loan</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\POC\myApp\src\pages\loan-details\loan-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoanDetailsPage);
    return LoanDetailsPage;
}());

//# sourceMappingURL=loan-details.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserInfoPage = /** @class */ (function () {
    function UserInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserInfoPage');
    };
    UserInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-info',template:/*ion-inline-start:"E:\POC\myApp\src\pages\user-info\user-info.html"*/'<!--\n  Generated template for the UserInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>User Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"E:\POC\myApp\src\pages\user-info\user-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UserInfoPage);
    return UserInfoPage;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notifications_notifications__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_loan_details_loan_details__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_loan_history_loan_history__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_settings_settings__ = __webpack_require__(80);
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
    function MyApp(platform, statusBar, splashScreen, push, http, storage, settings) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.http = http;
        this.storage = storage;
        this.settings = settings;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        this.pushNotification();
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Scan Property', icon: '', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Notifications', icon: '', component: __WEBPACK_IMPORTED_MODULE_7__pages_notifications_notifications__["a" /* NotificationsPage */] },
            { title: 'Loan History', icon: '', component: __WEBPACK_IMPORTED_MODULE_11__pages_loan_history_loan_history__["a" /* LoanHistoryPage */] },
            //{ title: 'Settings', icon: '', component: SettingsPage },
            { title: 'Logout', icon: '', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] },
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
    MyApp.prototype.pushNotification = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            // to check if we have permission
            this.push.hasPermission()
                .then(function (res) {
                if (res.isEnabled) {
                    console.log('We have permission to send push notifications');
                }
                else {
                    console.log('We do not have permission to send push notifications');
                }
            });
            // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
            this.push.createChannel({
                id: "623706415166",
                description: "My first test channel",
                // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
                importance: 3
            }).then(function () { return console.log('Channel created'); });
            // Delete a channel (Android O and above)
            this.push.deleteChannel('testchannel1').then(function () { return console.log('Channel deleted'); });
            // Return a list of currently configured channels
            this.push.listChannels().then(function (channels) { return console.log('List of channels', channels); });
            // to initialize push notifications
            var options = {
                android: {
                    senderID: '623706415166',
                    forceShow: true,
                    sound: 'default',
                    vibrate: true,
                    icon: '',
                },
                ios: {
                    alert: 'true',
                    badge: true,
                    sound: 'default'
                },
                windows: {},
                browser: {
                    pushServiceURL: 'http://virtiledge.com/fcm/?id=' + this.regid
                }
            };
            var pushObject = this.push.init(options);
            pushObject.on('notification').subscribe(function (notification) {
                console.log('Received a notification', notification);
                //this.nav.push(NotificationsPage);
                // this.storage.set('')
                setTimeout(function () {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_loan_details_loan_details__["a" /* LoanDetailsPage */];
                }, 0);
            });
            pushObject.on('registration').subscribe(function (registration) {
                _this.storage.remove('registrationId');
                _this.storage.set('registrationId', registration.registrationId);
                console.log('Device registered', registration.registrationId);
            });
            pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\POC\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" [class]="selectedTheme"></ion-nav>'/*ion-inline-end:"E:\POC\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_12__providers_settings_settings__["a" /* SettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaskNumberPipe = /** @class */ (function () {
    function MaskNumberPipe() {
    }
    MaskNumberPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var mask = '';
        var number = value.toString();
        var len = value.toString().length;
        for (var i = 0; i < number.length; i++) {
            console.log(i);
            if (i < len - 4) {
                mask = mask + 'X';
            }
            else {
                mask = mask + number[i];
            }
        }
        return mask;
    };
    MaskNumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'maskNumber',
        })
    ], MaskNumberPipe);
    return MaskNumberPipe;
}());

//# sourceMappingURL=mask-number.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomCurrencyPipe = /** @class */ (function () {
    function CustomCurrencyPipe() {
    }
    CustomCurrencyPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var x = value;
        x = x.toString();
        var afterPoint = '';
        if (x.indexOf('.') > 0) {
            afterPoint = x.substring(x.indexOf('.'), x.length);
            if (afterPoint && afterPoint.length >= 1) {
                afterPoint = (afterPoint + '00').substr(0, 3);
            }
        }
        else {
            afterPoint = '.00';
        }
        x = Math.floor(x);
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
        console.log(res);
        if (res.toString().search(".") == -1) {
            console.log('₹' + res + '.00');
            return '₹' + res + '.00';
        }
        else {
            console.log('₹' + res);
            return '₹' + res;
        }
    };
    CustomCurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'customCurrency',
        })
    ], CustomCurrencyPipe);
    return CustomCurrencyPipe;
}());

//# sourceMappingURL=custom-currency.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_view_map_view__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_near_by_places_near_by_places__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_current_location_current_location__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_info_user_info__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var client_url = 'http://quickloanapi.azurewebsites.net';
// picture options
var pictureOpts = {
    width: 1280,
    height: 1280,
    quality: 85
};
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, cameraPreview, geolocation, http, nearByPlacesProvider, currentLocationProvider, alertCtrl, loadingCtrl, storage, settings) {
        this.navCtrl = navCtrl;
        this.cameraPreview = cameraPreview;
        this.geolocation = geolocation;
        this.http = http;
        this.nearByPlacesProvider = nearByPlacesProvider;
        this.currentLocationProvider = currentLocationProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.settings = settings;
        this.currentLocation = '';
        this.nearbyPlaces = [];
        this.scanPropertyToggle = true;
        this.loadingIcon = false;
        this.nearbyLocationsStock = {};
        this.apiError = false;
    }
    HomePage.prototype.ngOnInit = function () {
        this.nearByPlaceType = ['atm', 'bank', 'school', 'store', 'train_station', 'hospital', 'gas_station'];
    };
    HomePage.prototype.scanProperty = function () {
        var _this = this;
        this.previewCamera();
        setTimeout(function () {
            _this.takePicture();
        }, 2000);
        this.getCurrentLocation();
    };
    HomePage.prototype.previewCamera = function () {
        //this.navCtrl.push(ScanPropertyPage)
        var options = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: this.cameraPreview.CAMERA_DIRECTION.BACK,
            toBack: true,
            tapPhoto: true,
            previewDrag: true
        };
        this.cameraPreview.startCamera(options);
    };
    HomePage.prototype.takePicture = function () {
        var _this = this;
        // take a picture
        this.cameraPreview.takePicture(pictureOpts).then(function (imageData) {
            _this.picture = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            _this.picture = 'assets/img/test.jpg';
        });
    };
    HomePage.prototype.getCurrentLocation = function () {
        var _this = this;
        //this.loadingIcon = true;
        this.presentLoadingDefault();
        this.scanPropertyToggle = false;
        this.currentLocationProvider.getCurrentLocation()
            .then(function (response) {
            _this.storage.set('latlng', response);
            if (response.coords.latitude && response.coords.longitude) {
                _this.getNearByPlaces(response.coords.latitude, response.coords.longitude);
                _this.getCurrentLocationAddress(response.coords.latitude, response.coords.longitude);
            }
        }, function (err) {
            _this.apiError = true;
            _this.apiErrorMsg = err;
            console.log(err);
            _this.loading.dismiss();
            _this.showAlert(err['PositionError']['message']);
        });
    };
    //Get Curremnt address using lat and lng
    HomePage.prototype.getCurrentLocationAddress = function (lat, lng) {
        var propertyLocationObject = {};
        var current = this;
        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(lat, lng);
        if (geocoder) {
            geocoder.geocode({ 'latLng': latLng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results[0]);
                    current.currentLocation = results[0].formatted_address;
                    propertyLocationObject['fullAddress'] = current.currentLocation;
                    for (var ac = 0; ac < results[0].address_components.length; ac++) {
                        var component = results[0].address_components[ac];
                        switch (component.types[0]) {
                            case 'street_number':
                                propertyLocationObject['address'] = component.long_name;
                                break;
                            case 'route':
                                propertyLocationObject['address1'] = component.long_name;
                                break;
                            case 'locality':
                                propertyLocationObject['city'] = component.long_name;
                                break;
                            case 'administrative_area_level_1':
                                propertyLocationObject['state'] = component.long_name;
                                break;
                            case 'country':
                                propertyLocationObject['country'] = component.long_name;
                                break;
                            case 'postal_code':
                                propertyLocationObject['zipCode'] = component.short_name;
                                break;
                            default:
                                propertyLocationObject['streetAddress'] = results[0].formatted_address;
                        }
                    }
                    ;
                    console.log(propertyLocationObject);
                    current.storage.set('propertyAddress', propertyLocationObject);
                }
                else {
                    console.log("Geocoding failed: " + status);
                }
            }); //geocoder.geocode()
        }
        else {
            this.errorMessage = 'probelm in loading address';
        }
    };
    //Get near by places
    HomePage.prototype.getNearByPlaces = function (lat, lng) {
        var _this = this;
        //loop by places types
        var placeTypeCount = 0;
        this.nearByPlaceType.forEach(function (el) {
            placeTypeCount++;
            _this.nearByPlacesProvider.getNearByPlaces(lat, lng, el)
                .subscribe(function (response) {
                console.log(response);
                var nearByplacesResponse = response['results'];
                //add distance to nearby location
                var count = 0;
                nearByplacesResponse.forEach(function (element, i) {
                    if (element.types[0] == el && count < 1) {
                        count++;
                        //calculate distance
                        var distance = getDistanceFromLatLonInKm(lat, lng, element.geometry.location.lat, element.geometry.location.lng).toFixed(3);
                        element.distance = distance + ' KM';
                        _this.nearbyPlaces.push(element); // push nearby location object
                        _this.nearbyLocationsStock[el] = distance;
                        return;
                    }
                });
                count = 0;
                _this.loadingIcon = false;
            }, function (error) {
                _this.errorMessage = error;
                console.log("near by location error");
                console.log(error);
                _this.apiError = true;
                _this.apiErrorMsg = error;
            });
        });
        if (placeTypeCount > 5) {
            this.loading.dismiss();
        }
        console.log(this.nearbyLocationsStock);
        console.log(this.nearbyPlaces);
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
        if (this.nearbyLocationsStock == null) {
            this.getCurrentLocation();
        }
        if (this.apiError) {
            this.showAlert(this.apiErrorMsg);
        }
    };
    HomePage.prototype.viewMap = function () {
        this.cameraPreview.stopCamera();
        var data = {
            data: {
                nearbyPlaces: JSON.stringify(this.nearbyPlaces),
                scanPropertyPicture: this.picture
            }
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_view_map_view__["a" /* MapViewPage */], data);
    };
    HomePage.prototype.userInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__user_info_user_info__["a" /* UserInfoPage */]);
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.scanPropertyToggle = true;
        this.nearbyPlaces = [];
    };
    HomePage.prototype.showAlert = function (error) {
        var alert = this.alertCtrl.create({
            title: 'Api Error',
            subTitle: error,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Fetching nearby places',
            spinner: 'dots'
        });
        this.loading.present();
        // setTimeout(() => {
        //   loading.dismiss();
        // }, 5000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\POC\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Scan Property</ion-title>\n    <ion-buttons end class="user-btn" (click)="userInfo()">\n      <button ion-button icon-only>\n        <ion-icon name="person" ios="ios-person" md="md-person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <img class="loadingIcon" src="https://ugroupcu.com/wp-content/themes/ucgroup/assets/image/pageLoader.gif" *ngIf="loadingIcon"\n  />\n\n  <ion-card text-center class="propertyScanner" *ngIf="scanPropertyToggle">\n    <img src="assets/imgs/ScanProperty.png" />\n    <div class="card-title">\n      <button ion-button (click)="scanProperty()">\n        <ion-icon name="search"></ion-icon>\n        <span class="btn-text">Scan Property</span>\n      </button>\n    </div>\n  </ion-card>\n\n  <div class="div_left" *ngIf="!scanPropertyToggle && nearbyPlaces?.length>0">\n    <div class="nearbyPlaces left">\n      <div class="img">\n        <img src="assets/imgs/ScanProperty/school.png" width="20">\n      </div>\n\n      <div class="info">\n        <span>School</span>\n        <span>{{nearbyLocationsStock?.school?nearbyLocationsStock.school+\' KM\':\'-\'}}</span>\n      </div>\n    </div>\n\n    <div class="nearbyPlaces left">\n      <div class="img">\n        <img src="assets/imgs/ScanProperty/hospital.png" width="20">\n      </div>\n\n      <div class="info">\n        <span>Hospital</span>\n        <span>{{nearbyLocationsStock?.hospital?nearbyLocationsStock.hospital+\' KM\':\'-\'}}</span>\n      </div>\n    </div>\n\n    <div class="nearbyPlaces left">\n      <div class="img">\n        <img src="assets/imgs/ScanProperty/store.png" width="20">\n      </div>\n\n      <div class="info">\n        <span>Store</span>\n        <span>{{nearbyLocationsStock?.store?nearbyLocationsStock.store+\' KM\':\'-\'}}</span>\n      </div>\n    </div>\n\n  </div>\n\n  <div class="div_right" *ngIf="!scanPropertyToggle && nearbyPlaces?.length>0">\n    <div class="nearbyPlaces right">\n      <div class="img">\n        <img src="assets/imgs/ScanProperty/atm.png" width="20">\n      </div>\n\n      <div class="info">\n        <span>ATM</span>\n        <span>{{nearbyLocationsStock?.atm?nearbyLocationsStock.atm+\' KM\':\'-\'}}</span>\n      </div>\n    </div>\n\n    <div class="nearbyPlaces right">\n      <div class="img">\n        <img src="assets/imgs/ScanProperty/bank-building.png" width="20">\n      </div>\n\n      <div class="info">\n        <span>Bank</span>\n        <span>{{nearbyLocationsStock?.bank?nearbyLocationsStock.bank+\' KM\':\'-\'}}</span>\n      </div>\n    </div>\n\n    <div class="nearbyPlaces right">\n      <div class="img">\n        <img src="assets/imgs/ScanProperty/fuel-station-pump.png" width="20">\n      </div>\n\n      <div class="info">\n        <span>Fuel</span>\n        <span>{{nearbyLocationsStock?.gas_station?nearbyLocationsStock.gas_station+\' KM\':\'-\'}}</span>\n      </div>\n    </div>\n\n  </div>\n\n\n\n\n  <!-- <div *ngFor="let places of nearbyPlaces" class="places">\n    <ion-avatar item-start>\n      <img [src]="places[0].icon" width="20">\n    </ion-avatar>\n    <h2>{{places[0].types[0]}}</h2>\n    <h3>{{places[0].distance}}</h3>\n  </div> -->\n  <div class="current_location" *ngIf="!scanPropertyToggle">{{currentLocation}}</div>\n\n</ion-content>\n\n\n<ion-footer *ngIf="!scanPropertyToggle">\n  <ion-toolbar>\n    <ion-buttons text-center>\n      <button ion-button class="navigation-btn" *ngIf="!scanPropertyToggle && nearbyPlaces?.length>0" (click)="viewMap()">\n        <span class="btn-text">View Map </span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\POC\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__providers_near_by_places_near_by_places__["a" /* NearByPlacesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_current_location_current_location__["a" /* CurrentLocationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__["a" /* SettingsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsProvider = /** @class */ (function () {
    function SettingsProvider() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('dark-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_current_location_current_location__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_near_by_places_near_by_places__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_details_property_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_user_info__ = __webpack_require__(67);
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
    function MapViewPage(navCtrl, navParams, geolocation, currentLocationProvider, nearByPlacesProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.currentLocationProvider = currentLocationProvider;
        this.nearByPlacesProvider = nearByPlacesProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.currentLocation = '';
        this.nearByPlaces = [];
        this.apiError = false;
        this.nearByPlaces = JSON.parse(this.navParams.get('data').nearbyPlaces);
        this.scanPropertyPicture = this.navParams.get('data').scanPropertyPicture;
    }
    MapViewPage.prototype.ngOnInit = function () {
        this.nearByPlaceType = ['atm', 'bank', 'school', 'store', 'train_station', 'hospital', 'gas_station'];
    };
    MapViewPage.prototype.getCurrentLatLng = function () {
        var _this = this;
        this.currentLocationProvider.getCurrentLocation()
            .then(function (response) {
            var lat = response.coords.latitude;
            var lng = response.coords.longitude;
            var position = { lat: lat, lng: lng };
            _this.position = position;
            _this.getCurrentLocationAddress(lat, lng);
            console.log(_this.currentLocation);
            setTimeout(function () {
                _this.mapInit(lat, lng, '');
            }, 1500);
        });
    };
    MapViewPage.prototype.ionViewDidLoad = function () {
        this.getCurrentLatLng();
    };
    MapViewPage.prototype.propertyDetails = function () {
        var data = {
            data: {
                scanPropertyPicture: this.scanPropertyPicture,
                currentAddres: this.currentLocation,
                currentLocationAddress: this.currentLocation
            }
        };
        //this.navCtrl.push(PropertyDetailsPage, data);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__property_details_property_details__["a" /* PropertyDetailsPage */], data);
    };
    MapViewPage.prototype.mapInit = function (lat, lng, marker) {
        var _this = this;
        if (marker == 'drag') {
            //this.nearByPlaces = [];
            this.getCurrentLocationAddress(lat, lng);
        }
        var current = this;
        var position = { lat: lat, lng: lng };
        var map = new google.maps.Map(document.getElementById('maps'), {
            center: position,
            zoom: 15,
            disableDefaultUI: true
        });
        var infowindow = new google.maps.InfoWindow();
        this.nearByPlaceType.forEach(function (el) {
            _this.nearByPlacesProvider.getNearByPlaces(lat, lng, el)
                .subscribe(function (response) {
                console.log(response);
                var nearByplacesResponse = response['results'];
                //add distance to nearby location
                var count = 0;
                nearByplacesResponse.forEach(function (element, i) {
                    if (element.types[0] == el && count < 5) {
                        count++;
                        createMarker(nearByplacesResponse[i]);
                    }
                });
                count = 0;
            }, function (error) {
                console.log(error);
                current.apiErrorMsg = error;
                current.apiError = true;
            });
        });
        function createMarker(place) {
            var url = place.icon;
            if (place.types[0] == 'atm') {
                url = 'assets/imgs/MapView/atmV10.png';
            }
            else if (place.types[0] == 'school') {
                url = 'assets/imgs/MapView/school.png';
            }
            else if (place.types[0] == 'bank') {
                url = 'assets/imgs/MapView/bank-buildingV10.png';
            }
            else if (place.types[0] == 'gas_station') {
                url = 'assets/imgs/MapView/fuel-station-pumpV10.png';
            }
            else if (place.types[0] == 'hospital') {
                url = 'assets/imgs/MapView/hospital-buildingsV10.png';
            }
            else if (place.types[0] == 'store') {
                url = 'assets/imgs/MapView/storeV10.png';
            }
            else if (place.types[0] == 'train_station') {
                url = 'assets/imgs/MapView/metroV10.png';
            }
            var icon = {
                url: url,
                scaledSize: new google.maps.Size(50, 50),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0) // anchor
            };
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                icon: icon
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });
        }
        //current location marker
        var CurrentLocationIcon = {
            url: "assets/imgs/MapView/location-detailsV2.png",
            scaledSize: new google.maps.Size(60, 60),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var marker1 = new google.maps.Marker({
            map: map,
            position: position,
            draggable: true,
            animation: google.maps.Animation.DROP,
            icon: CurrentLocationIcon
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
        // Allow each marker to have an info window   
        console.log(this.currentLocation);
        var infoWindow = new google.maps.InfoWindow();
        infoWindow.setContent("<p style='width: 200px;color: green;background #000;'>" + this.currentLocation + "</p>");
        infoWindow.open(map, marker1);
        this.markerCoords(marker1);
        if (this.apiError) {
            this.showAlert(this.apiErrorMsg);
        }
    };
    MapViewPage.prototype.markerCoords = function (markerobject) {
        var _this = this;
        google.maps.event.addListener(markerobject, 'drag', function (evt) {
            setTimeout(function () {
                _this.mapInit(evt.latLng.lat(), evt.latLng.lng(), 'drag');
            }, 2000);
        });
    };
    MapViewPage.prototype.getCurrentLocationAddress = function (lat, lng) {
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
                    _this.showAlert(status);
                    console.log("Geocoding failed: " + status);
                }
            }); //geocoder.geocode()
        }
    };
    MapViewPage.prototype.userInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_info_user_info__["a" /* UserInfoPage */]);
    };
    MapViewPage.prototype.showAlert = function (error) {
        var alert = this.alertCtrl.create({
            title: 'Api Error',
            subTitle: this.apiErrorMsg,
            buttons: ['OK']
        });
        alert.present();
    };
    MapViewPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading Map View',
            spinner: 'dots',
            showBackdrop: false
        });
        this.loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapViewPage.prototype, "mapElement", void 0);
    MapViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-view',template:/*ion-inline-start:"E:\POC\myApp\src\pages\map-view\map-view.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>Map View</ion-title>\n      <ion-buttons end (click)="userInfo()">\n          <button ion-button icon-only class="user-btn">\n            <ion-icon name="person" ios="ios-person" md="md-person"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-fab right top (click)="navigate()">\n        <button ion-fab class="primary-bcolor">\n            <ion-icon name="pin"></ion-icon>\n          </button>\n      </ion-fab>\n      \n  <div id="maps" style="width: 100%; height: 100%;"></div>\n</ion-content>\n\n\n\n  <ion-footer *ngIf="!scanPropertyToggle">\n      <ion-toolbar>\n    \n        <ion-buttons text-center>\n          <button ion-button class="navigation-btn" (click)="propertyDetails()">\n            <span class="btn-text">Property Details </span>\n           </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-footer>'/*ion-inline-end:"E:\POC\myApp\src\pages\map-view\map-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_current_location_current_location__["a" /* CurrentLocationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_near_by_places_near_by_places__["a" /* NearByPlacesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MapViewPage);
    return MapViewPage;
}());

//# sourceMappingURL=map-view.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.js.map