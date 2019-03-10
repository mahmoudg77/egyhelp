import { LoginClientPage } from './login-client/login-client.page';
import { HomePage } from './home/home.page';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUserPage } from './login-user/login-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomePage
  },
  {
    path: 'client',
    loadChildren: './client-app/client-app.module#ClientAppModule'
  },
  { path: 'login-client', component:LoginClientPage },
  { path: 'login-user', component:LoginUserPage },

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
