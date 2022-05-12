import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AppEffects {
  /*TODO Delete ES Lint Ignore after implementing state manager basic components*/

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(private actions$: Actions) {}
}
