import { Component, OnInit, Input } from '@angular/core';

import { MealsService } from '../../../services/meals.service';

import { Meal } from '../../../models/meal';
import { Allergy } from '../../../models/allergy';
import { AllergiesService } from '../../../services/allergies.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  @Input() meal: Meal;
  @Input() allergies: Allergy[];

  editState = false;

  constructor(
    private mealService: MealsService,
    private allerbiesService: AllergiesService
  ) {}

  ngOnInit() {}

  updateMeal(meal: Meal) {
    this.clearState();
    this.mealService.updateMeal(meal);
  }

  clearState() {
    this.editState = false;
    // this.mealToEdit = null;
  }

  deleteMeal(meal: Meal) {
    this.clearState();
    this.mealService.deleteMeal(meal);
  }
}
