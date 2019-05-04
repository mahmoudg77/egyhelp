import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-current-orders',
  templateUrl: './user-current-orders.page.html',
  styleUrls: ['./user-current-orders.page.scss'],
})
export class UserCurrentOrdersPage implements OnInit {
  data={
    draw : 0,
    recordsTotal:0,
    recordsFiltered:0,
    data:[],
  };
  dataLoader={
    draw:0,
    length :1000,
    start: 0
  }
  title: string;
  constructor(public order:OrdersService,
    private route:Router,
    private loading:LoadingService) { }

  ngOnInit() {
    this.loading.present();
    this.order.getMoreOrders(this.dataLoader, 0,"","",
    next=>{
      this.order.currentOrders=next;
      this.loading.dismiss();
    });
  }
  onSearchClick(){
    this.route.navigateByUrl("/user/order-search")
  }
  openOrderHistory(id:number){
    this.route.navigateByUrl("/user/orders/history/"+id);
  }

}
