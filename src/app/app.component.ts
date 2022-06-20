import { Component } from '@angular/core';

import { TITLE } from './shared/constants/app-consts';
import { IconSerializeService } from './shared/services/icon-serialize.service';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { getMessaging, getToken } from '@angular/fire/messaging';
import { environment } from '../environments/environment';
import { mergeMapTo } from 'rxjs';
import { tap } from "rxjs/operators";
import firebase from "firebase/compat";
import MessagePayload = firebase.messaging.MessagePayload;

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
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('Permission granted! Save to the server!', token);
      },
      (error) => {
        console.error(error);
      }
    );

    this.afMessaging.messages
      .pipe(
        tap((message) => {
          this.message = message;
        })
      )
      .subscribe();
  }
}
