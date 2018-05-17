import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurant } from '../../../../models/restaurants';
import { RestaurantService } from '../../../../services/restaurant.service';
import { AddressComponent } from '../../../form/address/address.component';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {
  @Input() restaurant: Restaurant;
  @ViewChild('frm') public form: NgForm;
  @ViewChild(AddressComponent) addressInput: AddressComponent;

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    Object.assign(this.form.value, this.addressInput.address);
    const formVals = this.form.value;
    return this.restaurantService.addRestaurant(formVals);
  }

  onUpdate() {
    Object.assign(this.form.value, this.addressInput.address);
    this.form.value['id'] = this.restaurant['id'];
    const formVals = this.form.value;
    return this.restaurantService.updateRestaurant(formVals);
  }

  clearForm() {
    this.form.reset();
  }

}
