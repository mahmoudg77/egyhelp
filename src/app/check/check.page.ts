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
        if(this.auth.getType()=="1"){
          this.router.navigateByUrl("/client/home");
        }else if(this.auth.getType()=="2"){
          this.router.navigateByUrl("/user/home");
        }
        
        this.loading.dismiss();
        if(event) event.target.complete();
      },
      (error:apiError)=>{
        this.loading.dismiss();
        if(event) event.target.complete();
        if(error.code==0){
          this.error="لا يوجد انترنت";
          return;
        }
        this.router.navigateByUrl("/home");
      })
      
  }

}
