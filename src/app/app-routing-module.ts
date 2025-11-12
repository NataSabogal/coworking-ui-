import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './features/auth/pages/home/home.component';

const routes: Routes = [
  { path: '', component: Home },
  { 
    path: '', 
    loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}