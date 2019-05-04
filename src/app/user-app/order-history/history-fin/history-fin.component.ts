import { LoadingService } from './../../../services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';

@Component({
  selector: 'app-history-fin',
  templateUrl: './history-fin.component.html',
  styleUrls: ['./history-fin.component.scss'],
})
export class HistoryFinComponent implements OnInit {
  dats: any[];
  complaints: any[];

  constructor(private order:OrdersService,
              private route:ActivatedRoute,
              private loading:LoadingService,
              private router:Router  ) { }

  ngOnInit() {
    this.loading.present();
   // console.log(this.route.params);
      this.route.parent.params.subscribe(params=>{
        console.log("Params",params.keys);
        this.order.getOrderFinance(+params['id'],
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
       if(this.complaints.filter(i=>i.COMPLAINT_NO==itm.COMPLAINT_NO).length==0) this.complaints.push({COMPLAINT_NO:itm.COMPLAINT_NO,COMPLAINT_DATE:itm.COMPLAINT_DATE});
      }
    );

    // console.log(this.complaints);
  }
}
