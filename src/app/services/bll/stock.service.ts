import { CallapiService } from './../dal/callapi.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private api:CallapiService) {

   }

   getMyStock(next:any=null,error:any=null,){
     this.api.getRequest("/Stock","",data=>{if(next)next(data);},err=>{if(error)error(err);});
   }

   
}
