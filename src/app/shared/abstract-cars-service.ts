import {Observable} from 'rxjs';
import {Car} from './Car';

export abstract class CarsService {
  abstract getCars(): Observable<Car[]>;
  abstract getCar(vehicleType: string): Observable<Car>;
}
