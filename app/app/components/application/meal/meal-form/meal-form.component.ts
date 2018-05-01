import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { MealsService } from '../../../../services/meals.service';
import { AllergiesService } from '../../../../services/allergies.service';
import { SubmitFormService } from '../../../../services/submit-form.service';

import { Meal } from '../../../../models/meal';
import { Allergy } from '../../../../models/allergy';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css'],
  providers: []
})
export class MealFormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() meal: Meal;
  private meal$: Observable<Meal>;
  private allergies$: Observable<any>;
  private clearForm$: Subject<boolean>;
  private ngUnsubscribe: Subject<any> = new Subject();

  mealForm: FormGroup;
  allergiesArray: Allergy[] = [];

  constructor(
    private mealsService: MealsService,
    private allergiesService: AllergiesService,
    private submitService: SubmitFormService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.allergies$ = this.allergiesService.readAllergies().map(array =>
      array.map(obj => {
        obj.active = false;
        return obj;
      })
    );

    this.allergies$.takeUntil(this.ngUnsubscribe).subscribe(allergies => {
      this.allergiesArray = allergies;
      if (this.meal) {
        allergies = allergies.reduce((acc, curr) => {
          this.meal.allergies.map(i => {
            if (curr.name === i.name) {
              if (i.active !== false) {
                curr.active = true;
              }
            }
            return i;
          });
          acc.push(curr);
          return acc;
        }, []);
        this.setAllergies(allergies);
      }
      this.setAllergies(allergies);
    });

    this.clearForm$ = this.submitService.clearForm$;
    this.clearForm$.takeUntil(this.ngUnsubscribe).subscribe(val => {
      if (val) {
        this.clearForm();
      }
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  ngOnDestroy() {
    const mealToSend = this.mealForm.getRawValue();
    if (
      this.mealForm.valid &&
      (this.submitService.update === true || this.submitService.create === true)
    ) {
      this.submitService.formMeal$.next(mealToSend);
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  createForm() {
    this.mealForm = this.fb.group({
      name: '',
      description: '',
      course: '',
      price: '',
      calories: '',
      id: '',
      allergies: this.fb.array([])
    });
  }

  rebuildForm() {
    this.mealForm.reset({
      name: this.meal.name,
      description: this.meal.description,
      course: this.meal.course,
      price: this.meal.price,
      calories: this.meal.calories,
      id: this.meal.id,
      allergies: this.allergies[0] || new Allergy()
    });
  }

  clearForm() {
    this.mealForm.reset();
  }

  setAllergies(allergies) {
    const allergyFGs = allergies.map(allergy => this.fb.group(allergy));
    const allergyFormArray = this.fb.array(allergyFGs);
    this.mealForm.setControl('allergies', allergyFormArray);
  }

  checkAllergies(allergies) {
    return allergies.map(allergy => {});
  }

  get allergies(): FormArray {
    return this.mealForm.get('allergies') as FormArray;
  }
}
