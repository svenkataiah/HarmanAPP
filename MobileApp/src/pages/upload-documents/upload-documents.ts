import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-upload-documents',
  templateUrl: 'upload-documents.html',
})
export class UploadDocumentsPage {

  imageURI: any;
  imageFileName: any;
  firstName: any;
  lastName: any;
  OCRParseText: any;

  constructor(
    public navCtrl: NavController,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private fileChooser: FileChooser,
    private http: HttpClient
  ) {
    this.firstName = "Santhosh";
    this.lastName = "Venkataiah";
    this.getOCRData();
  }

  openFiles() {
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  uploadFile() {
    this.getOCRData();
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
    

    fileTransfer.upload(this.imageURI, 'http://virtiledge.com/admin/alexa.php', options)
      .then((data) => {
        console.log(data);
        console.log(data + " Uploaded Successfully");
        this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
      });
  }

  getOCRData() {
    console.log("OCR");
    this.http.get("https://api.ocr.space/parse/imageurl?apikey=273ed2d3bf88957&url=https://assets.thaivisa.com/forum/uploads/monthly_12_2015/post-250519-0-04774200-1449916274_thumb.jpg")
      .subscribe((res) => {
        console.log(res);
        console.log(res['ParsedResults']);
        console.log(res['ParsedResults'][0]);
        console.log(res['ParsedResults'][0]['ParsedText']);
        this.OCRParseText = res['ParsedResults'][0]['ParsedText'];

        this.verifyDocument();
      },
        (err) => {
          console.log(err);
        });
  }

  verifyDocument(){
    var parsedText = this.OCRParseText.split("\n");
    console.log(parsedText);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadDocumentsPage');
  }



}
