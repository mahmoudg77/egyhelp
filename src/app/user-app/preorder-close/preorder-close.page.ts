import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from './../../services/loading.service';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { LookupsService } from './../../services/bll/lookups.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { CounterService } from 'src/app/services/bll/counter.service';

@Component({
  selector: 'app-preorder-close',
  templateUrl: './preorder-close.page.html',
  styleUrls: ['./preorder-close.page.scss'],
})
export class PreOrderClosePage implements OnInit {
  follows: any;
  states: any;
  data: any={};
  defaults={
    follow:1,
    status:0
  }
  followActionSheetOptions: any = {
    header: 'المتابعة', 
    subHeader: ''
  };
  caseActionSheetOptions: any = {
    header: 'حالة الأمر',
    subHeader: ''
  };
  ord: any={};
  submited: boolean;
  constructor(private order:OrdersService,
              private lookup:LookupsService,
              private route:Router,
              private router:ActivatedRoute,
              private toaster:ToastController,
              private counter:CounterService,
              private loading:LoadingService,
              private auth:AuthService) {
    this.data.Follow_ID=this.defaults.follow;
    //this.data.OrderCase_ID=this.defaults.status;
    
  }
  
  ngOnInit() {
    this.loading.present();
      this.lookup.getOrderSures(
        next=>{
          //next.splice(0, 0, {ID:0,Name:"*.*"});
          this.states=next;
          this.data.OrderCase_ID=this.defaults.status;
          this.router.queryParams.subscribe(params=>{
            this.data.Order_No=+params['order_no'];
            this.data.Comp_No=+params['comp_no'];
            this.data.Comp_ID=+params['comp_id'];
            this.order.getTechOrderDetails(this.data.Comp_ID,
              next=>{
                this.ord=next;
                this.loading.dismiss();
              })
          }) 
        }
      )
       
       
  }
   onSubmit(){
    this.submited=true;
    this.loading.present("جاري الحفظ ...");
    if(this.data.OrderCase_ID==0){
      this.toaster.create({message:"اختر حالة الطلب",duration:2000}).then(toast=>{toast.present()});
      this.loading.dismiss();
      this.submited=false;
      return ;
    }
     

    if( (this.data.Action_Date||"")==""){
      this.toaster.create({message:"ادخل تاريخ التأكيل ",duration:2000}).then(toast=>{toast.present()})
      this.loading.dismiss();
      this.submited=false;

      return ;
    }

    this.order.addSureStatus(this.data,
      next=>{
      
        this.auth.getUser().then(user=>{
          this.order.getMyPreOrders(
            next=>{
              this.order.preOrders=next;
              this.loading.dismiss();
              this.submited=false;
             
              this.counter.getUserCounters();
              this.route.navigateByUrl("/user/orders/pre");
            },
            error=>{
              this.loading.dismiss();
              this.submited=false;

            }
            );
           
        },
        error=>{
          this.loading.dismiss();
          this.submited=false;

        
        })

        })
  }


}
