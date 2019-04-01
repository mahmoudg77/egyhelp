import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.page.html',
  styleUrls: ['./order-success.page.scss'],
})
export class OrderSuccessPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  close(){
    this.router.navigateByUrl("/client/home");
  }
}
