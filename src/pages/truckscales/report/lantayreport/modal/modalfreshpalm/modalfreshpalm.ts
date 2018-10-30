import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController,LoadingController,AlertController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../../../../../providers/auth-services/auth-services';

/**
 * Generated class for the ModalfreshpalmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalfreshpalm',
  templateUrl: 'modalfreshpalm.html',
})
export class ModalfreshpalmPage {
  responseData : any;
  total_sumMoney = 0;
  total_sumWeight = 0;
  dateStart;
  dateEnd;
  queryfinish = false;
  constructor(
    public navParams: NavParams,
    private view: ViewController,
    private auth: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public alertController: AlertController) {
  }

  closemodal()
{
  this.view.dismiss();
}
ionViewWillLoad()
{
}  
ionViewDidLoad() {
  const data =  this.navParams.get('data');
  this.dateStart = data.startdate;
  this.dateEnd = data.enddate;;
  this.getreport(data);
  }
  getreport(data)
  {
    this.queryfinish = false;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.queryfinish = false;
    this.auth.getreportbyfreshpalm(data).then((result) =>{
      this.responseData = result;
      for(let reportvalue of this.responseData ) 
      {
        this.total_sumMoney =this.total_sumMoney + reportvalue.AmountMoney;   
        this.total_sumWeight =this.total_sumWeight + reportvalue.AmountWeight;  
      }
      loading.dismiss();
      loading.onDidDismiss(() => {
      this.queryfinish = true;
      });
         }, (err) => {
                console.log(err);
                loading.dismiss();
                this.alertmsg();
                this.view.dismiss();
              });
  }

  async alertmsg() {
    const alert = await this.alertController.create({
      title: 'แจ้งเตือน!',
      message: 'ระบบมีข้อผิดพลาด...ไม่ได้ต่ออินเตอร์ หรือระบบ server ไม่ทำงาน',
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
