import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderClosePage } from './order-close.page';
import { StockSelectorComponent } from '../stock-selector/stock-selector.component';

const routes: Routes = [
  {
    path: '',
    component: OrderClosePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  
  ],
  declarations: [
    OrderClosePage,
    StockSelectorComponent
  ],
  providers:[
    AsyncPipe
  ]
})
export class OrderClosePageModule {}
