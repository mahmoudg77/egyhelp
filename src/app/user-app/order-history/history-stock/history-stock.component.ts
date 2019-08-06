import { LoadingService } from './../../../services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';

@Component({
  selector: 'app-history-stock',
  templateUrl: './history-stock.component.html',
  styleUrls: ['./history-stock.component.scss'],
})
export class HistoryStockComponent implements OnInit {
  dats: any[];
  complaints: any[];
  ORDER_NO:number;
  constructor(private order:OrdersService,
              private route:ActivatedRoute,
              private loading:LoadingService,
              private router:Router  ) { }

  ngOnInit() {
    this.loading.present();
   // console.log(this.route.params);
   this.ORDER_NO=+this.route.snapshot.parent.paramMap.get('id');
        this.order.getOrderStock(this.ORDER_NO,
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
       if(this.complaints.filter(i=>i.COMPLAINT_NO==itm.COMPLAINT_NO).length==0) this.complaints.push({COMPLAINT_NO:itm.COMPLAINT_NO,COMPLAINT_DATE:itm.COMPLAINT_DATE});
      }
    );

    // console.log(this.complaints);
  }
}
