import { Component, OnInit } from '@angular/core';
import { admin } from 'src/app/models/admin.model';
import { adminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
show:boolean=false;

  admin: admin = {
    Id:0,
    username:"",
    password:"",
    signedin:false
   };
   submitted = false;
   output?: any;
   message:any=[];
  constructor(private adminService: adminService) { }

  ngOnInit(): void {
  }
  login(): void {
    const data = {
      username: this.admin.username,
      password:this.admin.password,
     
    };

    this.adminService.login(data)
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
 

}
