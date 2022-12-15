import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { trip } from '../models/trip.model';
import { station } from '../models/station.model';
import { environment } from 'src/environments/environment';
//import configurl from 'src/assets/config.json';
const baseUrl = 'http://trip-backend-sherysamy-mysql-openshift.apps.eu410.prod.nextcle.com/Station';
//const baseUrl = environment.apiUrl+'/Station';


@Injectable({
  providedIn: 'root'
})
export class stationService {
  /*config = {
    baseUrl: configurl.apiServer.url+"/Station",
    };*/
  constructor(private http: HttpClient) { }
 // private baseUrl: string = environment.baseUrl+'Station';

  getAll(): Observable<station[]> {
    return this.http.get<station[]>(baseUrl);
  }

  get(id: number): Observable<station> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: station): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: station): Observable<any> {
    return this.http.put(baseUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`,{ responseType: 'text'});
  }


 
}
