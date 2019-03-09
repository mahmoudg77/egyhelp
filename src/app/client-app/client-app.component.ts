import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: './client-app',
    templateUrl: './client-app.component.html',
    styleUrls: ['./client-app.component.scss']
})
export class ClientAppComponent implements OnInit {
    public appPages = [
        {
          title: 'Home',
          url: '/home',
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
    }
    constructor(
        private statusBar: StatusBar
    ){

    }

}
