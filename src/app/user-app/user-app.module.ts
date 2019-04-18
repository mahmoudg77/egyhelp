import { UserHomeModule } from './user-home/user-home.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserAppPage } from './user-app.page';

const routes: Routes = [
  {
    path:'user',
    component:UserAppPage,
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component:UserHomeComponent
      },
      // { path: 'my-orders', loadChildren: './my-orders/my-orders.module#MyOrdersPageModule' },
      // { path: 'new-order', loadChildren: './new-order/new-order.module#NewOrderPageModule' },
      // { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
      // { path: 'select-device', loadChildren: './select-device/select-device.module#SelectDevicePageModule' },
      // { path: 'order-success', loadChildren: './order-success/order-success.module#OrderSuccessPageModule' },
      // { path: 'website', loadChildren: './website/website.module#WebsitePageModule' },
      // { path: 'order-details', loadChildren: './order-details/order-details.module#OrderDetailsPageModule' },

      { path: 'stock', loadChildren: './stock/stock.module#StockPageModule' }

    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forChild(routes),
    UserHomeModule,
  ],
  declarations: [
    UserAppPage
  ],
  exports:[
    UserAppPage
  ]
})
export class UserAppPageModule {}
