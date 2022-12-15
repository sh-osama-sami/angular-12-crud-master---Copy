import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tripinput } from 'src/app/models/trip.input';
import { trip } from 'src/app/models/trip.model';
import { tripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  trip: tripinput = {
   
   starttime:"",
   endtime:"",
   srcstation:"",
   deststation:""
  };
  submitted = false;

  constructor(private tripService: tripService ,private route: ActivatedRoute,
    private router: Router) { }
  message:any=[];
  ngOnInit(): void {
  }

  createTrip(): void {
    const data = {
      starttime: this.trip.starttime,
      endtime: this.trip.endtime,
     
    };

    this.tripService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response;
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

 

  newTrip(): void {
    this.submitted = false;
    this.trip = {
    
      starttime:"",
      endtime:"",
      srcstation:"",
      deststation:""
    };
  }

}
