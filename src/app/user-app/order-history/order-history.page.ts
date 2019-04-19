import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  dats: any[];
  complaints: any[];

  constructor(private order:OrdersService,
              private route:ActivatedRoute,
              private loading:LoadingService,
              private router:Router  ) { }

  ngOnInit() {
    this.loading.present();
    this.route.params.subscribe(params=>{

      this.order.getOrderHistory(+params['id'],
      next=>{
          this.dats=next;
          this.getComplaints();
          this.loading.dismiss()
        },
        error=>{
          this.loading.dismiss()
          
      })
    })
  }
  orderFilter(ord){
    return this.dats.filter(itm=>itm.COMPLAINT_NO==ord.COMPLAINT_NO)
  }
  getComplaints(){
    this.complaints=[];
    this.dats.forEach(itm=>{
       if(this.complaints.filter(i=>i.COMPLAINT_NO==itm.COMPLAINT_NO).length==0) this.complaints.push({COMPLAINT_NO:itm.COMPLAINT_NO,COMPLAINT_DATE:itm.COMPLAINT_DATE});
      }
    );

    // console.log(this.complaints);
  }

  onAddReport(){
    const params={
      comp_no:this.dats[0].COMPLAINT_NO,
      order_no:this.dats[0].ORDER_NO,
      comp_id:this.dats[0].IDD}

    this.router.navigate(['/','user','orders','close'],{
      queryParams: params,
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: true
      // do not trigger navigation
    });

  }
}
