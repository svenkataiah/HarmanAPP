import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanPropertyPage } from './scan-property';

@NgModule({
  declarations: [
    ScanPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanPropertyPage),
  ],
})
export class ScanPropertyPageModule {}
