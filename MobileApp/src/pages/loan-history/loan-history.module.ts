import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanHistoryPage } from './loan-history';

@NgModule({
  declarations: [
    LoanHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanHistoryPage),
  ],
})
export class LoanHistoryPageModule {}
