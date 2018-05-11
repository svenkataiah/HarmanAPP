import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
/*
  Generated class for the CurrentLocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrentLocationProvider {

  constructor(
    public http: HttpClient,
    private geolocation: Geolocation
  ) {
    console.log('Hello CurrentLocationProvider Provider');
  }

  getCurrentLocation(){
    return this.geolocation.getCurrentPosition();
  }

}
