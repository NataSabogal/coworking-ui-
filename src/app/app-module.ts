import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './shared/shared-module';
import { AtomicModule } from './atomic/atomic-module';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [App, AuthLayout],
  imports: [BrowserModule, AppRoutingModule, RouterModule, MatIconModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}