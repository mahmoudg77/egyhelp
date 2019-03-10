import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginUserPage } from './login-user.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule
    ],
    declarations: [
      LoginUserPage,
      
    ],
   
   
  })
  export class LoginUserModule {}
