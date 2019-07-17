import { NgModule } from '@angular/core';
import { KidsComponent } from './kids.component';
import { CommonModule } from '@angular/common';
import { KidsRoutingModule } from './kids-rounting.module';

@NgModule({
    declarations: [
        KidsComponent
    ],
    imports: [
        CommonModule,//for ngIf and etc
        KidsRoutingModule// Step-2
    ]
})

export class KidsModule{}