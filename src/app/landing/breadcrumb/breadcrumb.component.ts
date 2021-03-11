import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() lastItemData;
  @Input() menuHeader;
  @Output() menuHeaderAction = new EventEmitter();

  rootName: string;

  constructor(
    private router: Router,
    private locationService: LocationService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((value: any) => {
      this.rootName = value.params.root;
    });
  }

  breadCrumbMain() {
    this.router.navigate([], {
      queryParams: {
        name: null,
      },
      queryParamsHandling: 'merge',
    });
    this.locationService.sendData({ show: true, data: this.lastItemData });
    this.menuHeaderAction.emit([]);
  }
}
