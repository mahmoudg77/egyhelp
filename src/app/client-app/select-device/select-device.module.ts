import { ListItemSkeletonComponentModule } from './../../components/list-item-skeleton/list-item-skeleton.component.module';
import { MyDevicesComponent } from './../../components/my-devices/my-devices.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectDevicePage } from './select-device.page';
import { DevicesComponent } from 'src/app/components/devices/devices.component';
import { GridIconSkeletonComponentModule } from 'src/app/components/grid-icon-skeleton/grid-icon-skeleton.component.module';

const routes: Routes = [
  {
    path: '',
    component: SelectDevicePage,
    children:
      [
        {
          path: '',
          redirectTo: 'devices',
          pathMatch: 'full'
        },
        {
          path: 'devices',
          component:DevicesComponent
        },
        {
          path: 'my-devices',
         component:MyDevicesComponent
        },
      ]
      
  },
  {
    path: 'select-device',
    redirectTo: 'devices',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GridIconSkeletonComponentModule,
    ListItemSkeletonComponentModule
  ],
  declarations: [
    SelectDevicePage,
    DevicesComponent,
    MyDevicesComponent
  ]
})
export class SelectDevicePageModule {}
