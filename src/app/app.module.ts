import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard-layout.component';
import { AddressComponent } from './address/address.component';
import { LogoutComponent } from './authentication/logout.component';
import { AuthService } from './authentication/services/auth.service';
import { AuthGuardService } from './authentication/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
