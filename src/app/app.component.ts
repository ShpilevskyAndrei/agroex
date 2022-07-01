import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { combineLatest, filter, mergeMap, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { TITLE } from './shared/constants/app-consts';
import { IconSerializeService } from './shared/services/icon-serialize.service';
import { selectUserToken } from './state/registration-page/registration-page.selectors';
import { AppService } from './app.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = TITLE;
  private token$: Observable<string | undefined>;

  constructor(
    private iconSerialize: IconSerializeService,
    private afMessaging: AngularFireMessaging,
    private store: Store,
    private appService: AppService
  ) {
    this.token$ = this.store.select(selectUserToken);
  }

  public ngOnInit(): void {
    this.token$
      .pipe(
        filter(Boolean),
        mergeMap((userToken) =>
          combineLatest([this.afMessaging.requestToken, of(userToken)])
        ),
        filter(
          ([notificationToken, _]: [string | null, string]) =>
            !!notificationToken
        ),
        mergeMap(([notificationToken, userToken]: [string | null, string]) =>
          this.appService.addNotificationToken(userToken, notificationToken)
        ),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
