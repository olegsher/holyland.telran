import { Component, OnInit } from '@angular/core';
import {Car} from '../Car';
import {CarsListService} from '../listofcars.service';
import {Observable, Subscription} from 'rxjs';



@Component({
  selector: 'app-carslist',
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css']
})
export class CarslistComponent implements OnInit {
  public cars$: Observable<any[]>;
  public carsArray: Car[];
  private arrayCars: any;
  constructor(private carsService: CarsListService) { }

  ngOnInit() {
    //this.cars$ = this.carsService.getCars();
        this.carsService.getCars().subscribe(value => {
          this.arrayCars = value.Cars;
          //console.log(value);
        });

  }

    // getCars() {
    //    this.carsService.getCars()
    //         .subscribe( cars =>
    //             {
    //                 console.log('Get Cars: ', cars);
    //                 this.carsArray = cars;
    //             }
    //         );
    // }
}
