import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController} from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { MainPage } from '../main/main';

import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the LetseatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-letseat',
  templateUrl: 'letseat.html',
})
export class LetseatPage {

  selected:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public viewCtrl: ViewController,public modalCtrl: ModalController,
  public vibration : Vibration,
      public nativeAudio: NativeAudio

  ) {
  

    
   this.nativeAudio.preloadSimple('correct1', 'assets/audio/correct.mp3');
   nativeAudio.preloadComplex('buttonID1', 'assets/audio/button.mp3', 1, 1, 0);
  this.nativeAudio.preloadSimple('incorrect', 'assets/audio/incorrect.mp3');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LetseatPage');
  }


  imgs = ["A", "B"];

  presentConfirmSet(set) {
  let alert = this.alertCtrl.create({
    title: 'Confirm Set ' + set,
    message: 'Do you want feed this to thomas?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.nativeAudio.play('buttonID1');
        }
      },
      {
        text: 'Feed him!',
        handler: () => {
          console.log('feed him clicked');
          this.prompt(set);
          this.nativeAudio.play('buttonID1');
        }
      }
    ]
  });
  alert.present();
this.nativeAudio.play('buttonID1');

}
  prompt(set){
    if (set == "A"){
      this.setA();

    }
    else{
      this.setB();
    }
  }

  setA() {
  let alert = this.alertCtrl.create({
    title: 'Oh No!',
    subTitle: "It's an unhealthy choice option!<br><br>Calories Gained: 1000 kcal <br><br><b>Energy + 2</b>" ,
    buttons: [  
      {
        text: 'Show Nutrition in Meals',
        cssClass:'center',
        handler: () => {
          console.log('details clicked'),
          this.details();
        }
      }
    ]
  });
  alert.present();
 this.nativeAudio.play('incorrect');
            this.vibration.vibrate(500);
           

}
  setB() {
  let alert = this.alertCtrl.create({
    title: 'Good Choice!',
    subTitle: 'You have chosen an healthy option!<br><br>Calories Gained: 600 kcal <br><br><b>Energy + 1</b>',
    buttons: [
      {
       text: 'Show Nutrition in Meals',
       cssClass:'center',
        handler: () => {
          console.log('details clicked'),
          this.details();
        }
      }

    ]

  });
  alert.present();
  this.nativeAudio.play('correct1');
          
}

details() {
  this.nativeAudio.play('buttonID1');
   let helpModal = this.modalCtrl.create(DetailsPage, { userId: 8675309 });
   helpModal.present();

  }

  dismiss() {
    this.viewCtrl.dismiss();
    this.nativeAudio.play('buttonID1');
    this.nativeAudio.loop('uniqueId2');
   this.nativeAudio.stop('foodback');
  }

  main(){
  this.nativeAudio.play('buttonID1');
    this.navCtrl.push(MainPage);
        this.nativeAudio.loop('uniqueId2');
   this.nativeAudio.stop('foodback');
  }
  itemSelected(img){
    this.selected=img;
    console.log(this.selected);
  }
}
