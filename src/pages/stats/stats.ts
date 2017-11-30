import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController, ViewController} from 'ionic-angular';
import { Chart } from 'chart.js';
import { MainPage } from '../main/main';

import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

    @ViewChild('lineCanvasIPOP') lineCanvasIPOP;
    @ViewChild('lineCanvasComputed') lineCanvasComputed;
    lineChart: any;
    lineCanvasDaily: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public viewCtrl: ViewController, public nativeAudio: NativeAudio ) {
  }


  ionViewDidLoad() {
   	this.lineCanvasIPOP = new Chart(this.lineCanvasIPOP.nativeElement, {

	    type: 'line',
	    data: {
	        labels: ["24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov", "30 Nov"],
	        
	        datasets: [
	            {
	                label: "Calories Input",
	                fill: false,
	                lineTension: 0.1,
	                backgroundColor: "rgba(30,144,255,0.4)",
	                borderColor: "rgba(30,144,255,1)",
	                borderCapStyle: 'butt',
	                borderDash: [],
	                borderDashOffset: 0.0,
	                borderJoinStyle: 'miter',
	                pointBorderColor: "rgba(30,144,255,1)",
	                pointBackgroundColor: "#fff",
	                pointBorderWidth: 1,
	                pointHoverRadius: 5,
	                pointHoverBackgroundColor: "rgba(30,144,255,1)",
	                pointHoverBorderColor: "rgba(30,144,255,1)",
	                pointHoverBorderWidth: 2,
	                pointRadius: 1,
	                pointHitRadius: 10,
	                data: [1000, 1670, 1242, 1023, 1442, 1412, 1800],
	                spanGaps: false,
	            },
	            {
	                label: "Calories Output",
	                fill: false,
	                lineTension: 0.1,
	                backgroundColor: "rgba(255,69,0,0.4)",
	                borderColor: "rgba(255,69,0,2)",
	                borderCapStyle: 'butt',
	                borderDash: [],
	                borderDashOffset: 0.0,
	                borderJoinStyle: 'miter',
	                pointBorderColor: "rgba(255,69,0,1)",
	                pointBackgroundColor: "#fff",
	                pointBorderWidth: 1,
	                pointHoverRadius: 5,
	                pointHoverBackgroundColor: "rgba(255,69,0,1)",
	                pointHoverBorderColor: "rgba(255,69,0,0.8)",
	                pointHoverBorderWidth: 2,
	                pointRadius: 1,
	                pointHitRadius: 10,
	                data: [800, 900, 700, 800, 900, 400, 700],
	                spanGaps: false,	            	
	            }
	        ]
	        
	    }


	});
   	this.lineCanvasComputed = new Chart(this.lineCanvasComputed.nativeElement, {

	    type: 'line',
	    data: {
	        labels: ["24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov", "30 Nov"],
	        
	        datasets: [
	            {
	                label: "Final Calories",
	                fill: false,
	                lineTension: 0.1,
	                backgroundColor: "rgba(30,144,255,0.4)",
	                borderColor: "rgba(30,144,255,1)",
	                borderCapStyle: 'butt',
	                borderDash: [],
	                borderDashOffset: 0.0,
	                borderJoinStyle: 'miter',
	                pointBorderColor: "rgba(30,144,255,1)",
	                pointBackgroundColor: "#fff",
	                pointBorderWidth: 1,
	                pointHoverRadius: 5,
	                pointHoverBackgroundColor: "rgba(30,144,255,1)",
	                pointHoverBorderColor: "rgba(30,144,255,1)",
	                pointHoverBorderWidth: 2,
	                pointRadius: 1,
	                pointHitRadius: 10,
	                data: [10000, 16700, 12420, 10203, 14402, 14012, 18000],
	                spanGaps: false,
	            },
	            {
	                label: "Losing Weight Baseline",
	                fill: false,
	                lineTension: 0.1,
	                backgroundColor: "rgba(154,205,50,0.4)",
	                borderColor: "rgba(154,205,50,2)",
	                borderCapStyle: 'butt',
	                borderDash: [],
	                borderDashOffset: 0.0,
	                borderJoinStyle: 'miter',
	                pointBorderColor: "rgba(154,205,50,1)",
	                pointBackgroundColor: "#fff",
	                pointBorderWidth: 1,
	                pointHoverRadius: 5,
	                pointHoverBackgroundColor: "rgba(154,205,50,1)",
	                pointHoverBorderColor: "rgba(154,205,50,0.8)",
	                pointHoverBorderWidth: 2,
	                pointRadius: 1,
	                pointHitRadius: 10,
	                data: [14000, 14000, 14000, 14000, 14000, 14000, 14000],
	                spanGaps: false,	            	
	            },	            	            
	            {
	                label: "Gaining Weight Baseline",
	                fill: false,
	                lineTension: 0.1,
	                backgroundColor: "rgba(255,99,71,0.4)",
	                borderColor: "rgba(255,99,71,2)",
	                borderCapStyle: 'butt',
	                borderDash: [],
	                borderDashOffset: 0.0,
	                borderJoinStyle: 'miter',
	                pointBorderColor: "rgba(255,99,71,1)",
	                pointBackgroundColor: "#fff",
	                pointBorderWidth: 1,
	                pointHoverRadius: 5,
	                pointHoverBackgroundColor: "rgba(255,99,71,1)",
	                pointHoverBorderColor: "rgba(255,99,71,0.8)",
	                pointHoverBorderWidth: 2,
	                pointRadius: 1,
	                pointHitRadius: 10,
	                data: [16000, 16000, 16000, 16000, 16000, 16000, 16000],
	                spanGaps: false,	            	
	            }
	        ]
	        
	    }


	});
  }
  main(){
    this.navCtrl.push(MainPage);
    this.nativeAudio.play('buttonID1');
  }
  moredetails(){
   let alert = this.alertCtrl.create({
     title: "<h5><u>Total Calories Consumed</u><br></h5>",
     subTitle: '<br>Total Intake(Food): <br> 12600 kcal <br><br> Total Burned(Exercise): <br> 5285 kcal <br><br> Total Burned(Overall) : <br> 17885 kcal',
     buttons: [  
       {
         text: 'Dismiss',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
           this.nativeAudio.play('buttonID1');
         }
       }
     ]
   });
   alert.present();
   this.nativeAudio.play('buttonID1');

  }
 
  dismiss() {
    this.viewCtrl.dismiss();
    this.nativeAudio.play('buttonID1');

  }  

}
