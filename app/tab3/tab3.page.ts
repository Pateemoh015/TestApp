import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  public items: any;
  data: Observable<any>;
  constructor(public navtrl: NavController, public http: HttpClient) {
    this.getData();
  }
 getData() {
   const url = 'https://jsonplaceholder.typicode.com/photos';
   this.data = this.http.get(url);
   this.data.subscribe(result => {
     this.items = result;

   });
 }
}
