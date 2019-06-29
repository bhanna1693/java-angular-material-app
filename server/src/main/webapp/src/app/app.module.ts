import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CarListComponent } from './car/car-list/car-list.component';
import {MaterialModule} from './material/material.module';
import { CarEditComponent } from './car/car-edit/car-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OktaAuthModule} from '@okta/okta-angular';
import {AuthInterceptor} from './shared/okta/auth.interceptor';
import { HomeComponent } from './home/home.component';

const config = {
  issuer: 'https://dev-337719.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oat7c1g2CCJcl6NW356'
};

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
