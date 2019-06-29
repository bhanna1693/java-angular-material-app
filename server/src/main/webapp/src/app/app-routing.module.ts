import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarListComponent} from './car/car-list/car-list.component';
import {CarEditComponent} from './car/car-edit/car-edit.component';
import {OktaCallbackComponent} from '@okta/okta-angular';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
