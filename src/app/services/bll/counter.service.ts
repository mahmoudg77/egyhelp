import { Injectable } from '@angular/core';
import { CallapiService } from '../dal/callapi.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private api:CallapiService) { }

  getClientCounters(next:any=null,error:any=null){
    this.api.getRequest("/Counter/Client","",data=>{if(next)next(data);},err=>{if(error)error(err);});
  }

}
