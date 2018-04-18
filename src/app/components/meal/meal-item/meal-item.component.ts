import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../../../models/meal';
import { MealsService } from '../../../services/meals.service';
import { AllergiesService } from '../../../services/allergies.service';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.css']
})
export class MealItemComponent implements OnInit {
  @Input() meal: Meal;

  @Output() doEdit = new EventEmitter<Event>();
  @Output() toDetail = new EventEmitter<string>();

  editState = false;

  constructor(
    private mealsService: MealsService,
    private allergiesService: AllergiesService
  ) {}

  ngOnInit() {}

  editMeal(event: Event, meal: Meal) {
    this.doEdit.emit(event);
    this.toDetail.emit(meal.id);
    this.editState = true;
  }
}
