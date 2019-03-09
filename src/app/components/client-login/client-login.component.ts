import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { LoadingService } from 'src/app/services/loading.service';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss'],
})
export class ClientLoginComponent implements OnInit {
  loginForm:FormGroup;
  step: number=0;
  verifyForm: FormGroup;
  verificationId: any;
  err: any;
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  constructor(
    private formBuilder:FormBuilder,
    private shared:SharedService,
    public loadingController: LoadingController,
    private loadingService:LoadingService,
    private router:Router,
    private platform: Platform,
    public toastController: ToastController,
    //public firebase: Firebase,
    private firebaseAuthentication: FirebaseAuthentication
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
        size:"invisible"
      }); 
      this.recaptchaVerifier.render();
    });
  }

  onSubmit2(phoneNumber: number) { //Step 2 - Pass the mobile number for verification
    this.loadingService.present('Sending OTP to your mobile number');
    let number =this.loginForm.get("phone").value;
    this.platform.ready().then(next=>{
    (<any>window).FirebasePlugin.verifyPhoneNumber(number, 60, (credential) =>{
    console.log(credential);
    this.loadingService.dismiss();
    this.verificationId = credential.verificationId;
    }, (error) =>{
      //this.eer = error;
      this.loadingService.dismiss();
    });

  });

  }

//  onSubmit1(){
//   // .getToken()
//   .then(token => this.toastController.create({message:`The token is ${token}`})) // save the token server-side and use it to push notifications to this device
//   .catch(error => this.toastController.create({message:'Error getting token'}));

// this.firebase.onNotificationOpen()
//    .subscribe(data => console.log(`User opened a notification ${data}`));

// this.firebase.onTokenRefresh()
//   .subscribe((token: string) => console.log(`Got a new token ${token}`));
//  }

  async onSubmit(){
    if (this.platform.is('cordova')) {
      this.loadingService.present("جاري التحقق من البيانات ...");
      firebase.auth().signInWithPhoneNumber("+20"+this.loginForm.get("phone").value,this.recaptchaVerifier).then(credential=>{

        this.verificationId = credential.verificationId;
         firebase.auth().onAuthStateChanged(next=>{
          this.loadingService.dismiss().then(()=>{
                this.router.navigateByUrl("/client/home");
          });
         // console.log(next);
         },error=>{
          console.log(error);
         },()=>{

         })

      }).finally(async ()=>{
         this.loadingService.dismiss().then(()=>{
         this.step=1;
          //  this.toastController.create({message:"verificationId: " + this.verificationId})
          //  .then((next)=>{
          //   next.present();
          //  });
        });
      }).catch(error=>{
        this.err=error + ":" + "+20"+this.loginForm.get("phone").value;
      });
    } else {
      this.verificationId="AM5PThDjCdKtT7HQOaz63B4wCTi3C-8DFRLgN0naViBF0UMOfw7ag3zMlH7_5XVEVkav-gqbcILzpzZb4EsPtyQwyKa9AMvPxIza8TNeDkBWq3bRUCaoRtGS6kMKlQ0ZKrfB5fG7hhVJ";

      this.step=1;
      const toaster=await this.toastController.create({message:"You must use a real device !",duration:3000});
      toaster.present();
    }
   
    // this.firebase.verifyPhoneNumber(this.loginForm.get("phone").value,10000).then(credential=>{
    //    this.verificationId = credential.verificationId;
    // }).finally(()=>{
    //   this.loadingService.dismiss().then(()=>{
    //     this.step=1;
    //   });
    // })
    
    
  }

  onVerify(){
    if (this.platform.is('cordova')) {
      //this.loadingService.present("جاري التحقق من البيانات ...");
      const code:string=<string>this.verifyForm.get("verifyCode").value;
      console.log(code);
      let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, `${code}`);

      firebase.auth().signInWithCredential(signInCredential).then((info) => { console.log(info);}, (error) => {
        console.log(error);});
        

      // this.firebaseAuthentication.signInWithVerificationId(this.verificationId,code).then(next=>{
      //   console.log(next);
      //   this.loadingService.dismiss().then(()=>{
      //     this.router.navigateByUrl("/client/home");
      //   });
      // }).finally(()=>{
        
      // }).catch(error=>{
      //   console.log(error);
      //   this.err=error;
      // })

      
    }else{
      
    }


  }

  
}
