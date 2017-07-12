import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UsersComponent } from './users/users.component';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { ForgotPasswordComponent } from './users/forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ListVehiclesComponent } from './vehicles/list-vehicles/list-vehicles.component';
import { VehiclesAddComponent } from './vehicles/vehicles-add/vehicles-add.component';

const routes : Routes = [
    {path : '' , component : SignupComponent   },    
    {path : 'signup' , component : SignupComponent   },
    {path : 'login' , component : LoginComponent   },
    {path : 'forgotpassword' , component : ForgotPasswordComponent },        
    {path : 'vehicles' , component : VehiclesComponent, children:[
        {path : '' , component : ListVehiclesComponent },
        {path : 'add' , component : VehiclesAddComponent },
        {path : 'list' , component : ListVehiclesComponent },        
    ] },        
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [ RouterModule ]
})

export class AppRoutingModule {

}