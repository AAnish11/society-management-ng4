import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing';
import { ServerService } from './server.service';
import { AuthService } from './auth.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ListVehiclesComponent } from './vehicles/list-vehicles/list-vehicles.component';
import { ListVehiclesItemComponent } from './vehicles/list-vehicles-item/list-vehicles-item.component';
import { VehiclesAddComponent } from './vehicles/vehicles-add/vehicles-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    VehiclesComponent,
    ListVehiclesComponent,
    ListVehiclesItemComponent,
    VehiclesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ServerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
