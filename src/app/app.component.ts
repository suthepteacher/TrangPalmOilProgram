import { Component, ViewChild } from '@angular/core';
import {MenuController, Nav, Platform,AlertController,Events  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-services/auth-services';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CreateuserPage } from '../pages/createuser/createuser';
import { TruckscalesPage } from '../pages/truckscales/truckscales'
import { TimestampPage } from '../pages/timestamp/timestamp'
import { MoneyPage} from '../pages/money/money';
import { WeightPage } from '../pages/weight/weight';
import { App } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: any = [] ;
  rootPage;
  username;

	@ViewChild(Nav) nav: Nav;
 // rootPage:any = HomePage;

  constructor(
    private platform: Platform,
		private menu: MenuController,
    private statusBar: StatusBar,
   // private splashScreen: SplashScreen,
    private auth: AuthServiceProvider,
    public alertController: AlertController,
    public events: Events,  
    public alertCtrl: AlertController,
    public app: App,
    ){
      this.initializeApp();
      this.events.subscribe('userloggedin',(() => {
            this.setmenu();
        }));
        this.events.subscribe('resume',(() => {
          this.setmenu();
      }));
  
     }
    setmenu()
    {
      this.pages = [];
      const userdata = JSON.parse(localStorage.getItem('userkeepData'));
      this.pages.push({ title: 'หน้าหลัก', component: HomePage, icon: 'home' }); 
      for(let data of userdata ) {
        this.username = data.user;
        if(data.admin== 1)
        {
          this.pages.push({ title: 'Adduser',path: 'createuser',component: CreateuserPage , icon: 'person-add' }); 
        }
        if(data.truckscales == 1)
        {
          this.pages.push({ title: 'TruckScales',path: 'truckscales',component: TruckscalesPage, icon: 'open' }); 
        }
        if(data.timestamp == 1)
        {
          this.pages.push({ title: 'TimestampPage',path: 'timestamp',component: TimestampPage, icon: 'alarm' }); 
        }
        if(data.money == 1)
        {
          this.pages.push({ title: 'Money',path: 'money',component: MoneyPage, icon: 'logo-usd' }); 
        }
        if(data.weight == 1)
        {
          this.pages.push({ title: 'Weight',path: 'weight',component: WeightPage, icon: 'download' }); 
        }
      }
    }
    
     initializeApp()
     {
      this.platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    //splashScreen.hide();
        this.platform.registerBackButtonAction(() => {
          // Catches the active view
          let nav = this.app.getActiveNavs()[0];
          let activeView = nav.getActive();
          // Checks if can go back before show up the alert
          if (activeView.name === 'HomePage') {
            if (nav.canGoBack()) {
              nav.pop();
            } else {
              const alert = this.alertCtrl.create({
                title: 'Fechar o App',
                message: 'Você tem certeza?',
                buttons: [{
                  text: 'Cancelar',
                  role: 'cancel',
                  handler: () => {
                    this.nav.setRoot('HomePage');
                    console.log('** Saída do App Cancelada! **');
                  }
                }, {
                  text: 'Fechar o App',
                  handler: () => {
                    this.logout();
                    this.platform.exitApp();
                  }
                }]
              });
              alert.present();
            }
          }
        });
    
      this.rootPage = LoginPage;
       });
     }
     openPage(page) {
      this.menu.close();
      this.nav.setRoot(page.component);
    }
    
     login() {

	  	this.menu.close();
		  this.nav.setRoot(LoginPage);
	  
	  }
	  logout() {

		//this.menu.close();
    //this.nav.setRoot(LoginPage);
    this.confirmexit();
	
  }
  async confirmexit() {
    const alert = await this.alertController.create({
      title: 'แจ้งเตือน!',
      message: 'คุณต้องการออกจากระบบใช่หรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            localStorage.clear();
            this.menu.close();
            this.nav.setRoot(LoginPage);
          }
        }
      ]
    });
  
    await alert.present();
  }

}

