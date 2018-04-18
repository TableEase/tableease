import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Observable } from '@firebase/util';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/takeUntil';

import { MealsService } from '../../services/meals.service';
import { AllergiesService } from '../../services/allergies.service';

import { Meal } from '../../models/meal';
import { Allergy } from '../../models/allergy';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers: [MealsService, AllergiesService]
})
export class MealComponent implements OnInit, OnDestroy {
  @Output() allergies: Allergy[];
  // @Output() addMealClicked = false;

  private ngUnsubscribe: Subject<any> = new Subject();
  private mealSub: any;
  private allergySub: any;

  meals: Meal[] = [];
  editState = false;
  mealToEdit: Meal;
  allergiesInMeal: string[] = [];

  constructor(
    private mealService: MealsService,
    private allergiesService: AllergiesService
  ) {}

  ngOnInit() {
    const mealSub = this.mealService
      .readMeals()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(meals => {
        console.log(meals);
        this.meals = meals;
      });

    const allergySub = this.allergiesService
      .readAllergies()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(allergies => {
        console.log(allergies);
        this.allergies = allergies;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  doEdit(event: Event, meal: Meal) {
    this.editState = true;
    this.mealToEdit = meal;
  }
  // editMeal(event: Event, meal: Meal) {
  //   this.editState = true;
  //   this.mealToEdit = meal;
  // }

  updateMeal(meal: Meal) {
    this.mealService.updateMeal(meal);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    // this.mealToEdit = null;
  }

  deleteMeal(meal: Meal) {
    this.clearState();
    this.mealService.deleteMeal(meal);
  }

  allergyInMeal(value, array) {
    // const found = array.forEach(element => {
    //   return element.id === value ? 'true' : 'false';
    // });
    // return found !== undefined ? true : false;
    // return found;
  }

  // toggleAddMeal() {
  //   this.addMealClicked = !this.addMealClicked;
  //   console.log(this.addMealClicked);
  // }

  editMeal(event: Event, meal: Meal) {
    // this.doEdit.emit(event);
    // this.toDetail.emit(meal.id);
    this.editState = true;
  }
}
