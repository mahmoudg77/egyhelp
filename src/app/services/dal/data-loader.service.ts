import { CallapiService } from './callapi.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResult, dataLoaderResult } from './api-result';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  
  constructor(private api:CallapiService) { }

  load(dataLoader:any,url:string,nextFn=null,errorFn=null){
      this.api.postRequest(url,dataLoader,
      next=>{
        if(!nextFn) nextFn(next);
      },
      error=>{
        if(!errorFn) errorFn(error);
      })
  }

}

