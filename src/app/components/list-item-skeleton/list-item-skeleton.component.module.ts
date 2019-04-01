import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ListItemSkeletonComponent } from './list-item-skeleton.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    ListItemSkeletonComponent

  ],
  exports:[
    ListItemSkeletonComponent
    ]
})
export class ListItemSkeletonComponentModule {}
