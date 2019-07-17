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
import { KidsComponent } from './components/body/kids/kids.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/utils/alert/alert.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastComponent } from './components/utils/toast/toast.component';
import { HeaderInterceptor } from './components/login/auth-intercepter.service';
import { ProductDetailComponent } from './components/utils/product/product-detail/product-detail.component';
import { ModelAlertComponent } from './components/utils/model-alert/model-alert.component';

//Custom module imports
import { MenModule } from './components/body/men/men.module';
import { UnderConstructionComponent } from './components/utils/under-construction/under-construction.component';
import { CoreModule } from './app.core.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    GoUpComponent,
    MenComponent,
    KidsComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    MycartComponent,
    ToastComponent,
    ProductDetailComponent,
    ModelAlertComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MenModule,
    CoreModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS, useClass:HeaderInterceptor, multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
