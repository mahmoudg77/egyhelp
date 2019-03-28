import { AuthService } from './../services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Platform, ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'page-client-login',
  templateUrl: './login-client.page.html',
  styleUrls: ['./login-client.page.scss'],
})
export class LoginClientPage implements OnInit {
  loginForm:FormGroup;
  step: number=0;
  verifyForm: FormGroup;
  verificationId: any;
  err: any;
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  constructor(
    private platform: Platform,
    private loadingService:LoadingService,
    public toastController: ToastController,
    private router:Router,
    private shared:SharedService,
    private formBuilder:FormBuilder,
    private statusBar:StatusBar,
    private auth:AuthService,
    ) { 
    this.loginForm=this.formBuilder.group({
      phone:['',Validators.required],
    });
    this.verifyForm=this.formBuilder.group({
      verifyCode:['',Validators.required],
    });
    
  }

  ngOnInit() {
    this.platform.ready().then(next=>{
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
        size:"invisible",
        
      }); 
      this.recaptchaVerifier.render();
    });
    this.statusBar.styleDefault()
    this.statusBar.isVisible=true;
  }

  onSubmit(){
    if (this.platform.is('cordova')) {
      this.loadingService.present("جاري التحقق من البيانات ...");
      firebase.auth().signInWithPhoneNumber("+20"+this.loginForm.get("phone").value,this.recaptchaVerifier).then(credential=>{
        this.verificationId = credential.verificationId;
        
         firebase.auth().onAuthStateChanged(next=>{
                if(next==null) {
                   this.loadingService.dismiss();
                  this.step=1;
                  this.toastController.create({message:"null firebase auth",duration:2})
                  return;
                }
                next.getIdToken().then(token=>{
                  var idToken=token;
                  this.auth.clientLogin(idToken,
                    next=>{
                      this.router.navigateByUrl("/client/home");
                      if(this.loadingService.isLoading)  
                      this.loadingService.dismiss();
                    },
                    error=>{
                    })
                },error=>{
                });
         
         },error=>{

        },()=>{

         })
      }).catch(error=>{
        this.toastController.create({message:error,duration:2})
      });
    }
   
    
    
  }

  onVerify(){
    if (this.platform.is('cordova')) {
      if(!this.loadingService.isLoading)this.loadingService.present("جاري التحقق من البيانات ...");
      const code:string=<string>this.verifyForm.get("verifyCode").value;
      let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, `${code}`);

      firebase.auth().signInWithCredential(signInCredential).then((info) => {
        
      }, 
      (error) => {

      }
      );

    } 


  }

 
   
    
    
   

}
