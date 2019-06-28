import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { GoUpComponent } from './components/go-up/go-up.component';
import { MenComponent } from './components/body/men/men.component';
import { WomenComponent } from './components/body/women/women.component';
import { KidsComponent } from './components/body/kids/kids.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/utils/alert/alert.component';
import { SportsComponent } from './components/body/men/products/sports/sports.component';
import { FormalComponent } from './components/body/men/products/formal/formal.component';
import { SandalsComponent } from './components/body/men/products/sandals/sandals.component';
import { FlipComponent } from './components/body/men/products/flip/flip.component';
import { LoafersComponent } from './components/body/men/products/loafers/loafers.component';
import { BootsComponent } from './components/body/men/products/boots/boots.component';
import { RunningComponent } from './components/body/men/products/running/running.component';
import { SneakersComponent } from './components/body/men/products/sneakers/sneakers.component';
import { ProductComponent } from './components/utils/product/product.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './components/utils/toast/toast.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    GoUpComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    SportsComponent,
    FormalComponent,
    SandalsComponent,
    FlipComponent,
    LoafersComponent,
    BootsComponent,
    RunningComponent,
    SneakersComponent,
    ProductComponent,
    MycartComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
