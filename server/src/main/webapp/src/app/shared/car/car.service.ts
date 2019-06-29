import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarModel} from './car.model';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<CarModel[]>(environment.apiURL + '/cool-cars');
  }

  getCar(id: string) {
    return this.http.get<CarModel>(environment.apiURL + '/cars/' + id);
  }

  save(car: any) {
    if (car.href) {
      return this.http.put<CarModel>(car.href, car);
    } else {
      return this.http.post<CarModel>(environment.apiURL + '/cars', car);
    }
  }

  remove(href: string) {
    return this.http.delete<CarModel>(href);
  }
}
