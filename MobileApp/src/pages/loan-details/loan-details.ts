import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SuccessPage } from '../success/success';

@IonicPage()
@Component({
  selector: 'page-loan-details',
  templateUrl: 'loan-details.html',
})
export class LoanDetailsPage {

  tabStatus: any = 'ownerInfo';
  loanDetails: any;
  loanTenureDetails: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  ) {
  }

  switchTabs(status) {
    if (status == 'ownerInfo')
      this.tabStatus = 'ownerInfo';
    else if (status == 'basicInfo')
      this.tabStatus = 'basicInfo';
    else
      this.tabStatus = 'gallery'
  }

  loanSchedule(loanTenureArrayObject, index) {
    var principalPaidTotal = 0;
    var interestPaidTotal = 0;
    var balanceTotal = 0;
    for (var i = 0; i < loanTenureArrayObject.length; i++) {
      principalPaidTotal = principalPaidTotal + parseInt(loanTenureArrayObject[i].principalPaid);
    };
    for (var i = 0; i < loanTenureArrayObject.length; i++) {
      interestPaidTotal = interestPaidTotal + parseInt(loanTenureArrayObject[i].interestPaid);
    };
    for (var i = 0; i < loanTenureArrayObject.length; i++) {
      balanceTotal = balanceTotal + parseInt(loanTenureArrayObject[i].balance);
    };
    var yearlyTotal = principalPaidTotal+interestPaidTotal+balanceTotal;
    this.loanTenureDetails = loanTenureArrayObject;
    this.loanTenureDetails.index = index;
    this.loanTenureDetails.principalPaidTotal = principalPaidTotal;
    this.loanTenureDetails.interestPaidTotal = interestPaidTotal;
    this.loanTenureDetails.balanceTotal = balanceTotal;
    this.loanTenureDetails.yearlyTotal = yearlyTotal;
    this.tabStatus = 'loanTenureDetails';

  }

  applyLoan() {
    this.navCtrl.push(SuccessPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyDetailsPage');
    this.http.get("http://quickhomeloanapi.azurewebsites.net/api/loan/loanid")
      .subscribe((response) => {
        console.log(response);
        this.loanDetails = response;
      })
  }

}
