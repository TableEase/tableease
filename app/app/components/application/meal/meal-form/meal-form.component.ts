import { Component, OnInit, Input, OnDestroy, OnChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MealService } from '../../../../services/meal.service';
import { AllergiesService } from '../../../../services/allergies.service';

import { Meal } from '../../../../models/meal';
import { AllergyCheckboxes } from '../../../../models/allergycheckboxes';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css'],
  providers: []
})


export class MealFormComponent implements OnInit {
  @Input() meal: Meal;
  @ViewChild('frm') public form: NgForm;
  allergies: AllergyCheckboxes[] = [];
  allDataFetched = false;

  constructor(
    private mealService: MealService,
    private allergiesService: AllergiesService) {
  }

  ngOnInit() {
    this.allergiesService.getAllergies().subscribe((allergies) => {
      this.allergies = allergies['allergies'];
      this.fillCheckboxes();
    });
  }

  fillCheckboxes() {
    if (this.meal) {
      const allergiesNames = [];
      const allergies = this.allergies;
      this.meal.allergies.forEach(function(allergy) {
        allergiesNames.push(allergy.name);
      });
      allergies.forEach(function(allergy) {
        if (allergiesNames.indexOf(allergy.name) !== -1) {
          allergy['checked'] = true;
        } else {
          allergy['checked'] = false;
        }
      });
    }
    this.allDataFetched = true;
  }

  onCheckboxChange(val: boolean, index: number) {
    this.allergies[index]['checked'] = !val;
  }

  getSelectedOptions() {
    return this.allergies
      .filter(opt => opt.checked);
  }

  onSubmit() {
    console.log(this.form.value);
    const formVals = this.form.value;
    formVals['checkedAllergies'] = this.getSelectedOptions();
    return this.mealService.addFood(formVals);
  }

  onUpdate() {
    this.form.value['food_id'] = this.meal['food_id'];
    const formVals = this.form.value;
    formVals['checkedAllergies'] = this.getSelectedOptions();
    return this.mealService.updateFood(formVals);
  }

  clearForm() {
    this.form.reset();
  }
}
