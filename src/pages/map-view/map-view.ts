import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ScanPropertyPage } from '../scan-property/scan-property';
import { CurrentLocationProvider } from '../../providers/current-location/current-location';
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
    private currentLocationProvider: CurrentLocationProvider
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
    setInterval(() => {
      this.getCurrentLatLng();
    }, 5000);
  }



  scanProperty() {
    this.navCtrl.push(ScanPropertyPage)
  }


  mapInit(lat, lng) {


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
      } else {
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

    this.markerCoords(marker1)







  }
  
  markerCoords(markerobject) {
    google.maps.event.addListener(markerobject, 'dragend', function (evt) {
      console.log(evt.latLng.lat() + " " + evt.latLng.lng());
    });

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
