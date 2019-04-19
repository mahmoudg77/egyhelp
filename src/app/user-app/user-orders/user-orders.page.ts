import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.page.html',
  styleUrls: ['./user-orders.page.scss'],
})
export class UserOrdersPage implements OnInit {
  data: any[];
  date_from: string;
  date_to: string;
  title: string;

  constructor(private order:OrdersService,private router:ActivatedRoute,private route:Router,
    private platform:Platform) { }

  ngOnInit() {
    this.router.url.subscribe(url=>{
      if(url[0].path=="new"){
        this.order.getAllOrders(0,"","",
          next=>{
              this.data=next;
          });
            this.title="اوردرات اليوم";
      }
      if(url[0].path=="all"){
        this.order.getAllOrders(null,"","",
          next=>{
              this.data=next;
          });
          this.title="جميع الأوردرات";
      }

      if(url[0].path=="search"){
        this.router.queryParams.subscribe(params=>{
          this.order.getAllOrders(params['state']||null,params['date_from']||"",params['date_to']||"",
            next=>{
                this.data=next;
            });
            this.title="نتيجة البحث";
        })
      }
    });

    this.platform.backButton.subscribeWithPriority(0,() => {
      // do something here
      //history.back()

  });
  
  }

  search(){
    this.order.getAllOrders(1,this.date_from,this.date_to,
    next=>{
        this.data=next;
    });
  }
  onSearchClick(){
    this.route.navigateByUrl("/user/order-search")
  }
  openOrderHistory(id:number){
    this.route.navigateByUrl("/user/orders/history/"+id);
  }
}
