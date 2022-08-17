import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFormRoutingModule } from './payment-form-routing.module';
import { PaymentFormComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, SharedModule } from 'src/app/shared';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PaymentFormComponent
  ],
  imports: [
    CommonModule,
    PaymentFormRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports:[
    SharedModule,
  ]
})
export class PaymentFormModule { }
