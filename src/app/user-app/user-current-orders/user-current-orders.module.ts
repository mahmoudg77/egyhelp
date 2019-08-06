import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserCurrentOrdersPage } from './user-current-orders.page';

const routes: Routes = [
  {
    path: '',
    component: UserCurrentOrdersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserCurrentOrdersPage]
})
export class UserCurrentOrdersPageModule {}
