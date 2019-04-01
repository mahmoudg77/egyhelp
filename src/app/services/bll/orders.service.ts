import { CallapiService } from './../dal/callapi.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private api:CallapiService) {

   }

   getMyOrders(next:any=null,error:any=null,){
     this.api.getRequest("/Order/MyOrders","",data=>{if(next)next(data);},err=>{if(error)error(err);});
   }

   saveOrder(order:any,next:any=null,error:any=null){
    this.api.postRequest("/Order/Create",order,data=>{if(next)next(data);},err=>{if(error)error(err);});

   }
 
   getOrderDetails(id:number,next:any=null,error:any=null,){
     this.api.getRequest("/Order/OrderDetails?ID="+id,"",data=>{if(next)next(data);},err=>{if(error)error(err);});
   }
   
}
