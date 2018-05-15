import { Component, ElementRef, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
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
  public restaurants: Restaurant[] = [];
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
    const markers = this.markers;
    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      restaurants['data'].forEach(function(restaurant) {
        markers.push({
          lat: restaurant['lat'],
          lon: restaurant['lon'],
          name: restaurant['name'],
          address: restaurant['address'],
          phone_number: restaurant['phone_number']
        });
      });
      this.allDataFetched = true;
      console.log(markers);
      console.log(this.markers);
    });
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

  mapClicked($event: MouseEvent) {
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
