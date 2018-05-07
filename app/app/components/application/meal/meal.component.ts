import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { MealFormComponent } from './meal-form/meal-form.component';

// import { MealsService } from '../../../services/meals.service';
import { MealService } from '../../../services/meal.service';
import { AllergiesService } from '../../../services/allergies.service';
// import { SubmitFormService } from '../../../services/submit-form.service';

import { Meal } from '../../../models/meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers: [MealService, AllergiesService]
})
export class MealComponent implements OnInit, OnDestroy {
  @ViewChild(MealFormComponent) mealForm: MealFormComponent;
  private ngUnsubscribe: Subject<any> = new Subject();
  private meals$: Observable<Meal[]>;
  private mealSub: any;
  meals: Meal[];
  private mealToEdit: Meal;

  constructor(
    private mealService: MealService,
    private allergiesService: AllergiesService
  ) {
  }

  ngOnInit() {
    this.getMenu();
    // this.mealSub = this.meals$
    //   .takeUntil(this.ngUnsubscribe)
    //   .subscribe(meals => {
    //     this.meals = meals;
    //     this.courses = meals
    //       .map(meal => {
    //         return meal.course;
    //       })
    //       .slice()
    //       .sort((a: string, b: string): any => {
    //         return a > b;
    //       })
    //       .reduce((a: string[], b: string): any => {
    //         if (a.slice(-1)[0] !== b) {
    //           a.push(b);
    //         }
    //         return a;
    //       }, []);
    //   });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
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

  // onDeleteMeal(meal: Meal) {
  //   this.mealService.deleteMeal(meal);
  // }

  onClear() {
    this.mealForm.clearForm();
  }
}
