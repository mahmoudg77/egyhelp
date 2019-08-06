import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  order_no: number;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(q=>{
      this.order_no=+q['order_no'];
    })
  }
  close(){
    this.router.navigateByUrl("/user/orders/new?order_no="+this.order_no);
  }
}
