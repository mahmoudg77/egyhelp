import { OrderHistoryPageModule } from './../order-history/order-history.module';
import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPreOrdersPage } from './user-preorders.page';

const routes: Routes = [
  
  {
    path: '',
    component: UserPreOrdersPage
  }
      // {
      //   path: '',
      //   redirectTo: 'pre',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'new',
      //   component:UserOrdersPage
      // },
      // { path: 'new', loadChildren: './../user-current-orders/user-current-orders.module#UserCurrentOrdersPageModule' },
      // {
      //   path: 'close',
      //   loadChildren: './../preorder-close/preorder-close.module#PreOrderClosePageModule'
      // },
   
   
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    OrderHistoryPageModule
  ],
  declarations: [UserPreOrdersPage],
  providers:[
    AsyncPipe
  ]
})
export class UserPreOrdersPageModule {}
