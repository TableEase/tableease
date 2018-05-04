import { Component, OnInit, Input, OnDestroy, OnChanges, Output } from '@angular/core';
import { FormGroup, FormArray, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { MealService } from '../../../../services/meal.service';
import { AllergiesService } from '../../../../services/allergies.service';

import { Meal } from '../../../../models/meal';
import { Allergy } from '../../../../models/allergy';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css'],
  providers: []
})
export class MealFormComponent implements OnInit, OnDestroy {
  @Input() meal: Meal;
  private meal$: Observable<Meal>;
  allergiesNames: Observable<any>;
  private clearForm$: Subject<boolean>;
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private mealService: MealService,
    private allergiesService: AllergiesService
  ) {
  }

  ngOnInit() {
    this.allergiesService.getAllergies().subscribe((allergies) => {
      this.allergiesNames = allergies['allergies'];
    });

    // this.allergies$.takeUntil(this.ngUnsubscribe).subscribe(allergies => {
    //   this.allergiesArray = allergies;
    //   if (this.meal) {
    //     allergies = allergies.reduce((acc, curr) => {
    //       this.meal.allergies.map(i => {
    //         if (curr.name === i.name) {
    //           if (i.active !== false) {
    //             curr.active = true;
    //           }
    //         }
    //         return i;
    //       });
    //       acc.push(curr);
    //       return acc;
    //     }, []);
    //     this.setAllergies(allergies);
    //   }
    //   this.setAllergies(allergies);
    // });

    // this.clearForm$ = this.submitService.clearForm$;
    // this.clearForm$.takeUntil(this.ngUnsubscribe).subscribe(val => {
    //   if (val) {
    //     this.clearForm();
    //   }
    // })
  }

  ngOnDestroy() {
    // const mealToSend = this.mealForm.getRawValue();
    // if (
    //   this.mealForm.valid &&
    //   (this.submitService.update === true || this.submitService.create === true)
    // ) {
    //   this.submitService.formMeal$.next(mealToSend);
    // }
    // this.ngUnsubscribe.next();
    // this.ngUnsubscribe.complete();
  }

  onCreateMeal(form: NgForm) {
    console.log(form.value);
    const formVals = form.value;
    this.mealService.addFood(formVals);
  }

  clearForm() {
    // this.mealForm.reset();
  }

  setAllergies(allergies) {
    // const allergyFGs = allergies.map(allergy => this.fb.group(allergy));
    // const allergyFormArray = this.fb.array(allergyFGs);
    // this.mealForm.setControl('allergies', allergyFormArray);
  }

  checkAllergies(allergies) {
    return allergies.map(allergy => {
    });
  }
}
