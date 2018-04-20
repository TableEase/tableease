import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { MealsService } from '../../../services/meals.service';
import { AllergiesService } from '../../../services/allergies.service';
import { SubmitFormService } from '../../../services/submit-form.service';

import { Meal } from '../../../models/meal';

@Component({
  selector: 'app-meal2',
  templateUrl: './meal2.component.html',
  styleUrls: ['./meal2.component.css'],
  providers: [MealsService, AllergiesService, SubmitFormService]
})
export class Meal2Component implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  private meals$: Observable<Meal[]>;
  private mealSub: any;
  private meals: Meal[] = [];
  private mealToEdit: Meal;
  private courses: string[] = [];

  constructor(
    private mealService: MealsService,
    private allergiesService: AllergiesService,
    public submitService: SubmitFormService
  ) {}

  ngOnInit() {
    this.meals$ = this.mealService.readMeals();
    // console.log(this.meals$);
    this.mealSub = this.meals$
      .takeUntil(this.ngUnsubscribe)
      .subscribe(meals => {
        this.meals = meals;
        this.courses = meals
          .map(meal => {
            return meal.course;
          })
          .slice()
          .sort((a: string, b: string): any => {
            return a > b;
          })
          .reduce((a: string[], b: string): any => {
            if (a.slice(-1)[0] !== b) {
              a.push(b);
            }
            return a;
          }, []);
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onCreateMeal() {
    this.submitService.create = true;
  }

  onReadMeal(meal: Meal) {
    this.mealToEdit = meal;
  }

  onUpdateMeal(event: Event) {
    if (event.type === 'click') {
      this.submitService.update = true;
    }
  }

  onDeleteMeal(meal: Meal) {
    this.mealService.deleteMeal(meal);
  }

  onClear() {
    this.submitService.clearForm$.next(true);
  }
}
