import { ClientLoginModule } from './../components/client-login/client-login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { UserLoginModule } from './../components/user-login/user-login.module';



@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ClientLoginModule,
      UserLoginModule
    ],
    declarations: [
        LoginPage,
    ]
  })
  export class LoginPageModule {}

  