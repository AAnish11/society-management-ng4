import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private serverService : ServerService) { }

  forgotPasswordForm : FormGroup;
  
  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email])
    })
  }
  submitForgorpassword() { 
    this.serverService.forgotPassword(this.forgotPasswordForm.value).subscribe(
      (response) =>{
        let data = response.json();
        alert(data.msg);
        this.forgotPasswordForm.reset();
      },
      (response) =>{
        let data = response.json();
        console.log("error", data);
      }
    )       
  }

}
