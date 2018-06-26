import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SuccessPage } from '../success/success';
import { UploadDocumentsPage } from '../upload-documents/upload-documents';
import { Storage } from '@ionic/storage';

const client_url = 'http://quickloanapi.azurewebsites.net';

@IonicPage()
@Component({
  selector: 'page-loan-details',
  templateUrl: 'loan-details.html',
})
export class LoanDetailsPage {

  tabStatus: any = 'ownerInfo';
  loanDetails: any;
  loanTenureDetails: any;
  loading: any;
  referenceNo: any;
  loanOptionId: any;
  tenure: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    public loadingCtrl: LoadingController,
    private storage: Storage
  ) {
    if (this.navParams.get('data')) {
      this.referenceNo = this.navParams.get('data').referenceNo;
      this.presentLoadingDefault();
      this.getLoanDetails(this.referenceNo);
    } else {
      storage.get('userId').then((userId) => {
        this.presentLoadingDefault();
        this.http.get(client_url + "/api/loan/latestRefNo/" + userId)
          .subscribe((response) => {
            this.referenceNo = response['refNo'];
            this.getLoanDetails(response['refNo']);
          });
      });

    }
  }

  switchTabs(status) {
    if (status == 'ownerInfo')
      this.tabStatus = 'ownerInfo';
    else if (status == 'basicInfo')
      this.tabStatus = 'basicInfo';
    else
      this.tabStatus = 'gallery'
  }

  loanSchedule(loanOptionId, loanTenureArrayObject, index, tenure) {
    this.loanOptionId = loanOptionId;
    this.tenure = tenure;
    var principalPaidTotal = 0;
    var interestPaidTotal = 0;
    var balanceTotal = 0;
    for (var i = 0; i < loanTenureArrayObject.length; i++) {
      principalPaidTotal = principalPaidTotal + parseFloat(loanTenureArrayObject[i].principalPaid);
    };
    for (var i = 0; i < loanTenureArrayObject.length; i++) {
      interestPaidTotal = interestPaidTotal + parseFloat(loanTenureArrayObject[i].interestPaid);
    };

    var yearlyTotal = principalPaidTotal + interestPaidTotal -loanTenureArrayObject[0].principalPaid;
    this.loanTenureDetails = loanTenureArrayObject;
    this.loanTenureDetails.index = index;
    this.loanTenureDetails.principalPaidTotal = principalPaidTotal;
    this.loanTenureDetails.interestPaidTotal = interestPaidTotal;
    this.loanTenureDetails.yearlyTotal = yearlyTotal;
    this.tabStatus = 'loanTenureDetails';
  }

  applyLoan() {
    console.log(this.loanOptionId);
    var data = {
      data: {
        referenceNo: this.referenceNo,
        selectedLoanOption: this.loanOptionId
      }
    }
    this.navCtrl.push(UploadDocumentsPage, data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyDetailsPage');
    let el = document.getElementById("loantab") as HTMLElement;
    el.click();
  }

  getLoanDetails(referenceNo) {

    this.http.get(client_url + "/api/loan/details/" + referenceNo + "/true")
      .subscribe((response) => {
        console.log(response);
        setTimeout(() => {
          this.loanDetails = response;
          this.loading.dismiss();
        }, 4000);
      })
  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Fetching account information and loan tenure details',
      spinner: 'dots',
      showBackdrop: false
    });

    this.loading.present();
  }

  ionViewWillLeave() {
    this.loading.dismiss();
  }

}
