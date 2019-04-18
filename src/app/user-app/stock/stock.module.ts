import { ListItemSkeletonComponentModule } from './../../components/list-item-skeleton/list-item-skeleton.component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StockPage } from './stock.page';

const routes: Routes = [
  {
    path: '',
    component: StockPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ListItemSkeletonComponentModule
  ],
  declarations: [StockPage]
})
export class StockPageModule {}
