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

   getOrderHistory(id:number,next:any=null,error:any=null,){
     this.api.getRequest("/Order/OrderHistory/"+id,"",data=>{if(next)next(data);},err=>{if(error)error(err);});
   }
   
   getAllOrders(state=null,from="",to="",next:any=null,error:any=null,){
    this.api.getRequest("/order/Tech/MyOrders?state="+state+"&from="+from+"&to="+to,"",data=>{if(next)next(data);},err=>{if(error)error(err);});
  }
   getCloseOrder(request:any,next:any=null,error:any=null,){
    this.api.postRequest("/Order/AddReport",request,data=>{if(next)next(data);},err=>{if(error)error(err);});
  }

  // {
  //   "Order_No": 15979,
  //   "Comp_ID": 27784,
  //   "Comp_No": 1,
  //   "Follow_ID":1,
  //   "OrderCase_ID": 1,
  //   "Notes": "sample string 6",
  //   "Customer_Report": "sample string 7",
  //   "Action_Date": "2019-04-19T17:09:36.5669854+02:00"
  // }

}
