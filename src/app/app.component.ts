import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { admin } from './models/admin.model';
import { adminService } from 'src/app/services/admin.service';
import { AppConfigService } from './providers/app-config.service';
import { HttpClient } from '@angular/common/http';
//import configurl from 'src/assets/config.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*config = {
    ApiUrl: configurl.apiServer.url,
    };*/
  title = 'Angular 12 Crud';
 // show:boolean = false;
login: boolean = false ;
  onlogin(b:boolean):void{
    this.login =b;
    
  }
  constructor(private http: HttpClient, private config: AppConfigService) {
    console.log(this.config.getConfig());
    }
}
