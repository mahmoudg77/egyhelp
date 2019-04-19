import { Router, ActivatedRoute } from '@angular/router';
import { LookupsService } from './../../services/bll/lookups.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';

@Component({
  selector: 'app-order-close',
  templateUrl: './order-close.page.html',
  styleUrls: ['./order-close.page.scss'],
})
export class OrderClosePage implements OnInit {
  follows: any;
  states: any;
  data: any={};

  constructor(private order:OrdersService,private lookup:LookupsService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit() {
    this.lookup.getFollowStates(
        next=>{
          this.follows=next;
        }
      )
      this.lookup.getOrderStates(
        next=>{
          this.states=next;
        }
      )
        this.router.queryParams.subscribe(params=>{
          this.data.Order_No=+params['order_no'];
          this.data.Comp_No=+params['comp_no'];
          this.data.Comp_ID=+params['comp_id'];
        })
      
  }
  onSubmit(){
    this.order.getCloseOrder(this.data,
      next=>{
        this.route.navigateByUrl("/user/success");
      },
      error=>{

      })
  }


}
