import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { trip } from '../models/trip.model';
import { admin } from '../models/admin.model';
import { environment } from 'src/environments/environment';
//import configurl from 'src/assets/config.json';

const signup = 'http://trip-backend-sherysamy-mysql-openshift.apps.eu410.prod.nextcle.com/signup';
const login = 'http://trip-backend-sherysamy-mysql-openshift.apps.eu410.prod.nextcle.com/login';
  //const signup = environment.apiUrl+'/signup';
 // const login = environment.apiUrl+'/login';
@Injectable({
  providedIn: 'root'
})
export class adminService {

 /* config = {
    baseUrl: configurl.apiServer.url,
    };
*/
  constructor(private http: HttpClient) { }
 // private signup: string = environment.baseUrl+'signup';
  //private login1: string = environment.baseUrl+'login';

  
  create(data: admin): Observable<any> {
    return this.http.post(signup, data,{ responseType: 'text'});
  }
  login(data: admin): Observable<any> {
    return this.http.post(login,data,{ responseType: 'text'});
  }

  
}
