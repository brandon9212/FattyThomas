import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController,AlertController } from 'ionic-angular';
import { HelpModalPage } from '../helpmodal/helpmodal';
import { ExercisePage } from '../exercise/exercise';
import { LetseatPage } from '../letseat/letseat';
import { StatsPage } from '../stats/stats';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  thomas:string= "fatty_background_main";
  health:string = "60healthbar";
  bmistatus: string = "40healthbar";

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams : NavParams, public alertCtrl: AlertController,public viewCtrl: ViewController,public nativeAudio: NativeAudio  ) {
      nativeAudio.preloadComplex('buttonID1', 'assets/audio/button.mp3', 1, 3, 0);
      nativeAudio.preloadComplex('foodback', 'assets/audio/food.mp3', 1, 1, 0);
      if(navParams.get('health') != null){
        this.health = navParams.get('health');
      }

      if(navParams.get('thomas') != null){
      this.thomas = navParams.get('thomas');
      }

      if(navParams.get('bmistatus') != null){
      this.bmistatus = navParams.get('bmistatus');
      }
  }

   help() {
   this.nativeAudio.play('buttonID1');
   let helpModal = this.modalCtrl.create(HelpModalPage, { userId: 8675309 });
   helpModal.present();
  }

  goToExercise(){
  this.nativeAudio.play('buttonID1');
    this.navCtrl.push(ExercisePage);

  }
  goToEat(){
  this.nativeAudio.play('buttonID1');
   this.navCtrl.push(LetseatPage);
   this.nativeAudio.stop('uniqueId2');
   this.nativeAudio.loop('foodback');

  }
  goToStats(){
  this.nativeAudio.play('buttonID1');
   this.navCtrl.push(StatsPage);
  }
  checkStats(){
  this.nativeAudio.play('buttonID1');
   let alert = this.alertCtrl.create({
     title: '<u>Health Description</u><br>',
     subTitle: '<br>Weight(KG)&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45 <br> Height(CM)&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;120 <br> BMI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31.3',
     buttons: [  
       {
         text: 'Dismiss',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');

         }
       }
     ]
   });
   alert.present();

  }
  dismiss() {
    this.viewCtrl.dismiss();
   this.nativeAudio.loop('uniqueId2');
   this.nativeAudio.stop('foodback');
  }  

}

