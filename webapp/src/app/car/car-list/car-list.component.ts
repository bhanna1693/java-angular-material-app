import {Component, OnInit} from '@angular/core';
import {CarService} from '../../shared/car/car.service';
import {CarModel} from '../../shared/car/car.model';
import {GiphyService} from '../../shared/giphy/giphy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: CarModel[];

  constructor(private carService: CarService,
              private giphyService: GiphyService,
              private router: Router) {
  }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      for (const car of this.cars) {
        this.giphyService.getGif(car.name).subscribe(url => car.giphyUrl = url);
      }
    });
  }

  editCar(id) {
    this.router.navigate(['/car-edit/' + id]);
  }
}
