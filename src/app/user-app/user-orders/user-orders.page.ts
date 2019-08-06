import { LoadingService } from './../../services/loading.service';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.page.html',
  styleUrls: ['./user-orders.page.scss'],
})
export class UserOrdersPage implements OnInit{
  data={
    draw : 0,
    recordsTotal:0,
    recordsFiltered:0,
    data:[],
  };
  date_from: string;
  date_to: string;
  title: string;
  dataLoader={
    draw:0,
    length :10,
    start: 0
  }
  status:string;
  searchParams={
    state:0,
    date_from:"",
    date_to:"",
    cst_id:0,
    eng_id:0
  }
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(public order:OrdersService,private router:ActivatedRoute,private route:Router,
    private platform:Platform,
    private loading:LoadingService) { }

  ngOnInit() {
    this.loading.present();
    // this.router.url.subscribe(url=>{
      // if(url[0].path=="new"){
      //   this.searchParams={
      //       state:0,
      //       date_from:"",
      //       date_to:"",
      //   }
      //   this.title="اوردرات اليوم";
      //   this.order.getMoreOrders(this.dataLoader,0,"","",
      //     next=>{
      //       this.data=next;
      //       this.title="اوردرات اليوم"+ "("+this.data.recordsFiltered+")";
      //       this.loading.dismiss();
      //     });
      // }
      // if(url[0].path=="all"){
      //   this.searchParams={
      //     state:null,
      //     date_from:"",
      //     date_to:"",
      //   }
      //   this.title= "جميع الأوردرات"
      //   this.order.getMoreOrders(this.dataLoader,null,"","",
      //     next=>{
      //       this.order.currentOrders=next;
      //         this.title= "جميع الأوردرات" + "("+this.order.currentOrders.recordsFiltered+")";
      //     });
      // }

      // if(url[0].path=="search"){
        this.router.queryParams.subscribe(params=>{
          this.searchParams.state=params['state']||null;
          this.searchParams.date_from=params['date_from']||"";
          this.searchParams.date_to=params['date_to']||"";
          this.searchParams.cst_id=params['cst_id']||0;
          this.searchParams.eng_id=params['eng_id']||0;
          // this.title="نتيجة البحث";
          this.order.getMoreOrders(this.dataLoader,this.searchParams.state,this.searchParams.date_from,this.searchParams.date_to,
            this.searchParams.eng_id,this.searchParams.cst_id,
            next=>{
              this.data=next;
                // this.title="نتيجة البحث"+ "("+this.data.recordsFiltered+")";
                this.loading.dismiss();
            });
        })
      // }
    // });

  //   this.platform.backButton.subscribeWithPriority(0,() => {
  //     // do something here
  //     //history.back()

  // });
  
  }

  // search(){
  //   this.order.getAllOrders(1,this.date_from,this.date_to,
  //   next=>{
  //     this.order.currentOrders=next;
  //   });
  // }
  onSearchClick(){
    this.route.navigateByUrl("/user/order-search")
  }
  openOrderHistory(id:number){
    this.dataLoader.draw=0;
    this.dataLoader.start=0;
    this.route.navigateByUrl("/user/orders/history/"+id);
  }

  loadData(event) {
    this.loading.present();
    this.order.getMoreOrders(this.dataLoader, this.searchParams.state,this.searchParams.date_from,this.searchParams.date_to,
      this.searchParams.eng_id,this.searchParams.cst_id,
      next=>{
        next.data.forEach(itm => {
          this.data.data.push(itm);
        }); 
          event.target.complete();
          if (this.dataLoader.draw*this.dataLoader.length>=this.data.recordsFiltered) {
            event.target.disabled = true;
          }
          this.loading.dismiss();
      });
   
      

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
     
  }


  // onPageWillEnter(){
    
  //   this.router.url.subscribe(url=>{
  //     if(url[0].path=="new"){
  //       this.searchParams={
  //           state:0,
  //           date_from:"",
  //           date_to:"",
  //       }
  //       this.title="اوردرات اليوم";
  //       this.order.getMoreOrders(this.dataLoader,0,"","",
  //         next=>{
  //           this.order.currentOrders=next;
  //           this.title="اوردرات اليوم"+ "("+this.order.currentOrders.recordsFiltered+")";
  //         });
  //     }
  //   });
  // }
}
