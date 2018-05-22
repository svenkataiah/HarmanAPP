import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanPropertyPage } from '../scan-property/scan-property';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { MapViewPage } from '../map-view/map-view';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { NearByPlacesProvider } from '../../providers/near-by-places/near-by-places';
import { CurrentLocationProvider } from '../../providers/current-location/current-location';
import { UserInfoPage } from '../user-info/user-info';
declare var google;
// picture options
const pictureOpts: CameraPreviewPictureOptions = {
  width: 1280,
  height: 1280,
  quality: 85
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentLocation: any = '';
  nearbyPlaces: any = [];
  errorMessage: any;
  scanPropertyToggle: any = true;
  nearByPlaceType: any;
  loadingIcon: any = false;

  nearbyLocationsStock: any = {}
  picture: any;


  constructor(
    public navCtrl: NavController,
    private cameraPreview: CameraPreview,
    private geolocation: Geolocation,
    private http: HttpClient,
    private nearByPlacesProvider: NearByPlacesProvider,
    private currentLocationProvider: CurrentLocationProvider
  ) {

  }

  ngOnInit() {
    this.nearByPlaceType = ['atm', 'bank', 'school', 'store', 'train_station', 'hospital', 'gas_station']
  }

  scanProperty() {
    this.previewCamera();
    setTimeout(() => {
      this.takePicture();
    }, 2000);
    
    this.getCurrentLocation();
  }


  previewCamera() {
    //this.navCtrl.push(ScanPropertyPage)
    let options = {
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
  }

  takePicture() {
    // take a picture
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.picture = 'assets/img/test.jpg';
    });
  }

  getCurrentLocation() {
    this.loadingIcon = true;
    this.scanPropertyToggle = false;
    this.currentLocationProvider.getCurrentLocation()
      .then((response) => {
        if (response.coords.latitude && response.coords.longitude) {
          this.getNearByPlaces(response.coords.latitude, response.coords.longitude);
          this.getCurrentLocationAddress(response.coords.latitude, response.coords.longitude);
        }

      },
        (err) => {
          this.errorMessage = err;
          console.log(err);
        });
  }


  //Get Curremnt address using lat and lng
  getCurrentLocationAddress(lat, lng) {
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
    } else {
      this.errorMessage = 'probelm in loading address';
    }
  }


  //Get near by places
  getNearByPlaces(lat, lng) {
    //loop by places types
    this.nearByPlaceType.forEach((el) => {
      this.nearByPlacesProvider.getNearByPlaces(lat, lng, el)
        .subscribe((response) => {
          console.log(response);
          var nearByplacesResponse = response['results'];
          //add distance to nearby location
          var count = 0;
          nearByplacesResponse.forEach((element, i) => {

            if (element.types[0] == el && count < 1) { // check type and take first object
              count++;
              //calculate distance
              var distance = getDistanceFromLatLonInKm(lat, lng, element.geometry.location.lat, element.geometry.location.lng).toFixed(3)
              element.distance = distance + ' KM';
              this.nearbyPlaces.push(element); // push nearby location object
              this.nearbyLocationsStock[el] = distance;
              return;
            }
          });
          count = 0;
          this.loadingIcon = false;
        },
          (error) => {
            this.errorMessage = error;
            console.log("near by location error");
            console.log(error);
          }
        );
    });


    console.log(this.nearbyLocationsStock)
    console.log(this.nearbyPlaces);

    //calculate distance between two location
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1);  // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180)
    }

    if(this.nearbyLocationsStock==null){
      this.getCurrentLocation();
    }
  }

  viewMap() {
    var data = {
      data: {
        nearbyPlaces: JSON.stringify(this.nearbyPlaces),
        scanPropertyPicture: this.picture
      }
    }
    this.navCtrl.push(MapViewPage, data);
  }

  userInfo() {
    this.navCtrl.push(UserInfoPage);
  }

  ionViewDidLeave() {
    this.cameraPreview.stopCamera();
    this.scanPropertyToggle = true;
    this.nearbyPlaces = [];
  }

}
