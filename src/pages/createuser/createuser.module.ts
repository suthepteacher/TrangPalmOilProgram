import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateuserPage } from './createuser';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

@NgModule({
  declarations: [
    CreateuserPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateuserPage),
    NgxErrorsModule
  ],
})
export class CreateuserPageModule {}
