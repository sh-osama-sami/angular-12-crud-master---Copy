import { Component, OnInit } from '@angular/core';
import { admin } from 'src/app/models/admin.model';
import { adminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  admin: admin = {
    Id:0,
    username:"",
    password:"",
   };
   submitted = false;

   
  constructor(private adminService: adminService) { }

  ngOnInit(): void {
  }
  signup(): void {
    const data = {
      username: this.admin.username,
      password:this.admin.password,
     
    };

    this.adminService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newUser(): void {
    this.submitted = false;
    this.admin = {
      Id:0,
      username:"",
      password:""
    };
  }

}
