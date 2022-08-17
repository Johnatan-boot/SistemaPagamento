import { HeaderModule } from './pages/header/header.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CheckoutPageComponent} from './pages/checkout-page/checkout-page.component';
import {WindowRef} from "./WindowRef";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TOAST_NOTIFICATIONS_CONFIG, ToastNotificationsModule} from "ngx-toast-notifications";
import {LoadingBarModule} from "@ngx-loading-bar/core";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home';
import { PaymentFormModule, PaymentFormRoutingModule } from './pages';
import { MaterialModule, SharedModule } from './shared';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutPageComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    ToastNotificationsModule,
    ReactiveFormsModule,
    HttpClientModule,


    SharedModule,
    MaterialModule,
    HeaderModule,
    HomeModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    PaymentFormModule,
    PaymentFormRoutingModule,



    AppRoutingModule,
  ],
  providers: [
    {provide: TOAST_NOTIFICATIONS_CONFIG, useValue: {duration: 6000, type: 'dark', position: 'top-center'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
