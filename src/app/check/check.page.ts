import { LoadingService } from './../services/loading.service';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor(private auth :AuthService,
              private router:Router,
              private loading:LoadingService,
              ) { 
  }

  ngOnInit() {
    
    this.loading.present("");
    this.auth.checkLogin(
      next=>{
        this.router.navigateByUrl("/client/home");
        this.loading.dismiss();
      },
      error=>{
        this.router.navigateByUrl("/home");
        this.loading.dismiss();
      })
  }

}
