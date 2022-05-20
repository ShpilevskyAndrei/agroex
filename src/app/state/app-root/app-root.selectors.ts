import { createFeatureSelector } from '@ngrx/store';
import { APP_ROOT, AppRootState } from './app-root.reducer';

//TODO: need to delete this disable eslint in future, when you will have app-root selector.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectGetFeatureState = createFeatureSelector<AppRootState>(APP_ROOT);
