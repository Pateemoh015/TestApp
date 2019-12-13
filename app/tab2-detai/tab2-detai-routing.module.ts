import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2DetaiPage } from './tab2-detai.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2DetaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2DetaiPageRoutingModule {}
