import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tripinput } from 'src/app/models/trip.input';
import { trip } from 'src/app/models/trip.model';
import { tripService } from 'src/app/services/trip.service';
@Component({
  selector: 'app-edit-trip-station',
  templateUrl: './edit-trip-station.component.html',
  styleUrls: ['./edit-trip-station.component.css']
})
export class EditTripStationComponent implements OnInit {

  trip: tripinput = {
   
    starttime:"",
    endtime:"",
    srcstation:"",
    deststation:""
   };
   submitted = false;
   currenttrip: tripinput = {
    
  };
  currtrip:trip={}
   constructor(private tripService: tripService ,private route: ActivatedRoute,
     private router: Router) { }
   message:any=[];
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
 
   setTripStation(station? :String):void{
     const data ={
        srcstation:this.trip.srcstation
     }
      
     
 
     this.tripService.setstation(this.currtrip.id ,station ).subscribe(
 
       response => {
         console.log(response);
         this.message = response;
         this.submitted = true;
       },
       error => {
         console.log(error);
       }
     );
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
}
