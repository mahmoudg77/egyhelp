
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';

@Component({
  selector: 'app-history-tec',
  templateUrl: './history-tec.component.html',
  styleUrls: ['./history-tec.component.scss'],
})

export class HistoryTecComponent implements OnInit {
  dats: any[];
  complaints: any[];
  closed:boolean=false;
  constructor(private order:OrdersService,
              private route:ActivatedRoute,
              private loading:LoadingService,
              private router:Router  ) { }

  ngOnInit() {
      this.loading.present();
      // console.log(this.route.params);
      this.route.parent.params.subscribe(params=>{
        //console.log("Params",params.keys);
        this.order.getOrderHistory(+params['id'],
        next=>{
            this.dats=next;
            this.getComplaints();
            this.loading.dismiss()
          },
          error=>{
            this.loading.dismiss()
            
        })
      });
    
 
  }
  orderFilter(ord){
    return this.dats.filter(itm=>itm.COMPLAINT_NO==ord.COMPLAINT_NO)
  }
  getComplaints(){
    this.complaints=[];
    this.dats.forEach(itm=>{
        if(itm.CLOSE_ACTION=="1" && itm.CLOSE_TECH=="1")this.closed=true;
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
