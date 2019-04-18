import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.page.html',
  styleUrls: ['./user-app.page.scss'],
})
export class UserAppPage implements OnInit {
  public appPages = [
    {
      title: 'الرئيسيــــة',
      url: '/user/home',
      icon: 'home',
      onClick:url=>{this.openPage(url)}
    },
    {
      title: 'اوردرات اليوم',
      url: '/user/new-orders',
      icon: 'filing',
      onClick:url=>{this.openPage(url)}
    },
    {
      title: 'جميع الأوردرات',
      url: '/user/new-orders',
      icon: 'filing',
      onClick:url=>{this.openPage(url)}
    },
    {
      title: 'المخزون',
      url: '/user/stock',
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
    },
    {
      title: 'تسجيل الخروج',
      url: '',
      icon: 'log-out',
      onClick:url=>{this.logout()}
    }
  ];

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

  ngOnInit() {
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
