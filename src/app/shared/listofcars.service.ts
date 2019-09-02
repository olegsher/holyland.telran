import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from './Car';
import {CarsService} from './abstract-cars-service';
import {map} from "rxjs/operators";

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'c31z' })
// };

const url = 'http://localhost:8080/cars';
@Injectable({
  providedIn: 'root'
})

export class CarsListService implements CarsService {
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<any> {
    return this.httpClient.get<any>(url);
    // , {observe: 'body', responseType: 'json'}).pipe(map(data => data.Cars)
  }


  getCar(id: string): Observable<Car> {
    return this.httpClient.get<Car>(`${url}/${id}`);
  }

}
