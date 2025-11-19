import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { ResetPassword } from './pages/reset-password/reset-password';
import { RegistrarComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { BookingComponent } from './pages/booking/booking.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { BillComponent } from './pages/bill/bill.component';
import { ResourceComponent } from './pages/recurso/recurso.component';

const routes: Routes = [

  { path: '', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrarComponent },
  { path: 'account', component: AccountComponent },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },
  {path: 'booking', component: BookingComponent},
  { path: 'payments', component: PaymentsComponent },
  { path: 'bill', component: BillComponent },
  { path: 'resource', component: ResourceComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }