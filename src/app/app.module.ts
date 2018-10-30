import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
//import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { MyApp } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { LoginPage } from '../pages/login/login';
import { TruckscalesPageModule } from '../pages/truckscales/truckscales.module'
import { TimestampPageModule } from '../pages/timestamp/timestamp.module'
import  {CreateuserPageModule} from '../pages/createuser/createuser.module'
import { AuthServiceProvider } from '../providers/auth-services/auth-services';
import { Network } from '@ionic-native/network';
import { ConnectivityService} from '../providers/ConnectivityService';
import { MoneyPageModule } from '../pages/money/money.module';
import { WeightPageModule } from '../pages/weight/weight.module';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    TruckscalesPageModule,
    TimestampPageModule,
    CreateuserPageModule,
    MoneyPageModule, 
    WeightPageModule, 
    HttpModule, 
    HomeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider, 
    Network ,
    ConnectivityService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
