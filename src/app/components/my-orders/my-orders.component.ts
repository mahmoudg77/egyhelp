import { LoadingService } from './../../services/loading.service';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-com-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {

  myOrders:any[];
  ngOnInit(): void {
      // this.route.queryParams.subscribe(params=>{
      //     this.idToken=params['idToken'];
      // })
      this.getMyOrders();

  }
  constructor(
      private route:ActivatedRoute,
      private Orders:OrdersService,
      private toast:ToastController,
      private loader:LoadingService,
  ){

  }

  getMyOrders(event=null){
      //this.loader.present("")
      this.Orders.getMyOrders(next=>{
          this.myOrders=next;
          if(event)event.target.complete();
      },
      error=>{
          this.toast.create({message:error.message,duration:3});
          if(event)event.target.complete();
      })
  }
  addnew(){
      this.toast.create({message:"Add new Order"});
  }
}
