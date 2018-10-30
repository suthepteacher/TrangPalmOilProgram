import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
//import { AuthServiceProvider } from '../../../../providers/auth-services/auth-services';
//import { ModalpagereportPage } from '../netreport/modal/modalpagereport/modalpagereport'

@IonicPage()
@Component({
  selector: 'page-netreport',
  templateUrl: 'netreport.html',
})
export class NetreportPage {
  resposeData : any;
  dateData = {"startdate":"", "enddate":"","token":""};
  constructor(
    //public navCtrl: NavController, 
    public navParams: NavParams,
    private datePicker: DatePicker,
    private modal: ModalController,
    private alertController: AlertController
    ) {
    const userdata = JSON.parse(localStorage.getItem('userkeepData'));
     for(let data of userdata ) 
     { 
        this.dateData.token = data.token;
     }
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetreportPage');
  }
  openModalreport()
  {
  if(this.dateData.startdate && this.dateData.enddate)
    {
      if(this.dateData.startdate <= this.dateData.enddate)
      {
       const mymoadl =  this.modal.create('ModalpagereportPage',{data: this.dateData});
        mymoadl.present();
    }
    else
    {
        this.showerrordate() ;
    }
  }
    else {
      this.insertvaluedate();
    }

  }
  showstart()
  {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.dateData.startdate = date.toISOString(),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  showend()
  {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.dateData.enddate= date.toISOString(),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  //message
  async showerrordate() {
    const alert = await this.alertController.create({
     title: 'แจ้งเตือน!',
      message: 'โปรดวันเวลาให้ถูกต้อง..!!!',
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

  async insertvaluedate() {
    const alert = await this.alertController.create({
      title: 'แจ้งเตือน!',
      message: 'โปรดใส่วันที่',
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
