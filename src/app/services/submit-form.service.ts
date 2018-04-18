import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { MealsService } from './meals.service';
import { Meal2Component } from '../components/application/meal2/meal2.component';
import { Meal } from '../models/meal';

@Injectable()
export class SubmitFormService {
  private combine$;
  private mealSub;
  private submitSub;
  public submitPressed$: Subject<any>;
  public formMeal$: Subject<Meal>;
  public clearForm$: Subject<boolean>;
  public create = false;
  public update = false;

  constructor(private mealsService: MealsService) {
    this.submitPressed$ = new Subject();
    this.formMeal$ = new Subject();
    this.clearForm$ = new Subject();

    this.mealSub = this.formMeal$.subscribe(meal => {
      meal = this.lowerString(meal);
      if (this.update === true) {
        this.mealsService.updateMeal(meal);
        this.update = false;
      } else if (this.create === true) {
        this.mealsService.createMeal(meal);
        this.create = false;
      }
    });
  }

  lowerString(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        if (element === 'allergies') {
          element.map(i => {
            if (typeof i === 'string') {
              i = i.toLowerCase();
            }
            return i;
          });
        } else if (typeof element === 'string') {
          obj[key] = element.toLowerCase();
        }
      }
    }
    return obj;
  }
}
