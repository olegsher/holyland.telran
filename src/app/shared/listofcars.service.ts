import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Car} from './Car';
import {CarsService} from './abstract-cars-service';
import {map, catchError} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'c31z' })
};

const url = 'http://localhost:8080/cars';
@Injectable({
  providedIn: 'root'
})

export class CarsListService implements CarsService {
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(url, httpOptions);
  }


  getCar(id: string): Observable<Car> {
    return this.httpClient.get<Car>(`${url}/${id}`);
  }

}
