import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  @Input() results: any;
  @Input() currentList: string;

  @Output() subcategoriesAction = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openSubcategories(data) {
    this.currentList = 'subCategories';
    this.router.navigate([], {
      queryParams: {
        name: data.name,
      },
      queryParamsHandling: 'merge',
    });
    this.subcategoriesAction.emit({
      name: data.name,
      data: data.subcategories,
    });
  }
}
