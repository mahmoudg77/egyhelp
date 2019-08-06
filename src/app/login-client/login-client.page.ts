import { AuthService } from './../services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging';
import { Platform, ToastController } from '@ionic/angular';

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
    // private statusBar:StatusBar,
    private auth:AuthService,
    private ngzone:NgZone,
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
    try {
      if(this.platform.is("android")){
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
        size:"invisible",
      }); 
      this.recaptchaVerifier.render();
        //alert('rendered');
    }
      } catch (error) {
       alert(error); 
      }  

    });

if(this.platform.is("android")){
  firebase.auth().onAuthStateChanged(next=>{
      if(next==null) {
          this.loadingService.dismiss();
          //this.step=1;
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
            alert("clientLogin"+error);
          })
      },error=>{
        alert("getIdToken"+error);
      });

},error=>{
alert("onAuthStateChanged"+error);
},()=>{

})
}  
// this.statusBar.styleDefault();
    // this.statusBar.isVisible=true;

    // // let status bar overlay webview
    // this.statusBar.styleLightContent();

    //   // set status bar to white
    // this.statusBar.backgroundColorByName("primary");
  //this.FirebaseAuth.
  }

  onSubmit(){
    if(this.platform.is("ios")){
      
      this.auth.sendVerifyCode(this.loginForm.get("phone").value,success=>{
        this.step=1;
      });
     return; 
    }
      this.loadingService.present("جاري التحقق من البيانات ...");
      firebase.auth().signInWithPhoneNumber(this.loginForm.get("phone").value,this.recaptchaVerifier).then(credential=>{
        this.verificationId= credential.verificationId;
        
      }).catch(error=>{

        this.toastController.create({message:error,duration:2})
      });
    
    
    
  }

  onVerify(){
    if(!this.loadingService.isLoading)this.loadingService.present("جاري التحقق من البيانات ...");
    const code:string=<string>this.verifyForm.get("verifyCode").value;
    if(this.platform.is("ios")){
      
      this.auth.clientLoginByPhone(code,this.loginForm.get("phone").value,success=>{
        this.router.navigateByUrl("/client/home");
        if(this.loadingService.isLoading)  
        this.loadingService.dismiss();
      });
     return; 
    }

      let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, `${code}`);

      firebase.auth().signInWithCredential(signInCredential).then((info) => {
        
      }, 
      (error) => {

      }

      );

        

  }

 
   
    
    
   

}
