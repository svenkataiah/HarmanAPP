import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ScanPropertyPage } from '../pages/scan-property/scan-property';
import { MapViewPage } from '../pages/map-view/map-view';
import { PropertyDetailsPage } from '../pages/property-details/property-details';
import { LoanDetailsPage } from '../pages/loan-details/loan-details';
import { SuccessPage } from '../pages/success/success';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { NearByPlacesProvider } from '../providers/near-by-places/near-by-places';
import { CurrentLocationProvider } from '../providers/current-location/current-location';
import { UserInfoPage } from '../pages/user-info/user-info';
import { SignupPage } from '../pages/signup/signup';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { NotificationsPage } from '../pages/notifications/notifications';
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { UploadDocumentsPage } from '../pages/upload-documents/upload-documents';
import { LoanHistoryPage } from '../pages/loan-history/loan-history';
import { ModalPage } from '../pages/modal/modal';
import { MaskNumberPipe } from '../pipes/mask-number/mask-number';
import { CustomCurrencyPipe } from '../pipes/custom-currency/custom-currency';
import { SettingsProvider } from '../providers/settings/settings';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ScanPropertyPage,
    MapViewPage,
    PropertyDetailsPage,
    UserInfoPage,
    SignupPage,
    NotificationsPage,
    LoanDetailsPage,
    UploadDocumentsPage,
    LoanHistoryPage,
    ModalPage,
    MaskNumberPipe,
    CustomCurrencyPipe,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ScanPropertyPage,
    MapViewPage,
    PropertyDetailsPage,
    UserInfoPage,
    SignupPage,
    NotificationsPage,
    LoanDetailsPage,
    UploadDocumentsPage,
    LoanHistoryPage,
    ModalPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    CameraPreview,
    NearByPlacesProvider,
    CurrentLocationProvider,
    PhotoViewer,
    Push,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    FileChooser,
    SettingsProvider
  ]
})
export class AppModule { }
