import { SnackbarMessagesService } from 'src/app/shared/services/snackbar-messages';
import { SnackbarMessagesComponent } from './../services/snackbar-messages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import { APIService } from '../services';
import { DigitOnlyDirective } from '../directives';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    decimal: ".",
    precision: 2,
    prefix: "",
    suffix: "",
    thousands: ""
};

@NgModule({
    declarations: [DigitOnlyDirective, SnackbarMessagesComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,


    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,

        DigitOnlyDirective,
        SnackbarMessagesComponent
    ],
    providers: [
        APIService,
        SnackbarMessagesService,
        { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
    ]
})
export class SharedModule { }
