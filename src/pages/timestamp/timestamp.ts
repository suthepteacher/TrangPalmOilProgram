import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MoneyPage } from '../../pages/money/money';
import { WeightPage } from '../../pages/weight/weight';
import { TruckscalesPage } from '../../pages/truckscales/truckscales'

/**
 * Generated class for the TimestampPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timestamp',
  templateUrl: 'timestamp.html',
})
export class TimestampPage {
  private nav: Nav;
  menus: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, nav: Nav) {
    this.nav = nav;
    this.buitmenu();
  }
  gohome(fabmenu) {
    this.nav.setRoot(fabmenu.component);
  }
  buitmenu() {
    const userdata = JSON.parse(localStorage.getItem('userkeepData'));
    this.menus.push({ title: 'Home', path: 'home', component: HomePage, icon: 'home' });
    for (let data of userdata) {
      if (data.truckscales == 1) {
        this.menus.push({ title: 'TruckScales', path: 'truckscales', component: TruckscalesPage, icon: 'open' });
      }
      if (data.timestamp == 1) {
        this.menus.push({ title: 'TimestampPage', path: 'timestamp', component: TimestampPage, icon: 'alarm' });
      }
      if (data.money == 1) {
        this.menus.push({ title: 'Money', path: 'money', component: MoneyPage, icon: 'logo-usd' });
      }
      if (data.weight == 1) {
        this.menus.push({ title: 'Weight', path: 'weight', component: WeightPage, icon: 'download' });
      }
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TimestampPage');
  }

}
