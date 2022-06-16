import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppMapService {
  constructor(private http: HttpClient) {}

  public getMap(): Observable<GeoJSON.FeatureCollection<GeoJSON.MultiPolygon>> {
    return this.http.get<GeoJSON.FeatureCollection<GeoJSON.MultiPolygon>>(
      'assets/map.geojson'
    );
  }
}
