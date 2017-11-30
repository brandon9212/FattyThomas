import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-helpmodal',
  templateUrl: 'helpmodal.html'
})
export class HelpModalPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public nativeAudio: NativeAudio
    ) {

  }


  dismiss() {
    this.viewCtrl.dismiss();
    this.nativeAudio.play('buttonID1');
  }

}
