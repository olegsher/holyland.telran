import {Observable} from 'rxjs';
import {Car} from './Car';

export abstract class CarsService {
  abstract getCars(): Observable<any>;
  abstract getCar(vehicleType: string): Observable<Car>;
}
