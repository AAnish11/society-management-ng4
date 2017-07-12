import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../../server.service';
@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  vehicles = [];
  constructor(private serverService : ServerService) { }

  ngOnInit() {
    this.serverService.listAllVehicles().subscribe(
      (respnse) =>{
        this.vehicles = respnse.json();
      }
    )
  }
}
