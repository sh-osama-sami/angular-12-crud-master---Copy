import { Component, OnInit } from '@angular/core';
import { tripService } from 'src/app/services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trip } from 'src/app/models/trip.model';
import { tripinput } from 'src/app/models/trip.input';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  currenttrip: tripinput = {
    
  };
  currtrip:trip={}
  message:any=[];
  constructor(
    private tripService: tripService,
    private route: ActivatedRoute,
    private router: Router) { }
    data:any=[];
  ngOnInit(): void {
    this.message = '';
  
    this.getTrip(this.route.snapshot.params.id);
   this.gettripStations(this.route.snapshot.params.id);
  }

  getTrip(id: number): void {
    this.tripService.get(id)
      .subscribe(
        data => {
          this.currtrip = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
gettripStations(id: number):void{
    this.tripService.gettripstations(id)
    .subscribe(
      data => {
        this.currtrip.stations = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
 

  updateTrip(): void {
    this.message = '';

    this.tripService.update(this.currtrip.id, this.currenttrip)
      .subscribe(
        response => {
          console.log(response);
          this.message = response;
        },
        error => {
          console.log(error);
        });
  }

  deleteTrip(): void {
    this.tripService.delete(this.currtrip.id)
      .subscribe(
        response => {
          console.log(response);
          this.data = response ;
          //this.router.navigate(['/trips']);
        },
        error => {
          console.log(error);
        });
  }

}
