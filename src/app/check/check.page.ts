import { LoadingService } from './../services/loading.service';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiError } from '../services/dal/api-result';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  error:string;
  constructor(private auth :AuthService,
              private router:Router,
              private loading:LoadingService,
              ) { 
  }

  ngOnInit(event=null) {
    this.error="";
    this.loading.present("");
    this.auth.checkLogin(
      next=>{
        this.router.navigateByUrl("/client/home");
        this.loading.dismiss();
        if(event) event.target.complete();
      },
      (error:apiError)=>{
        this.loading.dismiss();
        if(event) event.target.complete();
        if(error.code==0){
          this.error="لا يوجد انترنت";
          return;
        }else if(error.code>1000 && error.code<2000){
          this.error=error.message;
          return;
        }
        this.router.navigateByUrl("/home");
      })
      
  }

}
