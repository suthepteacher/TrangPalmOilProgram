import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Nav} from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the WeightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html',
})
export class WeightPage {
  private nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams, nav: Nav) {
    this.nav = nav;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeightPage');
  }
  gohome()
  {
    this.nav.setRoot(HomePage);
  }

}
