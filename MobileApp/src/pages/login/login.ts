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
import { Storage } from '@ionic/storage';

const client_url = 'http://quickloanapi.azurewebsites.net';

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
  userId: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private http: HttpClient,
    public loadingCtrl: LoadingController,
    private storage: Storage,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.loginBtn = true;
    this.presentLoadingDefault();
    this.http.get(client_url+"/api/auth/" + this.username + "/" + this.password)
      .subscribe((response) => {
        if (response['isAuthenticated']) {
          this.userId = response['userId'];
          this.setSessionData(response);
          this.postDeviceRegisterId();
          setTimeout(() => {
            this.loading.dismiss();
            this.navCtrl.setRoot(HomePage);
          }, 1000);
        } else {
          this.loading.dismiss();
          this.loginBtn = false;
          this.username = '';
          this.password = '';
          this.showAlert();
        }
      })
  }

  setSessionData(response) {
    this.storage.set('userId', response['userId']);
  }
  postDeviceRegisterId() {
     this.storage.get('registrationId')
      .then((regid) => {
        this.http.post(client_url+"/api/auth/register", { registrationId: regid, userId: this.userId })
          .subscribe((res) => {
            console.log(res);
          })
      })
  }

  signup() {
    this.navCtrl.push(SignupPage);
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
      content: 'Authenticating',
      showBackdrop: false,
      spinner: 'dots'
    });
    this.loading.present();
  }

}
