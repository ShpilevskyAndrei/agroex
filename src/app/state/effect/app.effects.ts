import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AppEffects {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(private actions$: Actions) {}
}
