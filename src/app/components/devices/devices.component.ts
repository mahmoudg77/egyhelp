import { LookupsService } from './../../services/bll/lookups.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { environment } from 'src/environments/environment';

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
  DeviceTypes: any[]=[];
  Marks: any[]=[];
  constructor(private router:Router,
    private  lookup:LookupsService) {
    
   }

   ngOnInit() {
    this.loadDevicetypes();
    this.loadMarks();
  }
  loadDevicetypes(){
    this.lookup.getDeviceTypes(next=>{
      this.DeviceTypes=next;
    },
    error=>{

    })
  }
  loadMarks(){
    this.lookup.getMarks(next=>{
      this.Marks=next;
      
    },
    error=>{

    })  
  }
  
  selectDevice(n:number){
    this.selectedDevice=n;
    this.slides.slideNext();
    //this.step=2;
    
  }
  selectMark(n:number){
      this.selectedMark=n;
      this.router.navigateByUrl("/new-order?device="+this.selectedDevice+"&mark="+this.selectedMark+"&code=1");
    }
  }
