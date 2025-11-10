import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './shared/shared-module';
import { AtomicModule } from './atomic/atomic-module';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

@NgModule({
  declarations: [
    App,
    MainLayout,
    AuthLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AtomicModule  
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
