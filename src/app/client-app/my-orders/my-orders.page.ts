import { MyOrdersComponent } from './../../components/my-orders/my-orders.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  @ViewChild(MyOrdersComponent,{static: true}) myOrders:MyOrdersComponent
  constructor() { }

  ngOnInit() {

  }
  refresh(event){
    this.myOrders.getMyOrders(event);
  }

}
