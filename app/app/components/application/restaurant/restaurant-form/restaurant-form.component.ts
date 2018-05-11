import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurant } from '../../../../models/restaurants';
import { RestaurantService } from '../../../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  @Input() restaurant: Restaurant;
  @ViewChild('frm') public form: NgForm;

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const formVals = this.form.value;
    return this.restaurantService.addRestaurant(formVals);
  }

  onUpdate() {
    this.form.value['id'] = this.restaurant['id'];
    const formVals = this.form.value;
    return this.restaurantService.updateRestaurant(formVals);
  }

  clearForm() {
    this.form.reset();
  }

}
