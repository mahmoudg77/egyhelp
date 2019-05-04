import { LoadingService } from 'src/app/services/loading.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
  data: any[];

  constructor(private order:OrdersService,
              private shared:SharedService,
              private router:Router,
              private loading:LoadingService) { }

  ngOnInit() {
    this.loading.present();
    this.order.getMyInvoices(
      next => {
        this.data=next;
        this.loading.dismiss();
      },
      error=> {this.shared.error(error.message);}
    )
    
  }

  onItemClick(inv){
   
    this.router.navigateByUrl("/client/invoice-details?order_no="+inv.ORDER_NO);
  }

}
