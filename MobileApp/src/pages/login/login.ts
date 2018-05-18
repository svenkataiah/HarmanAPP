import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MapViewPage } from '../../pages/map-view/map-view';
import { ScanPropertyPage } from '../../pages/scan-property/scan-property';
import { MenusPage } from '../../pages/menus/menus';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
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
  loginStatus: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    if (this.username == "admin" && this.password == "admin") {
      this.presentToast();
      setTimeout(()=>{
        this.navCtrl.setRoot(HomePage);
      },3000);
      
    } else {
      this.username = '';
      this.password = '';
      this.showAlert();
    }
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Authenticating...',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login Failed!',
      subTitle: 'Invalid Username or Password',
      buttons: ['OK']
    });
    alert.present();
  }

}
