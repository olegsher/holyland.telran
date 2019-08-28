import { Component, OnInit } from '@angular/core';
import {CarsListService} from '../listofcars.service';
import {Observable, Subscription} from 'rxjs';
import {Car} from '../Car';
import {map, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  minPickDate = new Date(2019, 7, 1);
  maxPickDate = new Date(2020, 0, 1);
  minDropDate = new Date(2019, 7, 11);
  maxDropDate = new Date(2020, 0, 1);
  carsObservable: Observable<Car>;
  public cars$: Observable<Car[]>;
  public carHolder: Car[];
  public cars2$: string;
  public cars3$: Car[][];
  public cars4$;
  result = {};



  constructor(private carsService: CarsListService) {  }

  ngOnInit() {
    console.log('ngOnInit on');
    }

  gotoCarsList() {

  }



}
