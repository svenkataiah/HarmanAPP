import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanPropertyPage } from '../scan-property/scan-property';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { MapViewPage } from '../map-view/map-view';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentLocation:any = '';
  constructor(
    public navCtrl: NavController,
    private CameraPreview: CameraPreview,
    private geolocation: Geolocation
  ) {


  }

  scanProperty() {
    this.navCtrl.push(ScanPropertyPage)
  }

  viewMap() {
    this.navCtrl.push(MapViewPage)
  }

  previewCamera() {

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

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition()
      .then((location) => {
        console.log(location);

        var lat = location.coords.latitude;
        var lng = location.coords.longitude;
        var position = { lat: lat, lng: lng };
        this.getCurrentLocation(lat, lng);
      });
  }

  getCurrentLocation(lat, lng) {
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
}
