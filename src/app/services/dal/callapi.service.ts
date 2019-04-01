
import { Router } from '@angular/router';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { apiResult, apiError } from './api-result';
import { Guid } from 'guid-typescript';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared.service';

@Injectable()
export class CallapiService {

  constructor(
    public http:HttpClient,
    private shared:SharedService,
    private route:Router) { 
     
  }
  getToken() {
    let token= localStorage.getItem(environment.tokenKey) || null;
    if(token==null) return null;
    return Guid.isGuid(token)?token:null;
 }
  
  getRequest(url:string,pars:any,success_callbak:any,error_callback:any=null){
     let parms=stringify(pars);
    let headers:HttpHeaders= new HttpHeaders({"APP_KEY":environment.apiKey});
    
     headers= new HttpHeaders({"APP_KEY":environment.apiKey,"AUTH_KEY":this.getToken()});
    //console.log(url,headers);
    
   this.http.get(environment.apiUrl +  url +(parms?"?":"")+parms,{headers})
                      .pipe(map((result:apiResult)=>{return result}))
                      .subscribe(
                            next=>{
                            if (next.isSuccess) {
                                success_callbak(next.data);              
                            } else {
                              if(error_callback!=undefined)  error_callback(next.message);
                            }
                            },
                            error=>{
                              if(error_callback!=undefined)  error_callback(error.statusText);
                              this.errorHandling(error);
                            }
                          );
  }

    postRequest(url:string,pars:any,success_callbak:any=null,error_callback:any=null){
    //var token= this.shared.getToken()||'';

    let headers:HttpHeaders= new HttpHeaders({"APP_KEY":environment.apiKey});
    
    //console.log(headers);
    if(this.getToken()!=null && this.getToken()!=undefined) headers= new HttpHeaders({"APP_KEY":environment.apiKey,"AUTH_KEY":this.getToken()});
    //console.log(url,headers);
    //console.log(url);

      this.http.post(environment.apiUrl + url ,pars,{headers}).pipe(map((result:apiResult)=>{return result}))
              .subscribe(
                next=>{
                    if (next.isSuccess) {
                      if(success_callbak!=null)success_callbak(next.data);              
                    } else {
                      if(error_callback!=null) error_callback({code:next.code,message:next.message});
                    }
                },
                error=>{
                  if(error_callback!=null)  error_callback({code:error.status,message:error.statusText});
                  //this.errorHandling(error)
                }
              ) 
    }

    errorHandling(error:any){
      if(error.status==403){
        this.route.navigate(['home']);
      }else if(error.status==401){
        this.shared.error("You are not allowed to perform this action");
      }else if(error.status==500){
        //this.shared.error("There are problem in the server !!");
      }else if(error.status==502){
        //this.shared.error("Bad Gateway error !!");
      }else if(error.status==406){
        this.shared.error("This option is disbaled now !!");
      }else{
        //this.shared.error(error.message);
      }
    }

     
    
    
}


