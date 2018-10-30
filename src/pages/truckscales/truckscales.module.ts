import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TruckscalesPage } from './truckscales';
import { NetreportPage } from './report/netreport/netreport';
import { LantayreportPage } from './report/lantayreport/lantayreport';
import { DatePicker } from '@ionic-native/date-picker';
@NgModule({
  declarations: [
    TruckscalesPage,
    NetreportPage,
    LantayreportPage
  ],
  imports: [
    IonicPageModule.forChild(TruckscalesPage),
  ],
  entryComponents: [
    NetreportPage,
    LantayreportPage
  ],
  providers: [
    DatePicker
  ]
})
export class TruckscalesPageModule { }
