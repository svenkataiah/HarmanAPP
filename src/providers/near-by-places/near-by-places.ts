import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NearByPlacesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NearByPlacesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NearByPlacesProvider Provider');
  }

  getNearByPlaces(ln,lt){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    var url = "https://maps.googleapis.com/maps/api/place/search/json?location="+ln+","+lt+"&radius=5000&sensor=false&key=AIzaSyAImBQiqvaXOQtqeK8VC-9I96kMmB6Mz7I";
    return this.http.get(url);
  }

}
