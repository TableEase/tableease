import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Location } from '../../../../models/location';
import { Restaurant } from '../../../../models/restaurants';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit, OnChanges {
  @Input() restaurant: Restaurant;
  @Input() user: User;
  restForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  ngOnChanges() {
    this.rebuildForm();
  }

  createForm() {
    this.restForm = this.fb.group({
      uid: '',
      rid: '',
      name: '',
      phone: '',
      primary: '',
      active: true,
      locations: this.fb.array([])
    });

    this.locations.push(this.fb.group(new Location()));
  }

  rebuildForm() {
    if (this.restaurant) {
      this.restForm.reset({
        name: this.restaurant.name,
        phone: this.restaurant.phone
      });
      this.setLocations(this.restaurant.locations);
    }

    if (this.user) {
      this.restForm.patchValue({
        uid: this.user.uid
      });
    }
  }

  get locations(): FormArray {
    return this.restForm.get('locations') as FormArray;
  }

  setLocations(locations: Location[]) {
    const locationFGs = locations.map(location => this.fb.group(location));
    const locationFormArray = this.fb.array(locationFGs);
    this.restForm.setControl('locations', locationFormArray);
  }

  onSubmit() {
    this.restForm.patchValue({
      rid: this.restForm.get('name').value
    });
    const restaurant = this.restForm.getRawValue();
    console.log(restaurant);
  }

  addLocation() {
    console.log('In Add Location', this.user);
    this.locations.push(this.fb.group(new Location()));
  }
}
