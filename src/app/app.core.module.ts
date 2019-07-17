import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './components/login/auth-intercepter.service';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass:HeaderInterceptor, multi: true
          }
    ]
})

export class CoreModule{} //Don't give other name as it's standard 
                          // It should be used when u use @Ijecatable deocorator
                          // We should not use, wehe we use provideIn: 'root'
                          // It's injected in appModule.