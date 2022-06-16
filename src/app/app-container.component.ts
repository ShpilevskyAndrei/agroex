import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppRootActions } from './state/app-root/app-root.actions';

@Component({
  selector: 'app-root-container',
  template: `<app-root></app-root>`,
})
export class AppContainerComponent implements OnInit {
  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(AppRootActions.getMapRequest());
  }
}
