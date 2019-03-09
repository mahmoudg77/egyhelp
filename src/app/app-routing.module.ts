import { HomePage } from './home/home.page';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';

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
  { path: 'login/:type', component:LoginPage },

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
