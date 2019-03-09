import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule
    ],
    declarations: [
        UserLoginComponent,
    ],
    exports:[
      UserLoginComponent,
    ]
  })
  export class UserLoginModule {}
