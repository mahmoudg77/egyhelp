import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './order-success.page.html',
  styleUrls: ['./order-success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  close(){
    this.router.navigateByUrl("/user/orders/new");
  }
}
