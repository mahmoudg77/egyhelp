import { apiError } from './../../services/dal/api-result';
import { Platform } from '@ionic/angular';
import { LookupsService } from './../../services/bll/lookups.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/bll/orders.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-devices',
  templateUrl: './my-devices.component.html',
  styleUrls: ['./my-devices.component.scss'],
})
export class MyDevicesComponent implements OnInit {
  devices: any[];
  env=environment
  constructor(private  lookups:LookupsService,
    private router:Router,
    private auth:AuthService,
    private platform:Platform) { }

  ngOnInit() {
    this.lookups.getMyDevices(
      next=>{
          this.devices=next;
      },
      (error:apiError)=>{

      })
    
  }

  parsDeviceID(ID:string){
    const ids=ID.split("-");

    return {
      'DeviceTypeID': ids[0],
      'MarkID':ids[1],
      'DeviceCode':ids[2]
    }
}

selectMyDevice(ID:string){
  const selected=this.parsDeviceID(ID);
  if(this.auth.getUser()==null) {
    this.router.navigateByUrl("/client/edit-profile");
    return;
  }
  this.router.navigateByUrl("/client/new-order?device="+ selected.DeviceTypeID+"&mark="+selected.MarkID+"&code="+selected.DeviceCode);

}


}
