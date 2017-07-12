import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../../server.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serverService : ServerService) { }

  @ViewChild('loginForm') loginForm : NgForm;

  ngOnInit() {
  }
  submitLogin() {    
    this.serverService.login(this.loginForm.value).subscribe(
      (response) =>{
        const data = response.json();                
        this.loginForm.reset();
        alert(data.msg);
      },
      (error) =>{
      }
    )
  }

}
