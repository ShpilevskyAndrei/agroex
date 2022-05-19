import { createFeatureSelector } from '@ngrx/store';

import { LOGIN_PAGE, LoginPageState } from './login-page.reducer';

//TODO: need to delete this disable eslint in future, when you will have login-page selector.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectGetFeatureState = createFeatureSelector<LoginPageState>(LOGIN_PAGE);
