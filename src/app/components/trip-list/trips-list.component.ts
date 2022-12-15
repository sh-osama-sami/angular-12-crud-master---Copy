import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trip } from 'src/app/models/trip.model';
import { tripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {

  trips?: trip[];
  currtrip: trip = {};
  currentIndex = -1;
  title = '';

  constructor(private tripService: tripService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveTrip();
    this.gettripStations(this.route.snapshot.params.id);
  }

  retrieveTrip(): void {
    this.tripService.getAll()
      .subscribe(
        data => {
          this.trips = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      
  }
  gettripStations(id: number):void{
    this.tripService.gettripstations(22)
    .subscribe(
      data => {
        this.currtrip.stations = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
 
  refreshList(): void {
    this.retrieveTrip();
    this.currtrip = {};
    this.currentIndex = -1;
  }

  setActiveTrip(trip: trip, index: number): void {
    this.currtrip = trip;
    this.currentIndex = index;
  }

  removeAllTrips(): void {
    this.tripService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

 

}
