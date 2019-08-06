import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OrderSkeletonCardComponent } from './order-skeleton-card.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    OrderSkeletonCardComponent

  ],
  exports:[
    OrderSkeletonCardComponent
  ]
})
export class OrderSkeletonCardComponentModule {}
