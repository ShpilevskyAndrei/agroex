import { createFeatureSelector } from '@ngrx/store';

import {
  REGISTRATION_PAGE,
  RegistrationPageState,
} from './registration-page.reducer';

//TODO: need to delete this disable eslint in future, when you will have registration-page selector.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectGetFeatureState =
  createFeatureSelector<RegistrationPageState>(REGISTRATION_PAGE);
