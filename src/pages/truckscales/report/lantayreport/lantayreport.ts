import { Component } from '@angular/core';
import { IonicPage,NavParams, ModalController, AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the LantayreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lantayreport',
  templateUrl: 'lantayreport.html',
})
export class LantayreportPage {
  resposeData : any;
  dateData = {"startdate":"", "enddate":"","token":""};
  constructor(
    public navParams: NavParams,
    private datePicker: DatePicker,
    private modal: ModalController,
    private alertController: AlertController) 
    {
      const userdata = JSON.parse(localStorage.getItem('userkeepData'));
      for(let data of userdata ) 
      { 
         this.dateData.token = data.token;
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LantayreportPage');
  }
  openModalreport()
  {
  if(this.dateData.startdate && this.dateData.enddate)
    {
      if(this.dateData.startdate <= this.dateData.enddate)
      {
       const mymoadl =  this.modal.create('ModalfreshpalmPage',{data: this.dateData});
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
