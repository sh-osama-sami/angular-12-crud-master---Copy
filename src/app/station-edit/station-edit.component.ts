import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { station } from '../models/station.model';
import { stationService } from '../services/station.service';

@Component({
  selector: 'app-station-edit',
  templateUrl: './station-edit.component.html',
  styleUrls: ['./station-edit.component.css']
})
export class StationEditComponent implements OnInit {

 
  currstation:station={}
  message:any=[];
  constructor(
    private stationService: stationService,
    private route: ActivatedRoute,
    private router: Router) { }
    data:any=[];
  ngOnInit(): void {
    this.message = '';
  
    this.getStation(this.route.snapshot.params.id);
  // this.gettripStations(this.route.snapshot.params.id);
  }

  getStation(id: number): void {
    this.stationService.get(id)
      .subscribe(
        data => {
          this.currstation = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
/*gettripStations(id: number):void{
    this.tripService.gettripstations(id)
    .subscribe(
      data => {
        this.currtrip.stations = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }*/
 

  updateStation(): void {
    this.message = '';

    this.stationService.update(this.currstation.id, this.currstation)
      .subscribe(
        response => {
          console.log(response);
          this.message = response;
        },
        error => {
          console.log(error);
        });
  }

  deleteStation(): void {
    this.stationService.delete(this.currstation.id)
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
