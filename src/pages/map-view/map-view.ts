import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
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
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.mapInit();

    this.geolocation.getCurrentPosition()
      .then((location) => {
        console.log(location);

        var lat = location.coords.latitude;
        var lng = location.coords.longitude;
        var position = { lat: lat, lng: lng };
        this.getCurrentLocation(lat, lng);
      });
  }





  mapInit() {

    this.geolocation.getCurrentPosition()
      .then((location) => {
        console.log(location);

        var lat = location.coords.latitude;
        var lng = location.coords.longitude;
        var position = { lat: lat, lng: lng };

        // var directionsService = new google.maps.DirectionsService;
        // var directionsDisplay = new google.maps.DirectionsRenderer;
        // var directionsDisplay1 = new google.maps.DirectionsRenderer;

        var map = new google.maps.Map(document.getElementById('maps'), {
          center: position,
          zoom: 5
        });

        // directionsDisplay.setMap(map);
        // directionsDisplay1.setMap(map);
        // calculateAndDisplayRoute(directionsService, directionsDisplay);
        // calculateAndDisplayRoutes(directionsService, directionsDisplay1);

        // function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        //   directionsService.route({
        //     origin: position,
        //     destination: 'k r market',
        //     travelMode: 'DRIVING'
        //   }, function (response, status) {
        //     if (status === 'OK') {
        //       directionsDisplay.setDirections(response);
        //     } else {
        //       window.alert('Directions request failed due to ' + status);
        //     }
        //   });
        // }


        // function calculateAndDisplayRoutes(directionsService, directionsDisplay) {
        //   directionsService.route({
        //     origin: 'nagavara',
        //     destination: 'k r market',
        //     travelMode: 'DRIVING'
        //   }, function (response, status) {
        //     if (status === 'OK') {
        //       directionsDisplay.setDirections(response);
        //     } else {
        //       window.alert('Directions request failed due to ' + status);
        //     }
        //   });
        // }


        map = new google.maps.Map(document.getElementById('maps'), {
          center: position,
          zoom: 15
        });
        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: position,
          radius: 500,
          type: ['store']
        }, callback);


        function callback(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
          }
        }

        function createMarker(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });

          google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
          });
        }



      })
      .catch((error) => {
        console.log('Error getting location', error);
      })


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
