import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoanDetailsPage } from '../loan-details/loan-details';
import { Storage } from '@ionic/storage';

const client_url = 'http://quickloanapi.azurewebsites.net';

@IonicPage()
@Component({
  selector: 'page-loan-history',
  templateUrl: 'loan-history.html',
})
export class LoanHistoryPage {

  loanHistoryDetails: any;
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    private storage: Storage,
    private loadingCtrl: LoadingController
  ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyDetailsPage');
    this.presentLoadingDefault();
    this.storage.get('userId')
      .then((userId) => {
        this.http.get(client_url + "/api/loan/history/" + userId + "/false")
          .subscribe((response) => {
            console.log(response);
            this.loanHistoryDetails = response;
            this.loading.dismiss();

            this.loanHistoryDetails.forEach(element => {
              if (element.createdDate) {
                element.createdDate = new Date(element.createdDate.replace('T', ' ') + ' UTC').toString();
              }
            });
          });
      });
  }

  itemSelected() {
  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Fetching loan history list',
      spinner: 'dots',
      showBackdrop: false
    });

    this.loading.present();
  }
}
