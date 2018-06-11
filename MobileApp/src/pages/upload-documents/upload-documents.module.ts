import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadDocumentsPage } from './upload-documents';

@NgModule({
  declarations: [
    UploadDocumentsPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadDocumentsPage),
  ],
})
export class UploadDocumentsPageModule {}
