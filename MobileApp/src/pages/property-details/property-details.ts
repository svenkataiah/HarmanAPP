import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanPropertyPage } from '../scan-property/scan-property';
import { UserInfoPage } from '../user-info/user-info';
import { PhotoViewer } from '@ionic-native/photo-viewer';

/**
 * Generated class for the PropertyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private photoViewer: PhotoViewer
  ) {
    this.scanPropertyPicture = this.navParams.get('data').scanPropertyPicture;
    this.currentLocationAddress = this.navParams.get('data').currentLocationAddress;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyDetailsPage');
  }

  switchTabs(status) {
    if (status == 'ownerInfo')
      this.tabStatus = 'ownerInfo';
    else if (status == 'basicInfo')
      this.tabStatus = 'basicInfo';
    else
      this.tabStatus = 'gallery'
  }


  userInfo() {
    this.navCtrl.push(UserInfoPage);
  }

  viewPhoto(url){
    this.photoViewer.show(url);
  }

}
