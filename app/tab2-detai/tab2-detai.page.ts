import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { IonicPage , NavControlle, NavParam } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'app-tab2-detai',
  templateUrl: './tab2-detai.page.html',
  styleUrls: ['./tab2-detai.page.scss'],
})
export class Tab2DetaiPage implements OnInit {
  value:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
   }

  ngOnInit() {
  }
  ionViewDidLoad(){
   console.log('ionViewDidLoad EmiCalPage');
  }

}
