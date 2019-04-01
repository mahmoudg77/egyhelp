import { Platform } from '@ionic/angular';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: './client-app',
    templateUrl: './client-app.component.html',
    styleUrls: ['./client-app.component.scss']
})
export class ClientAppComponent implements OnInit {
    public appPages = [
        {
          title: 'الرئيسيــــة',
          url: '/client/home',
          icon: 'home',
          onClick:url=>{this.openPage(url)}
        },
        {
          title: 'اوردراتــــي',
          url: '/client/my-orders',
          icon: 'filing',
          onClick:url=>{this.openPage(url)}
        },
        {
          title: 'فواتيــــري',
          url: '/client/invoices',
          icon: 'card',
          onClick:url=>{this.openPage(url)}
        },
        {
          title: 'الموقع الإلكتروني',
          url: 'http://eldawlia-egy.blogspot.com/',
          icon: 'planet',
          onClick:url=>{this.openWebSite(url)}
        },
        {
          title: 'تعليمــــات',
          url: 'http://eldawlia-egy.blogspot.com/2012/07/blog-post_8801.html',
          icon: 'help-circle',
          onClick:url=>{this.openWebSite(url)}
        }
      ];

    ngOnInit(): void {
        this.statusBar.styleDefault();
        this.statusBar.isVisible=true;

        // let status bar overlay webview
        this.statusBar.styleLightContent();

          // set status bar to white
        this.statusBar.backgroundColorByName("primary");

    }
    constructor(
        private statusBar: StatusBar,
        private auth:AuthService,
        private router:Router,
        private inappbrowser:InAppBrowser,
        private platform:Platform
    ){

    }
    logout(){
      this.auth.logout(next=>{
        this.router.navigateByUrl("/home");
      })

    }
    openWebSite(url:string){
      if(this.platform.is("android")||this.platform.is("ios")){
        this.inappbrowser.create(url,"_self").show();
      }else{
        window.open(url,"_self");
      }
    }
    openPage(url:string){
      this.router.navigateByUrl(url);
    }
}
