import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';
import { selectUserData } from '../../state/registration-page/registration-page.selectors';
import { IUser } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-advertisement-card-container',
  template: `<app-header [user]="user" (logout)="onLogout()"></app-header>
    <app-breadcrumbs></app-breadcrumbs>
    <app-advertisement-card></app-advertisement-card> `,
})
export class AdvertisementCardContainerComponent {
  @Input() public user: IUser | null;
  public user$: Observable<IUser | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUserData);
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }
}
