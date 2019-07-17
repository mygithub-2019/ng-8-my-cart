import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KidsComponent } from './kids.component';

//Routers
const _routes: Routes = [
    {
        path: '', //Important step-1
        component: KidsComponent,
        //     children:[
        //     {path: '', component: SareesComponent},
        //     {path: 'sarees', component: SareesComponent},
        //     {path: 'kurtas', component: KurtasComponent}
        // ]
    }
]
//Routing module config
@NgModule({
    imports: [RouterModule.forChild(_routes)],
    exports: [RouterModule]
})

export class KidsRoutingModule{}