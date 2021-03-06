import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenComponent } from './components/body/men/men.component';
import { KidsComponent } from './components/body/kids/kids.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SportsComponent } from './components/body/men/products/sports/sports.component';
import { FormalComponent } from './components/body/men/products/formal/formal.component';
import { SandalsComponent } from './components/body/men/products/sandals/sandals.component';
import { FlipComponent } from './components/body/men/products/flip/flip.component';
import { LoafersComponent } from './components/body/men/products/loafers/loafers.component';
import { BootsComponent } from './components/body/men/products/boots/boots.component';
import { RunningComponent } from './components/body/men/products/running/running.component';
import { SneakersComponent } from './components/body/men/products/sneakers/sneakers.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { AuthGuard } from './components/login/auth.guard';
import { ProductDetailComponent } from './components/utils/product/product-detail/product-detail.component';

const routes: Routes = [
  {path: 'men', component: MenComponent,
    children: [
      {path: 'sports-shoes', component: SportsComponent},
      {path: 'formal-shoes', component: FormalComponent},
      {path: 'sandals-floaters', component: SandalsComponent},
      {path: 'flip-flops', component: FlipComponent},
      {path: 'loafers', component: LoafersComponent},
      {path: 'boots', component: BootsComponent},
      {path: 'running-shoes', component: RunningComponent},
      {path: 'sneakers', component: SneakersComponent}
    ]
  },
  {
    path: 'women', 
    //Lazy loading Women module
    loadChildren: () => import('./components/body/women/women.module').then(mod => mod.WomenModule),
  },
  {path: 'kids', 
    //component: KidsComponent,
    //canActivate: [AuthGuard]
    //Lazy loading Women module
    loadChildren: () => import('./components/body/kids/kids.module').then(mod => mod.KidsModule)
  },
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'mycart', 
    component: MycartComponent,
    canActivate: [AuthGuard]
  },
  {path: 'details', component: ProductDetailComponent},
  {path: '**', component: MenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
