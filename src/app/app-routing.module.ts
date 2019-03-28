import { LoginClientPage } from './login-client/login-client.page';
import { HomePage } from './home/home.page';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUserPage } from './login-user/login-user.component';
import { CheckPage } from './check/check.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'check',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomePage
  },
  {
    path: 'check',
    component:CheckPage
  },
  {
    path: 'client',
    loadChildren: './client-app/client-app.module#ClientAppModule'
  },
  { path: 'login-client', component:LoginClientPage },
  { path: 'login-user', component:LoginUserPage },
  { path: 'check', loadChildren: './check/check.module#CheckPageModule' },
  { path: 'new-order', loadChildren: './client-app/new-order/new-order.module#NewOrderPageModule' },
  { path: 'edit-profile', loadChildren: './client-app/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'select-device', loadChildren: './client-app/select-device/select-device.module#SelectDevicePageModule' },

  // {
  //   path: 'list',
  //   loadChildren: './list/list.module#ListPageModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
