import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-services/auth-services';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ConnectivityService} from '../../providers/ConnectivityService';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  resposeData : any;
  userData = {"username":"", "password":""};
  userlocalData : any; 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AuthServiceProvider,
    public alertController: AlertController,
    public events: Events,
    public network: Network,
    public loadingCtrl: LoadingController,
    public conn: ConnectivityService
    ) 
    {
    if(localStorage.getItem('userkeepData')){
      this.events.publish('resume');
      this.navCtrl.setRoot(HomePage);
    }
    }
        
    login() {
      let authen;
      if(this.userData.username && this.userData.password)
      {
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();
        this.auth.checklogin(this.userData).then((result) =>{
        this.resposeData = result;
        console.log(this.resposeData);
        for(let data of this.resposeData ) {
          authen = data.message; 
        }
        //console.log(authen);
          if(authen == "success"){
              localStorage.setItem('userkeepData', JSON.stringify(this.resposeData));
              this.events.publish('userloggedin');
              loading.dismiss();
              this.navCtrl.setRoot(HomePage);
               }
                else{
                  loading.dismiss();
                   this.show();
                   }
           }, (err) => {
                loading.dismiss();
                 // console.log(err);
                  this.alertmsg();
                });
                }
      else {
                 this.insertvalue();
                //this.presentToast("Give username and password");
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  async show() {
    const alert = await this.alertController.create({
     title: 'แจ้งเตือน!',
      message: 'รหัสผู้ใช้หรือรหัสผ่านไม่ถูกต้อง?',
      buttons: [
         {
          text: 'ตกลง',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  async insertvalue() {
    const alert = await this.alertController.create({
      title: 'แจ้งเตือน!',
      message: 'โปรดใส่ชื่อผู้ใช้และรหัสผ่าน?',
      buttons: [
         {
          text: 'ตกลง',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  async alertmsg() {
    const alert = await this.alertController.create({
      title: 'แจ้งเตือน!',
      message: 'ระบบมีข้อผิดพลาด...ไม่ได้ต่ออินเตอร์เน็ต หรือระบบ server ไม่ทำงาน',
      buttons: [
         {
          text: 'ตกลง',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

}
