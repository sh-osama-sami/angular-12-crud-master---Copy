import { Component, OnInit } from '@angular/core';
import { station } from 'src/app/models/station.model';
import { stationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  stations?: station[];
  currentstation: station = {};
  currentIndex = -1;
  title = '';

  constructor(private stationservice: stationService) { }

  ngOnInit(): void {
    this.retrieveTrips();
  }

  retrieveTrips(): void {
    this.stationservice.getAll()
      .subscribe(
        data => {
          this.stations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTrips();
    this.currentstation = {};
    this.currentIndex = -1;
  }

  setActiveTrip(tutorial: station, index: number): void {
    this.currentstation = tutorial;
    this.currentIndex = index;
  }

}
