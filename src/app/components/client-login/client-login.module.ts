import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ClientLoginComponent } from './client-login.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule
    ],
    declarations: [
        ClientLoginComponent,
    ],
    exports:[
        ClientLoginComponent,
    ]
  })
  export class ClientLoginModule {}
