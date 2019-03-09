import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: './client-home',
    templateUrl: './client-home.component.html',
    styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {
    ngOnInit(): void {
        this.statusBar.styleDefault();
    }
    constructor(
        private statusBar: StatusBar
    ){

    }

}
