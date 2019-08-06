import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-website',
  templateUrl: './website.page.html',
  styleUrls: ['./website.page.scss'],
})
export class WebsitePage implements OnInit {

  constructor(private webview: WebView,private platform:Platform) { }

  ngOnInit() {
  this.platform.ready().then(next=>{
      
      this.webview.convertFileSrc("https://google.com");
      }

    )
  }

}
