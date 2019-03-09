import { AppComponent } from './../app.component';
import { ClientHomeComponent } from './client-home/client-home.component';
 // Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ClientAppComponent } from './client-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientHomeModule } from './client-home/client-home.module';

const routes: Routes = [
   
    {
      path:'client',
      component:ClientAppComponent,
      children:[
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          component:ClientHomeComponent
        },

      ]
    }
    
    // {
    //   path: 'list',
    //   loadChildren: './../list/list.module#ListPageModule'
    // }
  ];
@NgModule({
    imports: [
        CommonModule, 
        IonicModule.forRoot(),
        RouterModule.forChild(routes),
        ClientHomeModule
    ],
    declarations: [
      ClientAppComponent,
       
    ],
    exports: [
      ClientAppComponent,

    ]
})
export class ClientAppModule {

}
