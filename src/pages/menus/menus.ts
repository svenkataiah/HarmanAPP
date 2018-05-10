import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanPropertyPage } from '../../pages/scan-property/scan-property';

@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenusPage');
  }

}
