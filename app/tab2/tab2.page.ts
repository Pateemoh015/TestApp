import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tab2DetaiPage } from '../tab2-detai/tab2-detai.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public items: any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.loadData();
  }

  loadData() {
    let data: Observable<any>;
    data = this.http.get('https://jsonplaceholder.typicode.com/posts');
    data.subscribe(result => {
      this.items = result;
    });
  }

  // itemClick(itemid: number) {
  //   alert(itemid);
  // }

  public test(event , item ){
    this.navCtrl.push(Tab2DetaiPage, {
      item:item
    });
  }


}
