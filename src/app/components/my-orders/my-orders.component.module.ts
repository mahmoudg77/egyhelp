import { OrderSkeletonCardComponentModule } from 'src/app/components/order-skeleton-card/order-skeleton-card.component.module';
import { MyOrdersComponent } from './my-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OrderCardComponentModule } from '../order-card/order-card.component.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    OrderCardComponentModule,
    OrderSkeletonCardComponentModule
  ],
  declarations: [
    MyOrdersComponent

  ],
  exports:[
    MyOrdersComponent
  ]
})
export class MyOrdersComponentModule {}
