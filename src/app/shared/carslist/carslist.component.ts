import { Component, OnInit } from '@angular/core';
import {CarsListService} from '../listofcars.service';
import {Observable} from 'rxjs';
import {Car} from '../Car';

@Component({
  selector: 'app-carslist',
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css']
})
export class CarslistComponent implements OnInit {
  public cars$: Observable<Car[]>;
  constructor(private carsService: CarsListService) { }

  ngOnInit() {
    this.cars$ = this.carsService.getCars();
  }

}
