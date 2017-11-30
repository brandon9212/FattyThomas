import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Chart } from 'chart.js';

import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
    // @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvasA') doughnutCanvasA;
    @ViewChild('doughnutCanvasB') doughnutCanvasB;
    // @ViewChild('lineCanvas') lineCanvas;
 
    barChart: any;
    doughnutChart: any;
    lineChart: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeAudio: NativeAudio) {

  }
  
  returnMain(){
    this.nativeAudio.play('buttonID1');
  	this.navCtrl.push(MainPage ,  { health: "100healthbar" });
    this.nativeAudio.loop('uniqueId2');
   this.nativeAudio.stop('foodback');

  }


    ionViewDidLoad() {
 
        this.doughnutChart = new Chart(this.doughnutCanvasA.nativeElement, {
 
            type: 'doughnut',
            data: {

                labels: ["Fats", "Carbohyrates", "Protein", "Vitamin", "Sugar", "Dietary fiber"],
                datasets: [{
                    label: "My First dataset",
                    data: [80, 90, 22, 5, 70, 5.9],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }

        });


        this.doughnutChart = new Chart(this.doughnutCanvasB.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Fats", "Carbohyrates", "Protein", "Vitamin", "Sugar", "Dietary fiber"],
                datasets: [{
                    label: '# of Votes',
                    data: [25, 80, 62, 50, 20, 80],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        }); 
 
    }

}
