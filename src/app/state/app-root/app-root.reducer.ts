import { createReducer, on } from '@ngrx/store';

import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';
import { AppRootActions } from './app-root.actions';

export interface AppRootState {
  selectedOptionId: UserPanelOptionId;
}

export const APP_ROOT = 'appRoot';

const initialState = {
  selectedOptionId: UserPanelOptionId.MyAccount,
};

export const APP_ROOT_REDUCER = createReducer(
  initialState,
  on(
    AppRootActions.getUserSelectTab,
    (state, { selectedOptionId }): AppRootState => ({
      ...state,
      selectedOptionId,
    })
  )
);
