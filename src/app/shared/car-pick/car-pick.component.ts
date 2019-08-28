import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CarsListService} from '../listofcars.service';
import {Observable, Subscription} from 'rxjs';
import {Car} from '../Car';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-car-pick',
  templateUrl: './car-pick.component.html',
  styleUrls: ['./car-pick.component.css']
})
export class CarPickComponent implements OnInit {
  private cars$: Observable<Car[]>;
  private subscriptionCars: Subscription;
  private cars: Car[];
  private index = 0;
  private car: Car;
  cdwSelected = false;
  tpSelected = false;
  totalCountValue = 0;

  @Output() changeValue: EventEmitter<number> = new EventEmitter<number>();


  constructor(private carsService: CarsListService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscriptionCars = this.carsService.getCars().subscribe(cars => {
      this.cars = cars;
      this.route.paramMap.subscribe(param => {
        const id = param.get('id');
        this.index = this.cars.findIndex(c => c.id === id );
        this.car = this.cars[this.index];
      });
    });
  }



  totalCostCounter() {
    if (this.cdwSelected === true) {
      this.totalCountValue = this.totalCountValue + this.car.insurance_CDW;
     // this.changeValue.emit(this.car.insurance_CDW);
    } else {
      this.totalCountValue = this.totalCountValue - this.car.insurance_CDW;
    }

    if (this.tpSelected === true) {
      this.totalCountValue = this.totalCountValue + this.car.insurance_TP;
      // this.changeValue.emit(this.car.insurance_CDW);
    } else {
      this.totalCountValue = this.totalCountValue - this.car.insurance_TP;
    }

   }

}
