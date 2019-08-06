import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderSearchPage } from './order-search.page';

const routes: Routes = [
  {
    path: '',
    component: OrderSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderSearchPage],
  providers:[
    AsyncPipe
  ]
})
export class OrderSearchPageModule {}
