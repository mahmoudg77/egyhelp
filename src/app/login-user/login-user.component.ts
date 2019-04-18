import { AuthService } from './../services/auth/auth.service';
import { SharedService } from './../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserPage implements OnInit {
  loginForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private shared:SharedService,
    public loadingController: LoadingController,
    private loadingService:LoadingService,
    private router:Router,
    private auth:AuthService
    ) { 
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],

    });
    
  }

  ngOnInit() {}

  onSubmit(){
    this.loadingService.present("جاري التحقق من البيانات..");
    this.auth.userLogin(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value,
    next=>{
      this.loadingService.dismiss();
      this.router.navigateByUrl("/user/home");
    },
    error=>{
      this.loadingService.dismiss();
      this.shared.error(error);
    }
    )

  }

  
}
