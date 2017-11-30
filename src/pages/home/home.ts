import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  constructor(public navCtrl: NavController,  public nativeAudio: NativeAudio) {
  	nativeAudio.preloadComplex('uniqueId2', 'assets/audio/GB1.mp3', 1, 1, 0);
	 

  }

ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  nextPage(){

  	this.navCtrl.push(MainPage);

	 this.nativeAudio.loop('uniqueId2');

  }

  


}
