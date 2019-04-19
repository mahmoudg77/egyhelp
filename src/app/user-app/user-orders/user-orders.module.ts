import { OrderHistoryPageModule } from './../order-history/order-history.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserOrdersPage } from './user-orders.page';

const routes: Routes = [
  
   
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
      },
      {
        path: 'new',
        component:UserOrdersPage
      },
      {
        path: 'all',
        component:UserOrdersPage
      },
      {
        path: 'search',
        component:UserOrdersPage
      },
      {
        path: 'history',
        loadChildren: './../order-history/order-history.module#OrderHistoryPageModule'
      },
      {
        path: 'close',
        loadChildren: './../order-close/order-close.module#OrderClosePageModule'
      },
   
   
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    OrderHistoryPageModule
  ],
  declarations: [UserOrdersPage]
})
export class UserOrdersPageModule {}
