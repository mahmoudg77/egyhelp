import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreOrderClosePage } from './preorder-close.page';

const routes: Routes = [
  {
    path: '',
    component: PreOrderClosePage
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
    PreOrderClosePage
    ],
  providers:[
    AsyncPipe
  ]
})
export class PreOrderClosePageModule {}
