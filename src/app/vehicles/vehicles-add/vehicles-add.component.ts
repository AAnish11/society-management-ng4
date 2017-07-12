import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-vehicles-add',
  templateUrl: './vehicles-add.component.html',
  styleUrls: ['./vehicles-add.component.css']
})
export class VehiclesAddComponent implements OnInit {

  constructor(private serverService : ServerService,
              private router : Router,
              private actRoute : ActivatedRoute) { }

  vehicleTypes = ['Cycle', 'Bike', 'Car', 'Other']

  ngOnInit() {
  }

  submitVehicle(formData : NgForm){
      this.serverService.addVehicles(formData.value).subscribe(
        (response) =>{
          let data = response.json();
          alert(data.msg)
          this.router.navigate(['../list'], {relativeTo : this.actRoute});
        },
        (response) =>{
          console.log("errorr", response.json());
        }
      )
  }

}
