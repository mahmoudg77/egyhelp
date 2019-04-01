import { LookupsService } from './../../services/bll/lookups.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/services/loading.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiError } from 'src/app/services/dal/api-result';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  form:FormGroup;
  profileData:any;
  Countries: any;
  Cities: any;
  
  constructor(public auth:AuthService,
              private loader:LoadingService,
              private router:Router,
              private formBuilder:FormBuilder,
              private lookup:LookupsService) { 
                this.form=new FormGroup({
                    NAME:new FormControl(null,Validators.required),
                    CUNTRY_ID:new FormControl(null,Validators.required),
                    CITY_ID:new FormControl(null,Validators.required),
                    ADDRESS:new FormControl(null,Validators.required),
                    TEL1:new FormControl(null),
                    MOBIL1:new FormControl(null),

                  })
              }

  ngOnInit() {
    if(this.auth.getUser()==null){
      this.profileData={};
    }
    this.loadCountries();
  
  }
  loadCountries(): any {
    this.lookup.getCountries(
      next=>{
        this.Countries=next;
      }
    )
  }
  loadCities(country_id:number): any {
    this.lookup.getCities(country_id,
      next=>{
        this.Cities=next;
      }
    )
  }


  cancel(){
    this.router.navigateByUrl("/client/home")
  }

  saveProfile(){
    this.profileData=this.form.getRawValue();
    this.auth.saveMyProfile(this.profileData,
      next=>{
        this.auth.setUser(next);
        this.router.navigateByUrl("/new-order");
      },
      (error:apiError)=>{
        alert(error.message);
      })
  }
}
