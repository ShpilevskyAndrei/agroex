import { createFeatureSelector } from '@ngrx/store';

import { ERROR_PAGE, ErrorPageState } from './error-page.reducer';

//TODO: need to delete this disable eslint in future, when you will have error-page selector.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectGetFeatureState = createFeatureSelector<ErrorPageState>(ERROR_PAGE);
