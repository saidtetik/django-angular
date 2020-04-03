import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Travel} from './travel';
import {User} from "./user";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost/api/';
  username = localStorage.getItem("username");
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("access")
    })
  };

  constructor(private http: HttpClient) {
  }

  public getTravels(): Observable<Travel[]> {
    return this.http.get<Travel[]>(`${this.API_URL}get/`, this.httpOptions);
  }

  public addTravel(new_travel: Travel) {
    new_travel.owner_username = this.username;
    return this.http.post(`${this.API_URL}add/`, new_travel, this.httpOptions);
  }

  public getTravel(travel_id: number): Observable<Travel []> {
    return this.http.get<Travel[]>(`${this.API_URL}detail/?travel_id=${travel_id}`, this.httpOptions);
  }

  public login(user: User) {
    return this.http.post(`${this.API_URL}token/`, user);
  }

  public newAccessToken(refresh){
    return this.http.post(`${this.API_URL}refresh/`,{refresh:refresh});
  }

}

