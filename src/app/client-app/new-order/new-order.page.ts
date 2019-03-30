import { LookupsService } from './../../services/bll/lookups.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingService } from './../../services/loading.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {
    form:FormGroup
  MyDevices: any[];
  orderData: any;
  DeviceTypes: any;
  Marks: any;
  method: number;
  constructor(private order:OrdersService,
              public auth:AuthService,
              private loader:LoadingService,
              private router:Router,
              private formBuilder:FormBuilder,
              private lookup:LookupsService,
              private route:ActivatedRoute
              ) { 

                if(auth.getUser()==null) {
                  router.navigateByUrl("/edit-profile");
                  return;
                }
              
                this.form=new FormGroup(
                  {
                    DeviceTypeID:new FormControl(null,Validators.required) ,
                    MarkID:new FormControl(null,Validators.required) ,
                    DeviceCode:new FormControl(null,Validators.required) ,
                    ComplaintNote:new FormControl(null,Validators.required) 
                  }
                )

              }

  ngOnInit() {
    // this.loadMyDevices();
    // this.loadDevicetypes();
    // this.loadMarks();
    this.route.queryParams.subscribe(
      params=>{
        this.form.controls['DeviceTypeID'].setValue(+params['device']);
        this.form.controls['MarkID'].setValue(+params['mark']);
        this.form.controls['DeviceCode'].setValue(+params['code']);
      }
    )

  }
  loadMarks(): any {
    this.lookup.getDeviceTypes(next=>{
      this.Marks=next;
    },
    error=>{

    })
  }
  loadDevicetypes(): any {
    this.lookup.getMarks(next=>{
      this.DeviceTypes=next;
   
    },
    error=>{

    })  
  }
  loadMyDevices(): any {
    this.lookup.getMyDevices(
      next=>{
        this.MyDevices=next;
      },
      error=>{

      }
    );
  }

  saveOrder(){
    this.loader.present();
    this.orderData=this.form.getRawValue();
    this.order.saveOrder(this.orderData,
      next=>{
        if(next==true){
          this.router.navigateByUrl("/client/home");
          this.loader.dismiss();
        }
      },
      error=>{
        alert(error);
        this.loader.dismiss();
      })
  }

  cancel(){
    this.router.navigateByUrl("/client/home");
  }
  parsDeviceID(ID:string){
      const ids=ID.split("-");

      this.form.controls['DeviceTypeID'].setValue(ids[0]);
      this.form.controls['MarkID'].setValue(ids[1]);
      this.form.controls['DeviceCode'].setValue(ids[2]);
  }
  selectTab(i:number){
    this.method=i;
    if(i==2){
            this.form.controls['DeviceCode'].setValue(1);
    }
  }
}
