import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { Tile } from './models/tile.model';
import { TruckscalesPage } from '../truckscales/truckscales'
import { TimestampPage } from '../timestamp/timestamp'
import { MoneyPage} from '../money/money';
import { WeightPage } from '../weight/weight';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Component({
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {
	public tiles: Tile[][];
	menus: any = [] ;
	username;
	subscription;
	userDetails: any;
	responseData: any;
	testNav: any;
	currentdate;
	FormattedDate;
	FormattedDateObj;
	FormattedDayName;
	Clock = Date.now();
  private nav: Nav;
  constructor(public navCtrl: NavController,nav: Nav,private http: Http) 
  {
	  this.getFormattedDate();	
	  this.nav = nav;
		const userdata = JSON.parse(localStorage.getItem('userkeepData'));
		//console.log(userdata);
		for(let data of userdata ) {
			this.username = data.user;
			if(data.truckscales == 1)
			{
				this.menus.push({ title: 'TruckScales',path: 'truckscales',component: TruckscalesPage, imgasset: 'assets/imgs/palm.jpeg'}); 
			}
			if(data.timestamp == 1)
			{
				this.menus.push({ title: 'TimestampPage',path: 'timestamp',component: TimestampPage, imgasset: 'assets/imgs/p2.jpg' }); 
			}
			if(data.money == 1)
			{
				this.menus.push({ title: 'Money',path: 'money',component: MoneyPage, imgasset: 'assets/imgs/money.png'}); 
			}
			if(data.weight == 1)
			{
				this.menus.push({ title: 'Weight',path: 'weight',component: WeightPage, imgasset: 'assets/imgs/truck.jpg'}); 
			}
		}
  }
	ionViewDidLoad() {
		this.subscription = Observable.interval(1000).subscribe(x => {
			this.Clock = Date.now();
		});
	}
  public navigateTo(tile) {
		this.nav.setRoot(tile.component);
  }
	getFormattedDate() {
		let dateObj = new Date();
		let year = dateObj.getFullYear() + 543;
		let month = dateObj.getMonth();
		let date = dateObj.getDate();
		let dayarray = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
		let monthArray = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวคม'];
		this.FormattedDate = date + ' ' + monthArray[month] + ' ' + year;
		this.FormattedDateObj = new Date(this.FormattedDate);
		this.FormattedDayName = dayarray[dateObj.getDay()];
		// console.log(this.FormattedDayName);
	}
 /*private initTiles(): void {
		this.tiles = [[{
			title: 'Truckscales',
			path: 'truckscales',
			icon: 'open',
			component: TruckscalesPage
		}, {
			title: 'TimestampPage',
			path: 'timestamp',
			icon: 'alarm',
			component: TimestampPage
		}]];
	}*/
}
