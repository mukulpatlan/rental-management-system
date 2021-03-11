import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public showData = new BehaviorSubject(0);
  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http
      .get('assets/catalog.json')
      .pipe(map((resp: any) => resp.data));
  }

  sendData(data) {
    this.showData.next(data);
  }
}
