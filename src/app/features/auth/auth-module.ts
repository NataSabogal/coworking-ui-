import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AuthRoutingModule } from './auth-routing-module';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/register/register.component';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { ResetPassword } from './pages/reset-password/reset-password';
import { Home } from './pages/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { AccountComponent } from './pages/account/account.component';
import { BookingComponent } from './pages/booking/booking.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { BillComponent } from './pages/bill/bill.component';
import { ResourceComponent } from './pages/recurso/recurso.component';
import { BookingHistoryComponent } from './pages/booking-history/booking-history.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    AccountComponent,
    BookingComponent, 
    ForgotPassword,
    ResetPassword,
    Home,
    PaymentsComponent,
    BillComponent,
    ResourceComponent,
    BookingHistoryComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    MatIconModule
  ]
})
export class AuthModule { }
