import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  dats: any[];

  constructor(private order:OrdersService,
              private route:ActivatedRoute,
              private loading:LoadingService ) { }

  ngOnInit() {
    this.loading.present();
    this.route.params.subscribe(params=>{

      this.order.getOrderDetails(+params['id'],
      next=>{
          this.dats=next;
          this.loading.dismiss()
        },
        error=>{
          this.loading.dismiss()
          
      })
    })
  }

}
