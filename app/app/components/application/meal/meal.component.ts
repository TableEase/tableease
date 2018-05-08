import { Component, OnInit, ViewChild } from '@angular/core';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealService } from '../../../services/meal.service';
import { AllergiesService } from '../../../services/allergies.service';

import { Meal } from '../../../models/meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers: [MealService, AllergiesService]
})
export class MealComponent implements OnInit {
  @ViewChild(MealFormComponent) mealForm: MealFormComponent;
  meals: Meal[];
  private mealToEdit: Meal;

  constructor(private mealService: MealService) {
  }

  ngOnInit() {
    this.getMenu();
  }

  onCreateMeal() {
    this.mealForm.onSubmit().subscribe((res) => {
      this.getMenu();
    });
  }

  onReadMeal(meal: Meal) {
    this.mealToEdit = meal;
  }

  getMenu() {
    this.mealService.getMenu().subscribe((menu) => {
      this.meals = menu['data'];
    });
  }

  onUpdateMeal() {
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
