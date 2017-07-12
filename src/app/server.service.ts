import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable()

export class ServerService {

    serverUrl : string = "http://111.93.82.91:3000/";
    constructor(private http : Http){}
    getAuth(){
        return window.localStorage.getItem('loginAuthToken')
    }
    signupUser(formData : any){
        console.log(this.serverUrl+ 'auth/signup', formData);
        return this.http.post(this.serverUrl+ 'auth/signup', formData);
    }  

    login(formData : any){        
        return this.http.post(this.serverUrl+ 'auth/login', formData);
    }  

    logout(formData : any){        
        return this.http.post(this.serverUrl+ 'auth/logout', formData);
    }  

    forgotPassword(formData : any){         
        return this.http.post(this.serverUrl+ 'auth/forgot', formData);
    }   

    listAllVehicles(){
        const headers = new Headers({'Authorization':this.getAuth()});
        return this.http.get(this.serverUrl+ 'vehicle/list-all', {headers : headers});
    }

    addVehicles(vehicleData : any){
        const headers = new Headers({'Authorization':this.getAuth()});
        return this.http.post(this.serverUrl+ 'vehicle/add', vehicleData, {headers : headers});
    }
}