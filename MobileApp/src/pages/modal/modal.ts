import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  ocrText:any;
  
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private storage:Storage
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this.storage.get('ocr').then((val) => {
      console.log(val);
      this.ocrText = val;
    });

  }



}
