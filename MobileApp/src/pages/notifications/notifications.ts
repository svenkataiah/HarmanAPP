import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoanDetailsPage } from '../loan-details/loan-details';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  notificationsDetails: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyDetailsPage');
    this.http.get("http://quickhomeloanapi.azurewebsites.net/api/loan/list/loanid")
      .subscribe((response) => {
        console.log(response);
        this.notificationsDetails = response;
      })
  }

  itemSelected(item){
    this.navCtrl.push(LoanDetailsPage);
  }

}
