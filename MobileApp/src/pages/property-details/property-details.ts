import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ScanPropertyPage } from '../scan-property/scan-property';
import { UserInfoPage } from '../user-info/user-info';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { HttpClient } from '@angular/common/http';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { LoanDetailsPage } from '../loan-details/loan-details';

@IonicPage()
@Component({
  selector: 'page-property-details',
  templateUrl: 'property-details.html',
})
export class PropertyDetailsPage {
  scanPropertyPage: ScanPropertyPage;
  tabStatus: any = 'ownerInfo';
  scanPropertyPicture: any;
  currentLocationAddress: any;
  propertyDetails: any;
  ownerInfo: any;
  dimensions: any;
  characteristics: any;
  interested: any;
  interestedBtn: any = false;
  registrationId: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private photoViewer: PhotoViewer,
    private http: HttpClient,
    public alertCtrl: AlertController,
    private storage: Storage,
    public loadingCtrl: LoadingController
  ) {
    this.scanPropertyPicture = this.navParams.get('data').scanPropertyPicture;
    this.currentLocationAddress = this.navParams.get('data').currentLocationAddress;

    // Or to get a key/value pair
    storage.get('registrationId').then((val) => {
      this.registrationId = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyDetailsPage');
    this.http.get("http://quickhomeloanapi.azurewebsites.net/api/property")
      .subscribe((response) => {
        console.log(response);
        this.presentLoadingDefault('Fetching property information from DTDB...');
        setTimeout(() => {

          this.propertyDetails = response['propertyValues'];
          this.ownerInfo = response['ownerInfo']
          this.characteristics = response['characteristics']
          this.dimensions = response['dimensions'];
          this.loading.dismiss();

        }, 4000);

      })
  }

  switchTabs(status) {
    if (status == 'ownerInfo')
      this.tabStatus = 'ownerInfo';
    else if (status == 'basicInfo')
      this.tabStatus = 'basicInfo';
    else
      this.tabStatus = 'gallery'
  }

  registerNotification() {
    this.http.get("http://virtiledge.com/fcm/?registrationid=" + this.registrationId)
      //this.http.post("http://quickhomeloanapi.azurewebsites.net/api/loan", { RegistrationId: this.registrationId })
      .subscribe((response) => {
        this.showAlert();
        console.log(response);
        this.interested = response;
        this.interestedBtn = true;
      })
  }

  userInfo() {
    this.navCtrl.push(UserInfoPage);
  }

  viewPhoto(url) {
    this.photoViewer.show(url);
  }

  LoanDetails() {
    this.navCtrl.push(LoanDetailsPage);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Thank You for your Interest. You will recieve a notification shortly',
      buttons: ['OK']
    });
    alert.present();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Need Loan?<hr>',
      message: 'Would you like to apply for loan?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes, Check for Eligibility',
          handler: () => {
            console.log('Agree clicked');
            this.presentLoadingDefault('Property information is being sent to the financial institution...');
            setTimeout(() => {
              this.registerNotification();
              this.loading.dismiss();
              this.navCtrl.setRoot(this.propertyDetails);
            }, 5000);
          }
        }
      ]
    });
    confirm.present();
  }


  presentLoadingDefault(content) {
    this.loading = this.loadingCtrl.create({
      content: content,
      spinner: 'dots'
    });

    this.loading.present();
  }

  ionViewWillLeave() {
    this.loading.dismiss();
  }

}
