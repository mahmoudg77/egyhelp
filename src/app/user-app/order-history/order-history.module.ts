import { HistoryServeComponent } from './history-serve/history-serve.component';
import { HistoryStockComponent } from './history-stock/history-stock.component';
import { HistoryFinComponent } from './history-fin/history-fin.component';
import { HistoryTecComponent } from './history-tec/history-tec.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { OrderHistoryPage } from './order-history.page';


const routes: Routes = [
  {
    path: 'history',
    children:
    [
      
      {
        path: ':id',
        component:OrderHistoryPage,
        children:[
          {path:'tech',component:HistoryTecComponent},
          {path:'financ',component:HistoryFinComponent},
          {path:'stock',component:HistoryStockComponent},
          {path:'serve',component:HistoryServeComponent},
          {path:'',redirectTo:'tech'},
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderHistoryPage,
  HistoryFinComponent,
HistoryServeComponent,
HistoryStockComponent,
HistoryTecComponent]
})
export class OrderHistoryPageModule {}
