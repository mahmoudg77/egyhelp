import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginClientPage } from './login-client.page';



@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule
    ],
    declarations: [
      LoginClientPage,
    ]
  })
  export class LoginClientPageModule {}

  