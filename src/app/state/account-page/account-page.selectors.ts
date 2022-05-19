import { createFeatureSelector } from '@ngrx/store';
import { ACCOUNT_PAGE, AccountPageState } from './account-page.reducer';

//TODO: need to delete this disable eslint in future, when you will have account-page selector.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectGetFeatureState =
  createFeatureSelector<AccountPageState>(ACCOUNT_PAGE);
