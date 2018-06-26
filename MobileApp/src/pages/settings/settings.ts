import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  selectedTheme: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(
      val => {
        this.selectedTheme = val;
        console.log(val);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

}
