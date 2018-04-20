import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  HostBinding,
  HostListener
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl
} from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { MealsService } from '../../../services/meals.service';
import { AllergiesService } from '../../../services/allergies.service';

import { Meal } from '../../../models/meal';
import { Allergy } from '../../../models/allergy';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  @Input() allergies: Allergy[];
  private ngUnsubscribe: Subject<any> = new Subject();
  addMealForm: FormGroup;
  allergiesClicked = false;
  filteredAllergies: string[] = [];

  static resetForm(formGroup: FormGroup) {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();

    Object.keys(formGroup.controls).forEach(name => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
    console.log('onResetForm');
    console.log(formGroup.get('allergies').value);
  }

  constructor(
    private mealService: MealsService,
    private allergiesService: AllergiesService
  ) {}

  ngOnInit() {
    this.addMealForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      course: new FormControl(null),
      price: new FormControl(null),
      id: new FormControl(null),
      rId: new FormControl(null),
      cId: new FormControl(null),
      allergies: new FormArray([])
    });
  }

  onSubmit() {
    if (this.addMealForm.valid) {
      const data = this.addMealForm.value;
      this.clearAllergyNulls(data.allergies);
      data.allergies = this.filteredAllergies;
      this.mealService.createMeal(data);
      AddMealComponent.resetForm(this.addMealForm);
      this.allergiesClicked = false;
    }
  }

  onAddAllergies() {
    if (!this.allergiesClicked) {
      for (const key in this.allergies) {
        if (this.allergies.hasOwnProperty(key)) {
          const element = this.allergies[key];
          const control = new FormControl();
          console.log(control);
          (<FormArray>this.addMealForm.get('allergies')).push(control);
        }
      }
    }
    this.allergiesClicked = true;
  }

  setAllergy(allergy: string, i: number) {
    const currFArray = this.addMealForm.get(['allergies', i]);

    if (currFArray.value == null) {
      currFArray.patchValue(allergy);
    } else {
      currFArray.patchValue(null);
    }
  }

  clearAllergyNulls(array: Array<any>) {
    for (const element of array) {
      if (element !== null) {
        this.filteredAllergies.push(element);
      }
    }
  }
}
