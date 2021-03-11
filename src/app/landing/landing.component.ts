import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  selected: boolean = false;
  currentList: string = 'categories';
  results: any = [];
  menuHeader: any = [];
  lastItemData;

  constructor(
    private router: Router,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.locationService.showData.subscribe((data: any) => {
      this.selected = data.show;
      this.results = data.data;
      this.menuHeader.length = 0;
      this.currentList = 'categories';
    });
    this.router.navigate(['./select/'], {
      queryParams: { branch_id: null },
    });
  }

  menuHeaderAction(value) {
    this.menuHeader = value;
    this.currentList = 'categories';
  }

  subcategoriesAction(value) {
    this.menuHeader.push(value.name);
    this.currentList = 'subCategories';
    this.lastItemData = this.results;
    this.results = value.data;
  }
}
