import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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




@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    AccountComponent,
    BookingComponent, 
    ForgotPassword,
    ResetPassword,
    Home,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
    MatIconModule
  ]
})
export class AuthModule { }
