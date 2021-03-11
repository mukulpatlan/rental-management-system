import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss'],
})
export class SelectLocationComponent implements OnInit {
  @Input() items: any[];
  @ViewChild('childMenu', { static: true }) public childMenu;

  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  openDealer(data) {
    let final = [];
    for (let branch of data.branches) {
      const a = final;
      final = a.concat(branch.categories);
    }
    const unique = final.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    this.router.navigate(['./select/'], {
      queryParams: { dealers_id: data.dealers_id, root: data.name },
    });
    this.locationService.sendData({ show: true, data: unique });
  }

  openBranch(data) {
    this.router.navigate(['./select/'], {
      queryParams: { branch_id: data.branch_id, root: data.name },
    });
    this.locationService.sendData({ show: true, data: data.categories });
  }
}
