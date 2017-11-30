import { Component } from '@angular/core';
import { NavController, Platform, ViewController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { AlertController } from 'ionic-angular';
import { Pedometer } from '@ionic-native/pedometer';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'page-running',
  templateUrl: 'running.html'
})
export class RunningPage {

	steps : number=12;
	img : string = "progress0.jpg";
	img1 : string = "progress20.jpg";
	img2 : string = "progress40.jpg";
	img3 : string = "progress60.jpg";
	img4 : string = "progress60.jpg";
	img5 : string = "progress80.jpg";
	img6 : string = "progress100.jpg";
  constructor( public platform : Platform, public navCtrl: NavController, viewCtrl: ViewController, public alertCtrl: AlertController, public pedometer : Pedometer,
      public vibration : Vibration,
      public nativeAudio: NativeAudio,
      public ref : ChangeDetectorRef


  ) { 


			this.walking();
			this.nativeAudio.preloadSimple('correct1', 'assets/audio/correct.mp3');

  	}

  	update(){
  		this.ref.detectChanges();
  	}

  	walking() {
  		this.nativeAudio.play('buttonID1');
  		this.pedometer.startPedometerUpdates().subscribe((data) => {
    		 this.steps = this.steps-1;

    		 if(this.steps>7 && this.steps < 10){
    		 	this.img = this.img1;
    		 	this.update();
    	
    		 }
    		 if(this.steps>5 && this.steps < 8){
    		 	this.img = this.img2;
    		 	this.update();
    		
    		 }
    		 if(this.steps>3 && this.steps < 6){
    		 	this.img = this.img3;
    		 	this.update();
    	
    		 }
    		 if(this.steps>1 && this.steps < 4){
    		 	this.img = this.img4;
    		 	this.update();
    	
    		 }
    		 if(this.steps>0 && this.steps < 2){
    		 	this.img = this.img5;
    		 	this.update();
    		 }

    		 if( this.steps < 1){
    		 this.img = this.img6;
    		 	this.pedometer.stopPedometerUpdates();
	    		 	
	  				this.nativeAudio.play('correct1');
	  				this.vibration.vibrate(500);
	    		 	let alert = this.alertCtrl.create({
				    title: 'Good Job!!',
				    message: 'You have completed 30 minutes running for today! <br><br> Calories Burned: 350kcal <br><br><b>Energy - 3</b>',
				    buttons: [
				
				      {
				        text: 'Back to Main',
				        handler: () => {
				          console.log('Quit clicked'),
				          this.details();
				          this.nativeAudio.play('buttonID1');
				          this.navCtrl.push(MainPage,  { thomas: "moderate_background_main", bmistatus: "50healthbar" });

				        }
				      }
				    ]
				  });
				  alert.present();
	    		 
    		 	}
    		 	
    		 
 		  });
  	}

    dismiss() {
    
			  let alert = this.alertCtrl.create({
			    title: 'Quit',
			    message: 'Do you really want to quit?',
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
			        text: 'Quit',
			        handler: () => {
			          console.log('Quit clicked'),
			          this.details();
			          this.nativeAudio.play('buttonID1');

			        }
			      }
			    ]
			  });
			  alert.present();
			  this.nativeAudio.play('buttonID1');
			  
}

 details() {
 	this.nativeAudio.play('buttonID1');
    this.navCtrl.push(MainPage,  { health: "50healthbar" });
  }








  

}