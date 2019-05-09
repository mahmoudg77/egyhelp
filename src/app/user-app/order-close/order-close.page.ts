import { LoadingService } from './../../services/loading.service';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { LookupsService } from './../../services/bll/lookups.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { CounterService } from 'src/app/services/bll/counter.service';

@Component({
  selector: 'app-order-close',
  templateUrl: './order-close.page.html',
  styleUrls: ['./order-close.page.scss'],
})
export class OrderClosePage implements OnInit {
  follows: any;
  states: any;
  data: any={};
  defaults={
    follow:1,
    status:0
  }
  followActionSheetOptions: any = {
    header: 'المتابعة',
    subHeader: ''
  };
  caseActionSheetOptions: any = {
    header: 'حالة الأمر',
    subHeader: ''
  };
  constructor(private order:OrdersService,
              private lookup:LookupsService,
              private route:Router,
              private router:ActivatedRoute,
              private toaster:ToastController,
              private counter:CounterService,
              private loading:LoadingService) {
    this.data.Follow_ID=this.defaults.follow;
    //this.data.OrderCase_ID=this.defaults.status;
    
  }
  
  ngOnInit() {
    this.loading.present();
    this.lookup.getFollowStates(
      next=>{
        this.follows=next;
        this.data.Follow_ID=this.defaults.follow;
        }
      )
      this.lookup.getOrderStates(
        next=>{
          next.splice(0, 0, {ID:0,Name:"*.*"});
          this.states=next;
          this.data.OrderCase_ID=this.defaults.status;
          this.loading.dismiss();
        }
      )
        this.router.queryParams.subscribe(params=>{
          this.data.Order_No=+params['order_no'];
          this.data.Comp_No=+params['comp_no'];
          this.data.Comp_ID=+params['comp_id'];
        })
       

  }
  onSubmit(){
    this.loading.present("جاري الحفظ ...");
    if(this.data.OrderCase_ID==this.defaults.status && this.data.Follow_ID==this.defaults.follow){
      this.toaster.create({message:"اختر حالة الطلب او المتابعة",duration:2});
      this.loading.dismiss();
      return ;
    }
    if(this.data.Customer_Report==""){
      this.toaster.create({message:"ادخل تقرير العميل ",duration:2})
      this.loading.dismiss();
      return ;
    }
    if(this.data.Notes==""){
      this.toaster.create({message:"ادخل تقرير العميل ",duration:2})
      this.loading.dismiss();
      return ;
    }
    this.order.closeOrder(this.data,
      next=>{
        // const orders =this.order.currentOrders.data.filter(a=>a.ORDER_NO==this.data.Order_No);
        // if(orders.length>0){
        //   this.order.currentOrders.data.splice(
        //     this.order.currentOrders.data.indexOf(orders[0]),
        //     1
        //     )
        //   }
        //   this.loading.dismiss();
          
        this.order.getMoreOrders({draw:0,length :1000,start: 0}, 0,"","",
          next=>{
            this.order.currentOrders=next;
            this.loading.dismiss();
          });
          this.counter.getUserCounters();
        this.route.navigateByUrl("/user/success");
      },
      error=>{

      })
  }


}