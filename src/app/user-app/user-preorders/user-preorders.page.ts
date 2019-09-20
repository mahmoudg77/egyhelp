import { LoadingService } from './../../services/loading.service';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';

@Component({
  selector: 'app-user-perorders',
  templateUrl: './user-preorders.page.html',
  styleUrls: ['./user-preorders.page.scss'],
})
export class UserPreOrdersPage implements OnInit{
   
  data: any[]=[];
  constructor(public order:OrdersService,private router:ActivatedRoute,private route:Router,
    private platform:Platform,
    private loading:LoadingService) { }

  ngOnInit() {
    this.loading.present();
   
        this.router.queryParams.subscribe(params=>{
          // this.title="نتيجة البحث";
          this.order.getMyPreOrders(
            next=>{
              this.data=next;
                // this.title="نتيجة البحث"+ "("+this.data.recordsFiltered+")";
                this.loading.dismiss();
            });
        })
     
  
  }

   
  onSearchClick(){
    this.route.navigateByUrl("/user/order-search")
  }
  openOrderHistory(id:number,comp_no:number){
    this.route.navigateByUrl("/user/orders/history/"+id+"?comp_no="+comp_no+"&tosure=1");
  }

  
   
      
}
