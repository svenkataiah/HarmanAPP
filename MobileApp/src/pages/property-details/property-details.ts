import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ScanPropertyPage } from '../scan-property/scan-property';
import { UserInfoPage } from '../user-info/user-info';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { HttpClient } from '@angular/common/http';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { LoanDetailsPage } from '../loan-details/loan-details';

const client_url = 'http://quickloanapi.azurewebsites.net';

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
  userId: any;
  propertyAddress: any;
  loading: any;

  @ViewChild('tab') tab: ElementRef;

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
    storage.get('userId').then((val) => {
      this.userId = val;
    });

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad PropertyDetailsPage');
    this.storage.get('propertyAddress').then((paddress) => {
      console.log("property address");
      console.log(paddress);
      this.propertyAddress = paddress;
      this.http.post(client_url + "/api/property/details", { address: paddress })
        .subscribe((response) => {
          console.log(response);
          this.presentLoadingDefault('Fetching property details');
          setTimeout(() => {
            this.propertyDetails = response;
            this.loading.dismiss();
          }, 4000);
        });

      //this.tab.nativeElement.click();

      let el = document.getElementById("tab") as HTMLElement;
      el.click();
    });
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
    //this.http.get("http://virtiledge.com/fcm/?registrationid=" + this.registrationId)
    this.http.post(client_url + "/api/loan/create", { userId: this.userId, address: this.propertyAddress })
      .subscribe((response) => {
        this.showAlert();
        console.log(response);
        // this.interested = response;
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
            this.interestedBtn = true;
            this.presentLoadingDefault('Property information is being sent to the financial institution');
            setTimeout(() => {
              this.registerNotification();
              this.loading.dismiss();
              this.navCtrl.setRoot(this.propertyDetails);
            }, 4000);
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

}
