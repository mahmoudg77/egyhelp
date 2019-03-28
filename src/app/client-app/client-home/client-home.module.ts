import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ClientHomeComponent } from './../client-home/client-home.component';
// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// This Module's Components
 
@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule,
        IonicModule.forRoot(),

        
    ],
    declarations: [
        ClientHomeComponent,
    ],
    exports: [
        ClientHomeComponent,
    ]
})
export class ClientHomeModule {

}
