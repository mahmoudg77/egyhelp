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
          title: 'Home',
          url: '/client/home',
          icon: 'home'
        },
        {
          title: 'List',
          url: '/list',
          icon: 'list'
        }
      ];

    ngOnInit(): void {
        this.statusBar.styleDefault();
        this.statusBar.isVisible=true;

        // let status bar overlay webview
        this.statusBar.show();

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
