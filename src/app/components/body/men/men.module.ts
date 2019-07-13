import { NgModule } from '@angular/core'

import { SportsComponent } from './products/sports/sports.component'
import { FormalComponent } from './products/formal/formal.component'
import { SandalsComponent } from './products/sandals/sandals.component'
import { FlipComponent } from './products/flip/flip.component'
import { LoafersComponent } from './products/loafers/loafers.component'
import { BootsComponent } from './products/boots/boots.component'
import { RunningComponent } from './products/running/running.component'
import { SneakersComponent } from './products/sneakers/sneakers.component'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../utils/product/product.component';

@NgModule({
    declarations: [
        SportsComponent,
        FormalComponent,
        SandalsComponent,
        FlipComponent,
        LoafersComponent,
        BootsComponent,
        RunningComponent,
        SneakersComponent,
        ProductComponent
    ],
    imports: [RouterModule, CommonModule],
    exports: [
        SportsComponent,
        FormalComponent,
        SandalsComponent,
        FlipComponent,
        LoafersComponent,
        BootsComponent,
        RunningComponent,
        SneakersComponent,
        ProductComponent
    ]
})
export class MenModule{
}