
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
  //closed:boolean=false;
  last_complaint: any=null;
  ORDER_NO: number;
  tosure: number=0;
  comp_no: number;
  constructor(private order:OrdersService,
              private route:ActivatedRoute,
              private loading:LoadingService,
              private router:Router  ) { }

  ngOnInit() {
      this.loading.present();
      // console.log(this.route.params);
      this.ORDER_NO=+this.route.snapshot.parent.paramMap.get('id');
      this.tosure=+this.route.snapshot.parent.queryParamMap.get('tosure');
      this.comp_no=+this.route.snapshot.parent.queryParamMap.get('comp_no');

        //console.log("Params",params.keys);
        this.order.getOrderHistory(this.ORDER_NO,
        next=>{
            this.dats=next;
            this.getComplaints();
            this.loading.dismiss()
          },
          error=>{
            this.loading.dismiss()
            
        })
      
 
  }
  orderFilter(ord){
    return this.dats.filter(itm=>itm.COMPLAINT_NO==ord.COMPLAINT_NO)
  }
  getComplaints(){
    this.complaints=[];
    this.dats.forEach(itm=>{
        if((itm.CLOSE_ACTION=="0" && itm.CLOSE_TECH=="0") || this.tosure>0 )this.last_complaint=itm;
       if(this.complaints.filter(i=>i.COMPLAINT_NO==itm.COMPLAINT_NO).length==0) this.complaints.push({COMPLAINT_NO:itm.COMPLAINT_NO,COMPLAINT_DATE:itm.COMPLAINT_DATE});
      }
    );

    // console.log(this.complaints);
  }

  onAddReport(){

    const params={
      comp_no:this.comp_no,//this.last_complaint.COMPLAINT_NO,
      order_no:this.ORDER_NO,//this.last_complaint.ORDER_NO,
      comp_id:this.last_complaint.IDD}

      if(this.tosure==0)
    this.router.navigate(['/','user','orders','close'],{
      queryParams: params,
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: true
      // do not trigger navigation
    });
    else 
    this.router.navigate(['/','user','orders','sure'],{
      queryParams: params,
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: true
      // do not trigger navigation
    });

  }
}
