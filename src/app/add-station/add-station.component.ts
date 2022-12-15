import { Component, OnInit } from '@angular/core';
import { station } from '../models/station.model';
import { tripService } from 'src/app/services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stationService } from '../services/station.service';
@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  station: station = {
   
    name:""
   
   };
   submitted = false;
 
  constructor(private stationService: stationService, private route: ActivatedRoute,
     private router: Router) { }
   message:any=[];
   ngOnInit(): void {
   }
 
   createStation(): void {
     const data = {
      name: this.station.name,
       
      
     };
 
     this.stationService.create(data)
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
 
  
 
   newStation(): void {
     this.submitted = false;
     this.station = {
     
       name:"",
       
     };
   }
 
}
