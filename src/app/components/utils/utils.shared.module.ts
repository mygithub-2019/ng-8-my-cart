import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { ModelAlertComponent } from './model-alert/model-alert.component';
import { ToastComponent } from './toast/toast.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AlertComponent,
        ModelAlertComponent,
        ProductComponent,
        ToastComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        AlertComponent,
        ModelAlertComponent,
        ProductComponent,
        ToastComponent
    ]
})
export class UtilsSharedModule {
}