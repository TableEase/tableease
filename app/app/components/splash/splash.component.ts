import { Component, OnInit } from '@angular/core';
import { AllergyCheckboxes } from '../../models/allergycheckboxes';
import { AllergiesService } from '../../services/allergies.service';
import { MealService } from '../../services/meal.service';
import { Router } from '@angular/router';
import { Meal } from '../../models/meal';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [AllergiesService]
})
export class SplashComponent implements OnInit {

  allergies: AllergyCheckboxes[] = [];
  meals: Meal[] = [];
  rangeValues: number[] = [];
  allDataFetched = false;


  constructor(private allergiesService: AllergiesService, private mealService: MealService, private router: Router) {
  }

  ngOnInit() {
    this.allergiesService.getAllergies().subscribe((allergies) => {
      this.allergies = allergies['allergies'];
    });
    this.getMenuSetup();
  }

  onCheckboxChange(val: boolean, index: number) {
    this.allergies[index]['checked'] = !val;
  }

  getSelectedOptionNames() {
    return this.allergies
      .filter(opt => opt.checked).map(opt => opt.name);
  }

  getminPrice(meals) {
    const minPrice = Math.min.apply(Math, meals.map(function(item) {
      return item.price;
    }));
    return minPrice;
  }

  getmaxPrice(meals) {
    const maxPrice = Math.max.apply(Math, meals.map(function(item) {
      return item.price;
    }));
    return maxPrice;
  }

  onSearch() {
    this.getMenu();
  }

  getMenu() {
    const selectedNames = this.getSelectedOptionNames();
    this.mealService.getMenu().subscribe((menu) => {
      if (!menu['data'] && menu['messages']) {
        this.router.navigate(['/login']);
      }
      this.meals = menu['data'];
      for (let i = 0; i < this.meals.length; i++) {
        const price = parseInt(this.meals[i].price, 10);
        if (price > this.rangeValues[1] || price < this.rangeValues[0]) {
          this.meals.splice(i, 1);
          i--;
          continue;
        }

        for (let j = 0; j < this.meals[i].allergies.length; j++) {
          if (selectedNames.indexOf(this.meals[i].allergies[j].name) !== -1) {
            this.meals.splice(i, 1);
            i--;
            break;
          }
        }
      }
    });
  }

  getMenuSetup() {
    this.mealService.getMenu().subscribe((menu) => {
      if (!menu['data'] && menu['messages']) {
        this.router.navigate(['/login']);
      }
      this.meals = menu['data'];
      this.rangeValues = [this.getminPrice(this.meals), this.getmaxPrice(this.meals)];
      this.allDataFetched = true;
    });
  }
}
