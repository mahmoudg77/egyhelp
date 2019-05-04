// import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(): void {
      // this.statusBar.styleDefault();
      // this.statusBar.isVisible=true;

      localStorage.clear();
  }
  constructor(
      // private statusBar: StatusBar
  ){

  }

}
