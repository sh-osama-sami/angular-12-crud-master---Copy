import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { trip } from '../models/trip.model';
import { tripinput } from '../models/trip.input';
import { station } from '../models/station.model';
import { environment } from 'src/environments/environment';
//import configurl from 'src/assets/config.json';

const baseUrl = 'http://trip-backend-tools3.apps.eu410.prod.nextcle.com/Trip';
//const baseUrl = environment.apiUrl+'/Trip';

@Injectable({
  providedIn: 'root'
})
export class tripService {
 /* config = {
    baseUrl: configurl.apiServer.url+"/Trip",
    };*/

  constructor(private http: HttpClient) { }
  
  //private baseUrl: string = environment.baseUrl+'Trip';

  getAll(): Observable<trip[]> {
    return this.http.get<trip[]>(baseUrl);
  }

  get(id: number): Observable<trip> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  gettripstations(id: number): Observable<station[]> {
    return this.http.get<station[]>(`${baseUrl}/${id}/${"Stations"}`);
  }

  create(data: tripinput): Observable<any> {
    return this.http.post(baseUrl, data,{ responseType: 'text'});
  }
  setstation( id:any ,data?: String ): Observable<any> {
    return this.http.post(`${baseUrl}/${id}/${"Stations"}`, data,{ responseType: 'text'});
  }

  update(id: any, data: tripinput): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data,{ responseType: 'text'});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`,{ responseType: 'text'});
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<trip[]> {
    return this.http.get<trip[]>(`${baseUrl}?title=${title}`);
  }
}
