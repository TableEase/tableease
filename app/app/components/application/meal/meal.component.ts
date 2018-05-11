import { Component, OnInit, ViewChild } from '@angular/core';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealService } from '../../../services/meal.service';
import { AllergiesService } from '../../../services/allergies.service';

import { Meal } from '../../../models/meal';
import { Router } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';
import { Restaurant } from '../../../models/restaurants';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers: [MealService, AllergiesService]
})
export class MealComponent implements OnInit {
  @ViewChild(MealFormComponent) mealForm: MealFormComponent;
  meals: Meal[];
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant;
  private mealToEdit: Meal;
  allDataFetched = false;

  constructor(private mealService: MealService, private router: Router, private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.getRestaurants();
  }

  onCreateMeal() {
    this.mealForm.form.value['restaurant_id'] = this.selectedRestaurant.id;
    this.mealForm.onSubmit().subscribe((res) => {
      this.getMenu();
    });
  }

  onReadMeal(meal: Meal) {
    this.mealToEdit = meal;
  }

  getMenu() {
    this.mealService.getMenu().subscribe((menu) => {
      if (!menu['data'] && menu['messages']) {
        this.router.navigate(['/login']);
      }
      const selRes = this.selectedRestaurant.id;
      const mealsForRestaurant = menu['data'].filter(function(restaurant) {
        return restaurant.restaurant_id === selRes;
      });

      this.meals = mealsForRestaurant;

    });
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      if (!restaurants['data'] && restaurants['messages']) {
        this.router.navigate(['/login']);
      }
      this.restaurants = restaurants['data'];
      this.selectedRestaurant = restaurants['data'][0];
      this.allDataFetched = true;
      this.getMenu();
    });
  }

  onUpdateMeal() {
    this.mealForm.form.value['restaurant_id'] = this.selectedRestaurant.id;
    this.mealForm.onUpdate().subscribe((menu) => {
      this.meals = menu['data'];
    });
  }

  onDeleteMeal(meal) {
    this.mealService.deleteFood(meal['food_id']).subscribe((menu) => {
      this.meals = menu['data'];
    });
  }

  onClear() {
    this.mealForm.clearForm();
  }
}
