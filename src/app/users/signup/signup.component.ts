import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fBlocks = ['A','B','C','D','E','F'];
  fNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  
  @ViewChild('signupForm') signupForm : NgForm;
  
  constructor(private serverService : ServerService) { }  
  
  ngOnInit() {    
  }
  
  submitForm() {    
    this.serverService.signupUser(this.signupForm.value).subscribe(
      (response) =>{
        const data = response.json();
        window.localStorage.setItem('loginAuthToken', data.token);        
        this.signupForm.reset();
      },
      (error) =>{
      }
    )
  }

}
