import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';

import { HelpModalPage } from '../pages/helpmodal/helpmodal';
import { LetseatPage } from '../pages/letseat/letseat';
import { DetailsPage } from '../pages/details/details';
import { StatsPage } from '../pages/stats/stats';
import { ExercisePage } from '../pages/exercise/exercise';
import { RunningPage } from '../pages/running/running';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { Pedometer } from '@ionic-native/pedometer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    HelpModalPage,
    LetseatPage,
    ExercisePage,
    RunningPage,
    DetailsPage,
    StatsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    HelpModalPage,
    LetseatPage,
    ExercisePage,
    RunningPage,
    DetailsPage,
    StatsPage     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    NativeAudio,
    Pedometer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
