import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MapViewPage } from '../../pages/map-view/map-view';
import { ScanPropertyPage } from '../../pages/scan-property/scan-property';
import { MenusPage } from '../../pages/menus/menus';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { LoanDetailsPage } from '../loan-details/loan-details';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: any;
  password: any;
  loginStatus: any;
  loginUser: any;
  loginBtn: any = false;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private http: HttpClient,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.loginBtn = true;
    this.presentLoadingDefault();
    this.http.get("http://quickhomeloanapi.azurewebsites.net/api/auth/" + this.username + "/" + this.password)
      .subscribe((response) => {
        console.log(response);
        if (response['isAuthenticated']) {
          //this.presentToast();
          setTimeout(() => {
            this.loading.dismiss();
            this.navCtrl.setRoot(HomePage);
          }, 3000);
        } else {
          this.loginBtn = false;
          this.username = '';
          this.password = '';
          this.showAlert();
        }
      })
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

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Athenticating login...',
      showBackdrop: false,
      spinner: 'dots'
    });
    this.loading.present();
  }

}
