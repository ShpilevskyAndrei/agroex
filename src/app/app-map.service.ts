import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppMapService {
  constructor(private http: HttpClient) {
    this.getMap().subscribe((data) => {
      console.log(data);
    });
  }
  public getMap(): Observable<Object> {
    return this.http.get('../../../assets/map.geojson');
  }
}
