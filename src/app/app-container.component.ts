import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { LoadingStatus } from './shared/interfaces/loading-status';
import { AppRootActions } from './state/app-root/app-root.actions';
import { selectAppRootLoadingStatus } from './state/app-root/app-root.selectors';

@Component({
  selector: 'app-root-container',
  template: ` <app-root
    [appRootLoadingStatus]="appRootLoadingStatus$ | async"
  ></app-root>`,
})
export class AppContainerComponent implements OnInit {
  public appRootLoadingStatus$: Observable<LoadingStatus | null>;

  constructor(private store: Store, private spinner: NgxSpinnerService) {
    this.appRootLoadingStatus$ = this.store.select(selectAppRootLoadingStatus);
  }

  public ngOnInit(): void {
    this.store.dispatch(AppRootActions.getAppRootRequest());
    this.spinner.show();
  }
}
