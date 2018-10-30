import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController } from 'ionic-angular';
import {User} from '../../pages/createuser/model/user';
import { AuthServiceProvider } from '../../providers/auth-services/auth-services';



@IonicPage()
@Component({
  selector: 'page-createuser',
  templateUrl: 'createuser.html',
})
export class CreateuserPage {
  user = {} as User;
  truckscales: boolean;
  timestamp : boolean;
  money : boolean;
  weight : boolean;
  admin : boolean;
  resposeData : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController : AlertController,
    public loadingCtrl: LoadingController,
    public auth : AuthServiceProvider ) 
  {
    const userdata = JSON.parse(localStorage.getItem('userkeepData'));
     for(let data of userdata ) 
     { 
        this.user.token = data.token;
     }
  }
  ionViewDidLoad() 
  {
    this.user.truckscales= 0;
    this.user.timestamp = 0;
    this.user.money = 0;
    this.user.weight = 0;
    this.user.admin = 0 ;
  }


  updateTruckscale() {
    if (this.truckscales)
    {
      this.user.truckscales = 1;
    }
    else
    {
      this.user.truckscales = 0;
    }
    
  }
  updateTimestamp() {
    if (this.timestamp)
    {
      this.user.timestamp = 1;
    }
    else
    {
      this.user.timestamp = 0;
    }
    
  }
  updateMoney() {
    if (this.money)
    {
      this.user.money = 1;
    }
    else
    {
      this.user.money = 0;
    }
    
  }
  updateWeight() {
    if (this.weight)
    {
      this.user.weight= 1;
    }
    else
    {
      this.user.weight = 0;
    }
   
  }
  updateAdmin() {
    if (this.admin)
    {
      this.user.admin= 1;
    }
    else
    {
      this.user.admin = 0;
    }
    
  }

  register() {
    let insert;
    if(this.user.username && this.user.password)
    {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.auth.register(this.user).then((result) =>{
      this.resposeData = result;
       console.log(result);
      if(this.resposeData.message   == "exist")
      {
        loading.dismiss();
        this.alertexistuser();

      }
      if(this.resposeData.message   == "success")
      {
        loading.dismiss();
        this.alertcomplete();
      }
    }, (err) => {
        loading.dismiss();
        //console.log(err);
        this.alertmsg();
      });

    }
    else
    {
      this.insertvalue();
    }
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

  async alertexistuser() {
    const alert = await this.alertController.create({
      title: 'แจ้งเตือน!',
      message: 'มีผู้ใช้ชื่อนี้อยู่แล้ว โปรดใช้ชื่ออื่น',
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

  async alertcomplete() {
    const alert = await this.alertController.create({
      title: 'แจ้ง',
      message: 'เพิ่มผู้ใช้งานเรียบร้อย ...',
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
