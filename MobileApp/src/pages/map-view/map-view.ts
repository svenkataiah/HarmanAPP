import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ScanPropertyPage } from '../scan-property/scan-property';
import { CurrentLocationProvider } from '../../providers/current-location/current-location';
import { NearByPlacesProvider } from '../../providers/near-by-places/near-by-places';
import { PropertyDetailsPage } from '../property-details/property-details';
import { UserInfoPage } from '../user-info/user-info';
declare var google;

@IonicPage()
@Component({
  selector: 'page-map-view',
  templateUrl: 'map-view.html',
})
export class MapViewPage {
  currentLocation: any = '';
  nearByPlaces: any = [];
  position: any;
  nearByPlaceType: any;
  scanPropertyPicture: any;
  apiError: any = false;
  apiErrorMsg: any;
  loading: any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private currentLocationProvider: CurrentLocationProvider,
    private nearByPlacesProvider: NearByPlacesProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.nearByPlaces = JSON.parse(this.navParams.get('data').nearbyPlaces);
    this.scanPropertyPicture = this.navParams.get('data').scanPropertyPicture;
  }

  ngOnInit() {
    this.nearByPlaceType = ['atm', 'bank', 'school', 'store', 'train_station', 'hospital', 'gas_station']
  }

  getCurrentLatLng() {
    this.currentLocationProvider.getCurrentLocation()
      .then(response => {
        var lat = response.coords.latitude;
        var lng = response.coords.longitude;
        var position = { lat: lat, lng: lng };
        this.position = position;
        this.getCurrentLocationAddress(lat, lng);
        console.log(this.currentLocation);
        setTimeout(() => {
          this.mapInit(lat, lng, '');
        }, 1500);

      })
  }

  ionViewDidLoad() {
    this.getCurrentLatLng();

  }

  propertyDetails() {
    var data = {
      data: {
        scanPropertyPicture: this.scanPropertyPicture,
        currentAddres: this.currentLocation,
        currentLocationAddress: this.currentLocation
      }
    }
    //this.navCtrl.push(PropertyDetailsPage, data);
    this.navCtrl.setRoot(PropertyDetailsPage, data);
  }





  mapInit(lat, lng, marker) {
    
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
    

    this.nearByPlaceType.forEach((el) => {
      this.nearByPlacesProvider.getNearByPlaces(lat, lng, el)
        .subscribe((response) => {
          console.log(response);
          var nearByplacesResponse = response['results'];
          //add distance to nearby location
          var count = 0;
          nearByplacesResponse.forEach((element, i) => {

            if (element.types[0] == el && count < 5) { // check type and take first object
              count++;
              createMarker(nearByplacesResponse[i]);
            }
          });
          count = 0;
        },
          (error) => {
            console.log(error);
            current.apiErrorMsg = error;
            current.apiError = true;
          }
        );
    });

    function createMarker(place) {
      var url = place.icon;
      if (place.types[0] == 'atm') {
        url = 'assets/imgs/MapView/atmV10.png';
      } else if (place.types[0] == 'school') {
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
      } else if (place.types[0] == 'train_station') {
        url = 'assets/imgs/MapView/metroV10.png';
      }
      var icon = {
        url: url, // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
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
      url: "assets/imgs/MapView/location-detailsV2.png", // url
      scaledSize: new google.maps.Size(60, 60), // scaled size
      origin: new google.maps.Point(0, 0), // origin
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
      } else {
        marker1.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    // Allow each marker to have an info window   
    console.log(this.currentLocation)
    var infoWindow = new google.maps.InfoWindow()
    infoWindow.setContent("<p style='width: 200px;color: green;background #000;'>" + this.currentLocation + "</p>");
    infoWindow.open(map, marker1);

    this.markerCoords(marker1);

    if (this.apiError) {
      this.showAlert(this.apiErrorMsg);
    }


  }

  markerCoords(markerobject) {
    var _this = this;

    google.maps.event.addListener(markerobject, 'drag', function (evt) {

      setTimeout(() => {
        _this.mapInit(evt.latLng.lat(), evt.latLng.lng(), 'drag');
      }, 2000);

    });
  }

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
          _this.showAlert(status);
          console.log("Geocoding failed: " + status);
        }
      }); //geocoder.geocode()
    }

  }

  userInfo() {
    this.navCtrl.push(UserInfoPage);
  }

  showAlert(error) {
    let alert = this.alertCtrl.create({
      title: 'Api Error',
      subTitle: this.apiErrorMsg,
      buttons: ['OK']
    });
    alert.present();
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading Map View',
      spinner: 'dots',
      showBackdrop: false
    });

    this.loading.present();
  }



}
