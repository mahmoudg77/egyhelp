import { map } from 'rxjs/operators';
import { AppSettingsService } from './../../services/bll/app-settings.service';
import { CounterService } from './../../services/bll/counter.service';
import { LoadingService } from './../../services/loading.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { ToastController, IonSlides } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
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
    ngOnInit(event=null): void {
       this.counter.getUserCounters(
           next=>{
                this.data=next;
                this.loadSlider(event)
                //if(event) event.target.complete();
           },
           error=>{
                this.loadSlider(event)
           }
       )
       
    }
    loadSlider(event=null){
        this.settings.getSettings("images_url",'/content/imgs/',
       images_url=>{
            this.settings.getSettings("home_slider",'1.jpg|2.jpg|3.jpg',
            next=>{
                    this.slides=next.split("|").map(i=>images_url + 'slider/'+i);
                    this.slider.startAutoplay() ;
                    if(event) event.target.complete();
            },
            error=>{
                if(event) event.target.complete();
            });
        });
    }
    constructor(public counter:CounterService,private router:Router,private settings:AppSettingsService){

    }


    openCurrentOrders(){
        this.router.navigateByUrl("/user/orders/new")
    }
    openOldOrders(){
        this.router.navigateByUrl("/user/order-search")
    }
    openStock(){
        this.router.navigateByUrl("/user/stock")
    }
    
    
}
