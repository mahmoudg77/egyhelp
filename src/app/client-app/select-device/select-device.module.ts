import { MyDevicesComponent } from './../../components/my-devices/my-devices.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectDevicePage } from './select-device.page';
import { DevicesComponent } from 'src/app/components/devices/devices.component';

const routes: Routes = [
  {
    path: '',
    component: SelectDevicePage,
    children:
      [
        {
          path: 'devices',
          component:DevicesComponent
        },
        {
          path: 'my-devices',
         component:MyDevicesComponent
        },
        
        {
          path: '',
          redirectTo: '/select-device/devices',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/select-device/devices',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SelectDevicePage,
    DevicesComponent,
    MyDevicesComponent
  ]
})
export class SelectDevicePageModule {}
