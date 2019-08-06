import { CounterService } from './../../services/bll/counter.service';
import { LoadingService } from './../../services/loading.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { ToastController, IonSlides, Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'client-home',
    templateUrl: './client-home.component.html',
    styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {
    data:any={};
    slides:string[]=[
        '/content/imgs/slider/1.jpg',
        '/content/imgs/slider/2.jpg',
        '/content/imgs/slider/3.jpg'
    ];
    slideOpts = {
        effect: 'flip'
      };
    env=environment;

    @ViewChild(IonSlides) slider:IonSlides;
    ngOnInit(): void {
       this.counter.getClientCounters(
           next=>{
                this.data=next;
           }
       )

       this.slider.startAutoplay() ;
       this.platform.backButton.subscribe(()=>{
           if(this.router.url=="/client/home"){
                navigator['app'].exitApp();
            } 
        })
    }

    constructor(private counter:CounterService,private router:Router,private platform:Platform){
        
    }

    newOrder(){
        this.router.navigateByUrl("/client/select-device");
    }
    open(url){
        this.router.navigateByUrl(url);
    }
}
