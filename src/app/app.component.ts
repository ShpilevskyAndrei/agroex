import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

import { TITLE } from './shared/constants/app-consts';
import { IconSerializeService } from './shared/services/icon-serialize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = TITLE;
  public message: MessagePayload | null = null;

  constructor(
    private iconSerialize: IconSerializeService,
    private afMessaging: AngularFireMessaging
  ) {
    this.afMessaging.requestToken
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      )
      .subscribe();

    this.afMessaging.messages
      .pipe(
        tap((message) => {
          this.message = message;
        })
      )
      .subscribe();
  }
}
