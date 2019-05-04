import { LoadingService } from './../../services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.page.html',
  styleUrls: ['./invoice-details.page.scss'],
})
export class InvoiceDetailsPage implements OnInit {
  data: any[];

  constructor(private order:OrdersService,
            private route:ActivatedRoute,
            private loading:LoadingService) { }
  ngOnInit() {
    this.loading.present();
    this.route.queryParams.subscribe(params=>{
      this.order.getInvoicesDetails(+params['order_no'],
        next=>{
          this.data=next;
          this.loading.dismiss()
        },
        error=>{
          this.loading.dismiss
        }

      )
    })
    
  }
}
