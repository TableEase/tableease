import { Component, ElementRef, Input, NgZone, OnInit } from '@angular/core';
import {} from 'googlemaps';
import { Marker } from '../../../models/marker';
import { Restaurant } from '../../../models/restaurants';
import { RestaurantService } from '../../../services/restaurant.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public markers: Marker[] = [];
  @Input() restaurants: Restaurant[];
  public allDataFetched = false;
  infoWindowOpened = null;


  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    // set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // set current position
    this.setCurrentPosition();
    this.setMarkers();
  }

  setMarkers() {
    this.markers = [];
    const markers = this.markers;
    this.restaurants.forEach(function(restaurant) {
      if (restaurant.meals.length > 0) {
        markers.push({
          name: restaurant['name'], address: restaurant['address'], phone_number: restaurant['phone_number']
        });
      }
    });
    this.allDataFetched = true;
  }

  clickedMarker(label: string, infoWindow, index: number) {
    if (this.infoWindowOpened === infoWindow) {
      return;
    }

    if (this.infoWindowOpened !== null) {
      this.infoWindowOpened.close();
    }
    this.infoWindowOpened = infoWindow;
  }

  mapClicked() {
    this.infoWindowOpened.close();
  }


  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
