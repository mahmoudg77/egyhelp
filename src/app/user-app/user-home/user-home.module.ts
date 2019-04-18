import { MyOrdersComponentModule } from './../../components/my-orders/my-orders.component.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
// Angular Imports 
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home.component';

// This Module's Components
 
@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule,
        IonicModule.forRoot(),
        MyOrdersComponentModule
        
    ],
    declarations: [
        UserHomeComponent,
    ],
    exports: [
        UserHomeComponent,
    ]
})
export class UserHomeModule {

}
