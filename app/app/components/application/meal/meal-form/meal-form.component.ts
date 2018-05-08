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
  allergiesNames: AllergyCheckboxes[] = [];

  constructor(
    private mealService: MealService,
    private allergiesService: AllergiesService) {
  }

  ngOnInit() {
    this.allergiesService.getAllergies().subscribe((allergies) => {
      this.allergiesNames = allergies['allergies'];
      this.fillForm();
    });
  }

  fillForm() {
    const allergies_names = [];
    if (this.meal) {
      const selectedMeal = this.meal;
      const allergiesNames = this.allergiesNames;

      this.meal.allergies.forEach(function(allergy) {
        allergies_names.push(allergy.name);
      });
      allergiesNames.forEach(function(allergy) {
        if (allergies_names.indexOf(allergy.name) !== -1) {
          allergy['checked'] = true;
        } else {
          allergy['checked'] = false;
        }
      });
    }
  }

  onCheckboxChange(val: boolean, index: number) {
    this.allergiesNames[index]['checked'] = !val;
  }

  getSelectedOptions() { // right now: ['1','3']
    return this.allergiesNames
      .filter(opt => opt.checked);
  }

  onSubmit() {
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
