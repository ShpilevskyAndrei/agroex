import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../shared/interfaces/user.interface';
import { Store } from '@ngrx/store';
import { selectUserData } from '../../state/registration-page/registration-page.selectors';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';

@Component({
  selector: 'app-advertisement-card-container',
  template: `<app-advertisement-card
    [user]="user$ | async"
    (logout)="onLogout()"
  ></app-advertisement-card>`,
})
export class AdvertisementCardContainerComponent {
  public user$: Observable<IUser | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUserData);
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }
}
