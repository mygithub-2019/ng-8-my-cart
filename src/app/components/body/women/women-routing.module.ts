import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SareesComponent } from './products/sarees/sarees.component';
import { KurtasComponent } from './products/kurtas/kurtas.component';
import { WomenComponent } from './products/women.component';

//Routers
const _routes: Routes = [
    {
        path: '',
        component: WomenComponent,
            children:[
            {path: '', component: SareesComponent},
            {path: 'sarees', component: SareesComponent},
            {path: 'kurtas', component: KurtasComponent}
        ]
    }
]

//Routing module config
@NgModule({
    imports: [RouterModule.forChild(_routes)],
    exports: [RouterModule]
})
export class WomenRoutingModule{}