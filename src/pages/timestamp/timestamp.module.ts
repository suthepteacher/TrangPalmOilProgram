import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimestampPage } from './timestamp';

@NgModule({
  declarations: [
    TimestampPage,
  ],
  imports: [
    IonicPageModule.forChild(TimestampPage),
  ],
})
export class TimestampPageModule {}
