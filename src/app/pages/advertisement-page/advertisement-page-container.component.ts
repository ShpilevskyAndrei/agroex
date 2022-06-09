import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAdRequestInterface } from '../../advertisements-list/interfaces/ad-request.interface';
import { AdvertisementPageActions } from '../../state/advertisement-page/advertisement-page.actions';
import { IUser } from '../../shared/interfaces/user.interface';
import { selectAdvertisementData } from '../../state/advertisement-page/advertisement-page.selectors';
import { selectUserData } from '../../state/registration-page/registration-page.selectors';
import { RegistrationPageActions } from '../../state/registration-page/registration-page.actions';

@Component({
  selector: 'app-advertisement-page-container',
  template: ` <app-advertisement-page
    [user]="user$ | async"
    [slug]="slug$ | async"
    [advertisement]="advertisement$ | async"
    (logout)="onLogout()"
  ></app-advertisement-page>`,
})
export class AdvertisementPageContainerComponent implements OnInit {
  public slug$: Observable<string | null>;
  public advertisement$: Observable<IAdRequestInterface | null>;
  public user$: Observable<IUser | null>;
  public slug: string | null;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.user$ = this.store.select(selectUserData);
    this.slug$ = route.params.pipe(map((p) => p.slug));
    // this.slug = route.paramMap.subscribe((params) => {
    //   this.slug$ = params.get('slug');
    // });
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.advertisement$ = this.store.select(selectAdvertisementData);
  }

  public onLogout(): void {
    this.store.dispatch(RegistrationPageActions.getUserLogout());
  }

  public ngOnInit(): void {
    this.store.dispatch(
      AdvertisementPageActions.getAdvertisementRequest({
        slug: this.slug,
      })
    );
  }
}
