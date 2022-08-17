//import { api } from './../../../../shared/configurations/api.configuration';
import { general } from './../../../../shared/configurations/general.configuration';
//import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
//import { PaymentBody, TokenizeBody } from 'src/app/interfaces';
import { APIService } from 'src/app/shared';
import { SnackbarMessagesService } from 'src/app/shared/services/snackbar-messages';
//import { debounceTime } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  paymentHandler: any = null;
  success: boolean = false;
  failure:boolean = false;
  checkout: any;

//Permanecer codigo Preservar
  constructor(private _api: APIService, private _snackbar: SnackbarMessagesService,
    private _registry: MatIconRegistry, private _sanitizer: DomSanitizer) {
    this._registry.addSvgIcon('credit-card-regular', this._sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/credit-card-regular.svg'));
  }

  ngOnInit(): void {
    this.invokeStripe();
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Jj2B8E9r1Q1FPXxxhhxIIZp39vtVb5HJUFWJD8hlhf60j4j65UsajK2MvVE13iOAziUSUgknN4UvazwJHdsxyxf00ExYIiWu1',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }
      });
    };

    paymentHandler.open({
      name: 'Coding Shiksha',
      description: 'This is a sample pdf file',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Jj2B8E9r1Q1FPXxxhhxIIZp39vtVb5HJUFWJD8hlhf60j4j65UsajK2MvVE13iOAziUSUgknN4UvazwJHdsxyxf00ExYIiWu1',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

  public privacyPolicylink: string = general.externalLinks.privacyPolicy;
  public supportLink: string = general.externalLinks.support;
  public termsOfUseLink: string = general.externalLinks.termsOfUse;

  public contentFG: FormGroup = new FormGroup({
    logo: new FormControl("assets/braun-weiss-logo.webp"),
    subtitle: new FormControl("Enter the amount and invoice # to pay."),
    price: new FormControl(0.00, [Validators.required]),
    invoice: new FormControl(null, [Validators.required])
  });

  //Permanecer codigo Preservar


  public price: number = 0.00;
  public total: number = 0.00;
  public fee: number = 0.00;
  public decimalLength: number = 0;



}
