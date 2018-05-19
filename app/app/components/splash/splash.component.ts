import { Component, OnInit, ViewChild } from '@angular/core';
import { AllergyCheckboxes } from '../../models/allergycheckboxes';
import { AllergiesService } from '../../services/allergies.service';
import { RestaurantService } from '../../services/restaurant.service';
import { MealService } from '../../services/meal.service';
import { Router } from '@angular/router';
import { Meal } from '../../models/meal';
import { Address } from '../../models/address';
import { Restaurant } from '../../models/restaurants';
import { MapComponent } from '../form/map/map.component';
import { Allergy } from '../../models/allergy';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [AllergiesService]
})
export class SplashComponent implements OnInit {
  @ViewChild(MapComponent) mapComponent: MapComponent;
  allergies: AllergyCheckboxes[] = [];
  meals: Meal[] = [];
  rangeValues: number[] = [];
  allDataFetched = false;
  restaurants: Restaurant[];

  constructor(
    private allergiesService: AllergiesService,
    private mealService: MealService,
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.allergiesService.getAllergies().subscribe((allergies) => {
      // this.allergies = allergies;
      this.allergies = allergies['allergies'];
    });

    this.rangeValues = [0, 100];
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurantsAll().subscribe((restaurants) => {
      console.log('The Restaurants: ', restaurants);
      if (!restaurants['data'] && restaurants['messages']) {
        this.router.navigate(['/login']);
      }
      this.restaurants = restaurants['data'];
      console.log('New Rest: ', this.restaurants);
      this.getMenu();
    });
  }

  onCheckboxChange(val: boolean, index: number) {
    this.allergies[index]['checked'] = !val;
  }

  getSelectedOptionNames() {
    return this.allergies.filter((opt) => opt.checked).map((opt) => opt.name);
  }

  getminPrice(meals) {
    const minPrice = Math.min.apply(
      Math,
      meals.map(function(item) {
        return item.price;
      })
    );
    return minPrice;
  }

  getmaxPrice(meals) {
    const maxPrice = Math.max.apply(
      Math,
      meals.map(function(item) {
        return item.price;
      })
    );
    return maxPrice;
  }

  onSearch() {
    this.getRestaurants();
  }

  getMenu() {
    const selectedNames = this.getSelectedOptionNames();
    this.mealService.getMenuAll().subscribe((menu) => {
      if (!menu['data'] && menu['messages']) {
        this.router.navigate(['/login']);
      }
      this.meals = menu['data'];
      for (let i = 0; i < this.meals.length; i++) {
        const price = parseInt(this.meals[i].price, 10);
        if (price > this.rangeValues[1] || price < this.rangeValues[0]) {
          this.meals.splice(i, 1);
          i--;
          continue;
        }

        for (let j = 0; j < this.meals[i].allergies.length; j++) {
          if (selectedNames.indexOf(this.meals[i].allergies[j].name) !== -1) {
            this.meals.splice(i, 1);
            i--;
            break;
          }
        }
      }
      this.formatFoodRestaurant();
    });
  }

  formatFoodRestaurant() {
    const meals = this.meals;
    this.restaurants.forEach(function(restaurant) {
      restaurant['meals'] = [];
      meals.forEach(function(food) {
        if (food.restaurant_id === restaurant.id) {
          restaurant['meals'].push(food);
        }
      });
    });
    this.allDataFetched = true;
    if (this.mapComponent) {
      this.mapComponent.setMarkers();
    }
  }
}
