import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CarsListService} from '../listofcars.service';
import {Observable, Subscription} from 'rxjs';
import {Car} from '../Car';
import {ActivatedRoute, Router} from '@angular/router';
import {Extra} from "../Extra";

@Component({
  selector: 'app-car-pick',
  templateUrl: './car-pick.component.html',
  styleUrls: ['./car-pick.component.css']
})
export class CarPickComponent implements OnInit {
  private cars: Car[];
  private extras: Extra[];
  private index = 0;
  private car: Car;
  cdwSelected = false;
  tpSelected = false;
  plcSelected = false;
  cdwSuperSelected = false;
  tpSuperSelected = false;
  childBoosterSelected = false;
  roadSafeAssistanceSelected = false;
  navigationSelected = false;
  childSeatSelected = false;
  babyChildSeatSelected = false;
  additionalDriverSelected = false;
  underageDriverSelected = false;
  airportFeeSelected = false;
  vipServiceSelected = false;
  private totalProtectionValue: number;
  private totalExtraValue: number;

  //@Output() changeValue: EventEmitter<number> = new EventEmitter<number>();

  constructor(private carsService: CarsListService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.carsService.getCars().subscribe(value => {
      this.cars = value.Cars;
      this.extras = value.Extras;
      this.route.paramMap.subscribe(param => {
        const id = param.get('id');
        this.index = this.cars.findIndex(c => c.id === id );
        this.car = this.cars[this.index];
      });
    });
  }


  totalProtectionCost() {
    this.totalProtectionValue = 0;
    if (this.cdwSelected === true) {
      this.totalProtectionValue = this.totalProtectionValue + this.car.insurance_CDW;
    }
    if (this.tpSelected === true) {
      this.totalProtectionValue = this.totalProtectionValue + this.car.insurance_TP;
    }
    if (this.plcSelected === true) {
      this.totalProtectionValue = this.totalProtectionValue + this.car.insurance_3PLC;
    }
    if (this.cdwSuperSelected === true) {
      this.totalProtectionValue = this.totalProtectionValue + this.car.insurance_SuperCDW;
    }
    if (this.tpSuperSelected === true) {
      this.totalProtectionValue = this.totalProtectionValue + this.car.insurance_SuperTP;
    }
  }

  totalExtrasCost() {
    this.totalExtraValue = 0;
    if (this.childBoosterSelected === true) {
      this.totalExtraValue = this.totalExtraValue + this.extras[0].childBooster;
    }
    if (this.childSeatSelected === true) {
      this.totalExtraValue = this.totalExtraValue + this.extras[0].childSeat;
    }
    if (this.roadSafeAssistanceSelected === true) {
      this.totalExtraValue = this.totalExtraValue + this.extras[0].roadSafeAssistance;
    }
    if (this.navigationSelected === true) {
      this.totalExtraValue = this.totalExtraValue + this.extras[0].navigation;
    }
    if (this.babyChildSeatSelected === true) {
      this.totalExtraValue = this.totalExtraValue + this.extras[0].babyChildSeat;
    }
    if (this.additionalDriverSelected === true) {
      this.totalExtraValue = this.totalExtraValue + this.extras[0].additionalDriver;
    }
    if (this.underageDriverSelected === true) {
      this.totalExtraValue = this.totalExtraValue + this.extras[0].underageDriver;
    }
    if (this.airportFeeSelected === true) {
      this.totalExtraValue = this.totalExtraValue + this.extras[0].airportFee;
    }
    if (this.vipServiceSelected === true) {
      this.totalExtraValue = this.totalExtraValue + this.extras[0].vipService;
    }
  }


}
