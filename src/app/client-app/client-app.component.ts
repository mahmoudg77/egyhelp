import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
    selector: './client-app',
    templateUrl: './client-app.component.html',
    styleUrls: ['./client-app.component.scss']
})
export class ClientAppComponent implements OnInit {
    public appPages = [
        {
          title: 'الرئيسية',
          url: '/client/home',
          icon: 'home'
        },
        {
          title: 'اوردرات الصيانة',
          url: '/client/orders',
          icon: 'filing'
        },
        {
          title: 'فواتيــــري',
          url: '/client/invoices',
          icon: 'card'
        },
        {
          title: 'الموقع الإلكتروني',
          url: '/client/website',
          icon: 'planet'
        },
        {
          title: 'تعليمات',
          url: '/client/help',
          icon: 'help-circle'
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
        private router:Router
    ){

    }
    logout(){
      this.auth.logout(next=>{
        this.router.navigateByUrl("/home");
      })
    }
}
