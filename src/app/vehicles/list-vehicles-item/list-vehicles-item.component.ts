import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-vehicles-item',
  templateUrl: './list-vehicles-item.component.html',
  styleUrls: ['./list-vehicles-item.component.css']
})
export class ListVehiclesItemComponent implements OnInit {

  @Input('vehicleData') vehicleData :any;
  
  constructor() { }

  ngOnInit() {
  }

}
