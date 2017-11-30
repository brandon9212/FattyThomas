import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { RunningPage } from '../running/running';

import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html'
})
export class ExercisePage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public viewCtrl: ViewController, public nativeAudio: NativeAudio) {

  }


 	goToRunning(){

  			this.navCtrl.push(RunningPage);

 	}

 	
  dismiss() {

    this.viewCtrl.dismiss();
    this.nativeAudio.play('buttonID1');

  }


}
