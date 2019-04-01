import { apiError } from './../../services/dal/api-result';
import { LookupsService } from './../../services/bll/lookups.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  selectedDevice:number;
  selectedMark: number;
  //step: number=1;
  public env=environment;
  @ViewChild(IonSlides) slides:IonSlides;
  DeviceTypes: any[];
  Marks: any[];
  constructor(private router:Router,
    private  lookup:LookupsService,
    private auth:AuthService,
    private platform:Platform) {
    
   }

   ngOnInit() {
    this.loadDevicetypes();
    this.loadMarks();

    // this.platform.backButton.subscribe(() => {
    //   this.router.navigateByUrl("/client/home")
    // });
  }
  loadDevicetypes(){
    this.lookup.getDeviceTypes(next=>{
      this.DeviceTypes=next;
    },
    (error:apiError)=>{
    })

  }
  loadMarks(){
    this.lookup.getMarks(next=>{
      this.Marks=next;
      
    },
    (error:apiError)=>{
    }) 
  }
  
  selectDevice(n:number){
    this.selectedDevice=n;
    this.slides.slideNext();
    //this.step=2;
    
  }
  selectMark(n:number){
      this.selectedMark=n;
      if(this.auth.getUser()==null) {
        this.router.navigateByUrl("/client/edit-profile");
        return;
      }
      this.router.navigateByUrl("/client/new-order?device="+this.selectedDevice+"&mark="+this.selectedMark+"&code=1");
    }
  }
