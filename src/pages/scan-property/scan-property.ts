import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapViewPage } from '../../pages/map-view/map-view';


@IonicPage()
@Component({
  selector: 'page-scan-property',
  templateUrl: 'scan-property.html',
})
export class ScanPropertyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPropertyPage');
  }

  loadMapView(){
    this.navCtrl.push(MapViewPage);
  }

}
