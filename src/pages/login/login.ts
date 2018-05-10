import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapViewPage } from '../../pages/map-view/map-view';
import { ScanPropertyPage } from '../../pages/scan-property/scan-property';
import { MenusPage } from '../../pages/menus/menus';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: any;
  password: any;
  loginStatus:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    if(this.username =="admin" && this.password=="admin"){
      //this.navCtrl.push(ScanPropertyPage);
      this.navCtrl.setRoot(MenusPage);
    }else{
      this.loginStatus = "Invalid Username or Password";
    }
  }

}
