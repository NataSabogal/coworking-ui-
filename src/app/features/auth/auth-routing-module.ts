import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { ResetPassword } from './pages/reset-password/reset-password';
import { RegistrarComponent } from './pages/register/register.component';
const routes: Routes = [
 
  { path: '', component: Home },                 
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegistrarComponent },     
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}