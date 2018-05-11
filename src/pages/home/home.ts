import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanPropertyPage } from '../scan-property/scan-property';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { MapViewPage } from '../map-view/map-view';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { NearByPlacesProvider } from '../../providers/near-by-places/near-by-places';
import { CurrentLocationProvider } from '../../providers/current-location/current-location';
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentLocation: any = '';
  nearbyPlaces: any;
  errorMessage:any;
  constructor(
    public navCtrl: NavController,
    private CameraPreview: CameraPreview,
    private geolocation: Geolocation,
    private http: HttpClient,
    private nearByPlacesProvider: NearByPlacesProvider,
    private currentLocationProvider: CurrentLocationProvider
  ) {

  }

  scanProperty() {
    this.navCtrl.push(ScanPropertyPage)
  }

  viewMap() {
    this.navCtrl.push(MapViewPage)
  }

  previewCamera() {

    this.currentLocationProvider.getCurrentLocation()
    .then((response)=>{
      console.log(response);
      this.getCurrentLocationAddress(response.coords.latitude,response.coords.longitude);
      this.getNearByPlaces(response.coords.latitude,response.coords.longitude)
    });

    //this.navCtrl.push(ScanPropertyPage)
    let options = {
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

    
  }

  ionViewDidLeave() {
    this.CameraPreview.stopCamera();
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

          console.log("Geocoding failed: " + status);
        }
      }); //geocoder.geocode()
    }
  }


  getNearByPlaces(lat, lng) {
    this.nearByPlacesProvider.getNearByPlaces(lat, lng)
      .subscribe((response)=>{
        console.log(response['results']);

        //filter nearby location
        var nearByplacesResponse = response['results'];
        var filterednearByPlaces =  nearByplacesResponse.filter(function(el){
          return el.types[0]!='point_of_interest';
        });

        //add distance to filtered nearby location
        filterednearByPlaces.forEach(element => {
            var distance = getDistanceFromLatLonInKm(lat,lng,element.geometry.location.lat,element.geometry.location.lng)
            element.distance = distance.toFixed(3)+' KM';
          });

          this.nearbyPlaces = filterednearByPlaces;
          console.log(this.nearbyPlaces);


      },
      (error)=>{
        this.errorMessage = error;
      }
    
    );

      //calculate distance between two location
      function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
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

  }




}
