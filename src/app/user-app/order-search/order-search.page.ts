import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.page.html',
  styleUrls: ['./order-search.page.scss'],
})
export class OrderSearchPage implements OnInit {
  data: any={};

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.route.navigate(['/','user','orders','search'],{
      queryParams: this.data,
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: true
      // do not trigger navigation
    });
  }
}
