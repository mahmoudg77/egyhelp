import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input("ord") ord:any={};
  env=environment;
  constructor(
    private router:Router 
  ) { }

  ngOnInit() {}

  openOrderDetails(){
    this.router.navigateByUrl("/client/order-details/"+ this.ord.ORDER_NO);
  }
}
