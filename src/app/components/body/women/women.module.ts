import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing module
import { WomenRoutingModule } from './women-routing.module';

import { WomenComponent } from './products/women.component';
import { KurtasComponent } from './products/kurtas/kurtas.component';
import { SareesComponent } from './products/sarees/sarees.component';




@NgModule({
    declarations: [
        WomenComponent,
        KurtasComponent,
        SareesComponent
    ],
    imports: [
        CommonModule,//for ngIf and etc
        WomenRoutingModule
    ],
    exports: [  //should also same as like imports we have to use in the app
        
    ]
})
export class WomenModule {}