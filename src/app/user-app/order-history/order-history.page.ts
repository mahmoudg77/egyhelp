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
  ORDER_NO: number;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      //console.log(params);
      this.ORDER_NO=+params['id'];
    });

  }
}
