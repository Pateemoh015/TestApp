import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2DetaiPageRoutingModule } from './tab2-detai-routing.module';

import { Tab2DetaiPage } from './tab2-detai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2DetaiPageRoutingModule
  ],
  declarations: [Tab2DetaiPage]
})
export class Tab2DetaiPageModule {}
