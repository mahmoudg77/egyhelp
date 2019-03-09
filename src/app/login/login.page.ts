import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'page-client-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  type:number;
  constructor(private router:ActivatedRoute,
              private statusBar:StatusBar) { }

  ngOnInit() {
    this.router.params.subscribe(params=>{
      this.type=+params['type'];
    });
    this.statusBar.styleDefault()
  }

}
