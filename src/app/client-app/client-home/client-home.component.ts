import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { ToastController } from '@ionic/angular';

@Component({
    selector: './client-home',
    templateUrl: './client-home.component.html',
    styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {
    idToken: any;
    myOrders:any[];
    ngOnInit(): void {
        this.statusBar.styleDefault();
        // this.route.queryParams.subscribe(params=>{
        //     this.idToken=params['idToken'];
        // })
        this.getMyOrders();

    }
    constructor(
        private statusBar: StatusBar,
        private route:ActivatedRoute,
        private Orders:OrdersService,
        private toast:ToastController,
        private loader:LoadingService,
    ){

    }

    getMyOrders(){
        //this.loader.present("")
        this.Orders.getMyOrders(next=>{
            this.myOrders=next;
            //this.loader.dismiss();
        },
        error=>{
            this.toast.create({message:error,duration:3});
            //this.loader.dismiss();
        })
    }
    addnew(){
        this.toast.create({message:"Add new Order"});
    }
}
