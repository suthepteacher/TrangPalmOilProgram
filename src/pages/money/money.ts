import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-money',
  templateUrl: 'money.html',
})
export class MoneyPage {
  private nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams, nav: Nav) {
    this.nav = nav;
  }
  gohome()
  {
    this.nav.setRoot(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MoneyPage');
  }

}
