import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Tile } from './models/tile.model';
import { NetreportPage } from './report/netreport/netreport';
import { LantayreportPage } from './report/lantayreport/lantayreport';
import { HomePage } from '../home/home';
import { TimestampPage } from '../../pages/timestamp/timestamp';
import { MoneyPage } from '../../pages/money/money';
import { WeightPage } from '../../pages/weight/weight';



@IonicPage()
@Component({
  selector: 'page-truckscales',
  templateUrl: 'truckscales.html',
})
export class TruckscalesPage {
  public tiles: Tile[][];
  menus: any = [];
  private nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams, nav: Nav) {
    this.nav = nav;
    this.buitmenu();
    this.initTiles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TruckscalesPage');
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
  gohome(fabmenu) {
    this.nav.setRoot(fabmenu.component);
  }
  public navigateTo(tile) {
    this.nav.push(tile.page);
  }
  private initTiles(): void {
    this.tiles = [[{
      title: 'รายงานเกรดปาล์มตามลานเททั้งหมด',
      path: 'report/netreport',
      img: 'assets/imgs/palm.jpeg',
      page: NetreportPage
    }, {
      title: 'รายงานรวมยอดปาล์มฝ่ายจัดซื้อวัตถุดิบตามลาเททั้งหมด',
      path: 'report/lantayreport',
      img: 'assets/imgs/bananalogo.png',
      page: LantayreportPage
    }]];
  }

}
