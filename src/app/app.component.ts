import { AuthService } from './services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Firebase } from '@ionic-native/firebase/ngx';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth:AuthService,
    private router:Router,
    private fb:Firebase
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.isVisible=true;

     
      
      firebase.initializeApp(environment.firebase);
      this.splashScreen.hide();

      this.fb.onNotificationOpen()
        .subscribe(data =>{
          
          this.router.navigateByUrl(data.route);
        }
      );

      this.fb.onTokenRefresh()
        .subscribe((token: string) => {
          this.auth.saveNewDeviceID(token);
        });
      });

   
   
  }
}
