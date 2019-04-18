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
    ngOnInit(): void {
       this.counter.getClientCounters(
           next=>{
                this.data=next;
           }
       )

       this.slider.startAutoplay() ;
    }

    constructor(private counter:CounterService,private router:Router){

    }

    newOrder(){
        this.router.navigateByUrl("/client/select-device");
    }
}
