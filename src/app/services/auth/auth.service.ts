import { apiError } from './../dal/api-result';
import { CallapiService } from './../dal/callapi.service';
import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";
import { environment } from 'src/environments/environment';
import { Firebase } from '@ionic-native/firebase/ngx';

 
@Injectable()
export class AuthService {
 public isLoggedIn:boolean=false;
 user: any=null;
  constructor( private call:CallapiService,private firebase:Firebase
      ) {
 
  }

  getIfLoggedIn():any{
    return this.isLogin();

  }
  getToken() {
    let token=localStorage.getItem(environment.tokenKey) || null;
    if(token==null) return null;
    return Guid.isGuid(token)?token:null;
  }
  setToken(value: string) {
    localStorage.setItem(environment.tokenKey,value);
  }
  clearToken(){
    localStorage.removeItem(environment.tokenKey);
  }
  isLogin() {
    if (this.getToken()!=null && this.getToken()!=undefined) {
      return true;
    } else {
      return false;
    }
  }
  getUser() {
    return this.user;
  }
  setUser(value: any) {
    this.user = value;
  }
 
  checkLogin(fnNext:any=null,fnError:any=null){

    if(this.getToken()!=null){
      //console.error(this.shared.getToken());
      this.call.postRequest("/User/Current","",
      next=>{
        this.setUser(next.account);
        //this.setToken(next.token);
        if(fnNext) fnNext(next);
      },
      (error:apiError)=>{
        //this.setToken(null);
       
        if(fnError) fnError(error);
      }
    )
    }else{
      if(fnError) fnError("No Token");
    }
  }

  clientLogin(token:string,fnNext:any=null,fnError:any=null){
      this.firebase.getToken().then(deviceID=>{
          this.call.postRequest("/User/login",{"firebase_token":token,"device_id":deviceID},
          next=>{
            this.setUser(next.account);
            this.setToken(next.token);
            if(fnNext!=null) fnNext(next);
          },
          error=>{
            this.setToken(null);
            if(fnError!=null) fnError(error);
          }
        )
      })
    
  }
    

    logout(fnNext:any=null,fnError:any=null) {
      this.call.getRequest("/User/Logout","",
              next => { 
                          //this.notifyService.stop();
                          this.setUser(null);
                          this.clearToken();
                          if(fnNext) fnNext(next);
                      },
              error=>
                      {
                        //this.notifyService.stop();
                        // this.setUser(null);
                        // this.clearToken();
                        //this.route.navigate(['/']);
                        if(fnError) fnError(error);
                    }
          );
    }
    saveNewDeviceID(device_id:string,fnNext:any=null,fnError:any=null) {
      this.call.postRequest("/User/SaveNewDeviceID?device_id="+device_id,"",
              next => { 
                          if(fnNext) fnNext(next);
                      },
              error=>
                      {
                        if(fnError) fnError(error);
                    }
          );
    }

    saveMyProfile(profileData:any,fnNext:any=null,fnError:any=null){
      this.call.postRequest("/Client/Create",profileData,
      next => { 
                  if(fnNext) fnNext(next);
              },
      error=>
              {
                if(fnError) fnError(error);
            }
        );
    }
}
