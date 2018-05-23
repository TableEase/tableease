import { Component, OnInit, ViewChild } from '@angular/core';
import { Restaurant } from '../../../models/restaurants';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantService } from '../../../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[];
  @ViewChild(RestaurantFormComponent) restaurantForm: RestaurantFormComponent;
  private restaurantToEdit: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.readCompRestaurants().subscribe((restaurants) => {
      // Not Sure
      // if (!restaurants['data'] && restaurants['messages']) {
      //   console.log('Error: ');
      //   console.log(restaurants);
      // }
      // this.restaurants = restaurants['data'];
      this.restaurants = restaurants;
    });
  }

  onReadRestaurant(restaurant: Restaurant) {
    this.restaurantToEdit = restaurant;
  }

  onUpdateRestaurant() {
    this.restaurantForm.onUpdate().subscribe((restaurants) => {
      this.getRestaurants();
    });
  }

  onDeleteRestaurant(restaurant) {
    console.log('The Delete Rest: ', restaurant);
    this.restaurantService.delete(restaurant.id).subscribe((res) => {
      this.getRestaurants();
    });
  }

  onCreateRestaurant() {
    this.restaurantForm.onSubmit().subscribe((res) => {
      this.getRestaurants();
    });
  }

  onClear() {
    this.restaurantForm.clearForm();
  }
}
