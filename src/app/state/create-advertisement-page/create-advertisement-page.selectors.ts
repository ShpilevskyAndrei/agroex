import { createFeatureSelector } from '@ngrx/store';
import {
  CREATE_ADVERTISEMENT_PAGE,
  CreateAdvertisementPageState,
} from './create-advertisement-page.reducer';

//TODO: need to delete this disable eslint in future, when you will have create-advertisement-page selector.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectGetFeatureState =
  createFeatureSelector<CreateAdvertisementPageState>(
    CREATE_ADVERTISEMENT_PAGE
  );
