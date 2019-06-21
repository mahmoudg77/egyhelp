import { Market } from '@ionic-native/market/ngx';
import { AuthService } from './services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AppSettingsService } from './services/bll/app-settings.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  app_version:string;
  force_update:string;
  version:string;
  id:string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth:AuthService,
    private router:Router,
    private fb:Firebase,
    private settings:AppSettingsService,
    private appVersion:AppVersion,
    private dialogs:AlertController,
    private market:Market
  ) {
    this.initializeApp();
    
    appVersion.getPackageName().then(id=>{
      this.id=id;
    })



    this.settings.getSettings("app_version",'1.0.8',
    next=>{
           this.app_version =next;

           this.settings.getSettings("force_update",'0',
           next=>{
            
                  this.force_update =next;
                  appVersion.getVersionNumber().then((ver:string)=>{
                    this.version=ver;
                    if(this.version!=this.app_version){
                      this.showDialog();
                    }
                  });
           });
       
    });
   
   
  }

 async showDialog(){

  const alert=await  this.dialogs.create({
    header: 'تحديث جديد',
    //subHeader: 'Subtitle',
    message: "برجاء تحديث التطبيق لتجنب ايقافه ",
    buttons: [
      {
        text: 'الغاء',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          if(this.force_update=="1"){
            navigator['app'].exitApp();
          }
        }
      }, {
        text: 'تحديث',
        cssClass: 'prinmary',
        handler: () => {
          this.market.open(this.id);

        }
        
      }
    ]
    
   });
 
   await alert.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      
      firebase.initializeApp(environment.firebase);
      this.splashScreen.hide();
      
      this.fb.onNotificationOpen()
      .subscribe(data =>{
        
        this.router.navigateByUrl(data.route);
      }
      );
      
      this.fb.onTokenRefresh()
      .subscribe((token: string) => {
        if(this.auth.getToken())
        this.auth.saveNewDeviceID(token);
      });
    });
    
    this.statusBar.styleDefault();
    this.statusBar.isVisible=true;

    // let status bar overlay webview
    this.statusBar.styleLightContent();

      // set status bar to white
    //this.statusBar.backgroundColorByName("primary");
   
   
  }
}
