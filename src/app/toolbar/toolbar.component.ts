import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  locationsItem: any = [];
  branchItems: any = [];
  constructor(private locations: LocationService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(data?) {
    this.locations.getLocations().subscribe((data) => {
      const newData = {
        name: 'Select Location',
        children: [],
      };
      const locations = [];
      for (let ele of data.locations) {
        const d = {
          ...ele,
          children: ele.branches,
        };
        locations.push(d);
      }
      newData.children = locations;
      this.locationsItem.push(newData);
    });
  }
}
