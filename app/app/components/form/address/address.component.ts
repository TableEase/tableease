import { Component, ElementRef, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Address } from '../../../models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @ViewChild('search') public searchElementRef: ElementRef;
  @Input('address') public address: Address;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.address = { address: place.formatted_address, lat: place.geometry.location.lat(), lon: place.geometry.location.lng() };
        });
      });
    });
  }
}
