import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ScanPropertyPage } from '../scan-property/scan-property';
import { CurrentLocationProvider } from '../../providers/current-location/current-location';
import { NearByPlacesProvider } from '../../providers/near-by-places/near-by-places';
declare var google;

@IonicPage()
@Component({
  selector: 'page-map-view',
  templateUrl: 'map-view.html',
})
export class MapViewPage {
  currentLocation: any = '';
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private currentLocationProvider: CurrentLocationProvider,
    private nearByPlacesProvider: NearByPlacesProvider
  ) {
  }

  getCurrentLatLng() {
    this.currentLocationProvider.getCurrentLocation()
      .then(response => {
        var lat = response.coords.latitude;
        var lng = response.coords.longitude;
        var position = { lat: lat, lng: lng };
        this.getCurrentLocation(lat, lng);
        this.mapInit(lat, lng);
      })
  }

  ionViewDidLoad() {
    this.getCurrentLatLng();
  }



  scanProperty() {
    this.navCtrl.push(ScanPropertyPage)
  }


  mapInit(lat, lng) {


    var position = { lat: lat, lng: lng };
    var map = new google.maps.Map(document.getElementById('maps'), {
      center: position,
      zoom: 13
    });

    var infowindow = new google.maps.InfoWindow();

    this.nearByPlacesProvider.getNearByPlaces(lat, lng, '')
      .subscribe((response) => {
        console.log(response['results']);
        for (var i = 0; i < response['results'].length; i++) {
          createMarker(response['results'][i]);
        }
      });


    function createMarker(place) {

      var icon = {
        url: place.icon, // url
        scaledSize: new google.maps.Size(20, 20), // scaled size
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
      url: "https://d30y9cdsu7xlg0.cloudfront.net/png/607183-200.png", // url
      scaledSize: new google.maps.Size(40, 40), // scaled size
      origin: new google.maps.Point(0,0), // origin
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


    this.markerCoords(marker1)

  }

  markerCoords(markerobject) {
    

    google.maps.event.addListener(markerobject, 'drag', function (evt) {
      console.log(evt.latLng.lat() + " " + evt.latLng.lng());
      //this.mapInit(evt.latLng.lat(),evt.latLng.lng());
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
