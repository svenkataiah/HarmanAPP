import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject, } from '@ionic-native/file-transfer';
import { Camera, CameraOptions, MediaType } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
const client_url = 'http://quickloanapi.azurewebsites.net';

@IonicPage()
@Component({
  selector: 'page-upload-documents',
  templateUrl: 'upload-documents.html',
})
export class UploadDocumentsPage {

  @ViewChild('name') name: ElementRef;

  imageURI: any;
  imageFileName: any;
  firstName: any;
  lastName: any;
  OCRParseText: any;
  imageData: any;
  loading: any;
  loanFormDetails: any;
  referenceNo: any;
  userId: any;
  selectedLoanOption: any;
  dlVerification: any = true;
  passportVerification: any = true;
  accountAddress: any;

  propertyAddress: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private fileChooser: FileChooser,
    private http: HttpClient,
    private storage: Storage,
    public modalCtrl: ModalController,
  ) {
    this.referenceNo = this.navParams.get('data').referenceNo;
    this.selectedLoanOption = this.navParams.get('data').selectedLoanOption;
    //this.referenceNo = 'BR0001HL00023';
    //this.selectedLoanOption = 67;
  }


  ionViewDidLoad() {
    this.presentLoadingDefault('Loading application form');
    this.http.get(client_url + "/api/loan/details/" + this.referenceNo + "/true")
      .subscribe((response) => {
        console.log(response);

        setTimeout(() => {
          this.loanFormDetails = response;
          console.log(response['account']['addresses']);
          console.log(response['account']['addresses'][0]);
          this.accountAddress = response['account']['addresses'][0];
          this.propertyAddress = response['property']['propertyAddress'];
          console.log(this.propertyAddress);
          this.loading.dismiss();
        }, 2000);
      })
  }

  submitApplication(data) {
    data.selectedLoanOption = this.selectedLoanOption;
    data.propertyAddress = data.property.propertyAddress;
    data = JSON.stringify(data);
    delete data.property;
    delete data.loanOptions;
    this.presentLoadingDefault('Submiting the application');
    this.http.post(client_url + "/api/loan/update/false", data)
      .subscribe((response) => {
        console.log(response);
        setTimeout(() => {
          this.loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        }, 2000);
      },
        (err) => {
          this.loading.dismiss();
          console.log(err);
        }
      )
  }

  saveApplication(data) {
    this.presentLoadingDefault('Submiting the application');
    this.http.post(client_url + "/api/loan/update/true", data)
      .subscribe((response) => {
        console.log(response);
        setTimeout(() => {
          this.loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        }, 2000);
      },
        (err) => {
          this.loading.dismiss();
          console.log(err);
        }
      )
  }

  openFiles() {
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      this.imageData = 'data:image/jpeg;base64,' + imageData;
      //this.imageURI = imageData+".jpg";
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  captureImage() {
    const options: CameraOptions = {
      quality: 40,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      this.imageData = 'data:image/jpeg;base64,' + imageData;
      //this.imageURI = imageData+".jpg";
    }, (err) => {
      console.log(err);
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  uploadImages() {
    this.presentLoadingDefault('Verifying document');
    var data = new FormData();
    data.append('file', this.imageData);
    this.http.post('http://virtiledge.com/admin/file_upload.php', data)
      .subscribe((response) => {
        console.log(response);
        this.getOCRData(response);
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
      })
  }

  getOCRData(file) {
    console.log("OCR");

    setTimeout(() => {
      if (this.loading.dismiss()) {
        this.loading.dismiss();
      }
    }, 40000);

    var path = "http://virtiledge.com/admin/" + file['image_url'] + '.jpg';
    //this.http.get("https://api.ocr.space/parse/imageurl?apikey=273ed2d3bf88957&url=https://assets.thaivisa.com/forum/uploads/monthly_12_2015/post-250519-0-04774200-1449916274_thumb.jpg")
    this.http.get("https://api.ocr.space/parse/imageurl?apikey=273ed2d3bf88957&url=" + path)
      .subscribe((res) => {
        this.storage.set('ocr', res['ParsedResults']);
        console.log(res);
        if (res) {
          if (res['ParsedResults'] != null) {
            console.log(res['ParsedResults']);
            console.log(res['ParsedResults'][0]);
            console.log(res['ParsedResults'][0]['ParsedText']);
            this.OCRParseText = res['ParsedResults'][0]['ParsedText'];

            this.verifyDocument();
          } else {
            this.showAlert(res['ErrorMessage'][0]);
            this.loading.dismiss();
          }
        } else {
          this.loading.dismiss();
          this.showAlert('OCR failed to detect text.Please try again');
        }
      },
        (err) => {
          this.loading.dismiss();
          console.log(err);

        });
  }

  verifyDocument() {
    var parsedText = this.OCRParseText.toString().toLowerCase();
    console.log(parsedText);

    var name = this.loanFormDetails.account.firstName.toString().toLowerCase().replace(/[^a-zA-Z ]/g, "");
    var document_status = false;
    /****** DL verfification  *******/
    var dl_verify1 = parsedText.toString().search('driver');
    var dl_verify2 = parsedText.toString().search(name);
    if (dl_verify1 != -1) {
      if (dl_verify2 != -1) {
        console.log("DL verified")
        this.dlVerification = true;
        //this.findDlNumber(parsedText);
        var array = parsedText.split("\n");
        array.forEach(element => {
          var str = element.replace(/ /g, '');
          if (str.length == 10) {
            if (!isNaN(str)) {
              this.loanFormDetails.stateDLNo = str;
            }
          }
        });
        console.log(array);
      } else {
        this.dlVerification = false;
        //this.name.nativeElement.focus();
        this.showAlert('Failed to verify document.Please try again');
        console.log("invalid DL");
      }
    } else {
      //this.dlVerification = false;
      // document_status = true;
      this.showAlert('Kindly upload the document again');
    }


    /****** Passport verfification  *******/
    var pass_verify1 = parsedText.toString().search('passport');
    var pass_verify2 = parsedText.toString().search(name);
    console.log("p1 " + pass_verify1);
    console.log("p2 " + pass_verify2);
    if (pass_verify1 != -1) {
      if (pass_verify2 != -1) {
        console.log("Passport verified")
        this.passportVerification = true;
        //this.findDlNumber(parsedText);
        var array = parsedText.split("\n");
        array.forEach(element => {
          var str = element.replace(/ /g, '');
          if (str.length == 10) {
            if (!isNaN(str)) {
              this.loanFormDetails.passportNo = str;
            }
          }
        });
        console.log(array);
      } else {
        this.passportVerification = false;
        // this.name.nativeElement.focus();
        this.showAlert('Failed to verify passport.Please try again.');
        console.log("invalid Passport");
      }
    } else {
      //this.passportVerification = false;
      this.showAlert('Kindly upload the document again');
    }

    this.loading.dismiss();
  }

  findDlNumber(str) {
    var serach = str.search('Customer');
    var n = parseInt(serach) + 35;
    str = str.slice(serach, n);
    str = str.replace(/^\D+/g, '');
    str = str.slice(0, 11);
    return str;
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentLoadingDefault(content) {
    this.loading = this.loadingCtrl.create({
      content: content,
      spinner: 'dots',
      showBackdrop: false
    });

    this.loading.present();
  }

  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  showAlert(content) {
    let alert = this.alertCtrl.create({
      title: 'Something went wrong',
      subTitle: content,
      buttons: ['OK']
    });
    alert.present();
  }



}
