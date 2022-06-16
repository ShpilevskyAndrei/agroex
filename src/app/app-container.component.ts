import { Component, OnInit } from '@angular/core';
import { MapActions } from './state/map/map.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root-container',
  template: `<app-root></app-root>`,
})
export class AppContainerComponent implements OnInit {
  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(MapActions.getMapRequest());
  }
}
