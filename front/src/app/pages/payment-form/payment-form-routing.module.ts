import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'form-payment', component: PaymentFormComponent},

];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class PaymentFormRoutingModule { }
