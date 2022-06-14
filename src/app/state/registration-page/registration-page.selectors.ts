import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserRole } from '../../shared/components/header/enums/user-role';

import {
  REGISTRATION_PAGE,
  RegistrationPageState,
} from './registration-page.reducer';

const selectGetFeatureState =
  createFeatureSelector<RegistrationPageState>(REGISTRATION_PAGE);

export const selectUserLoadingStatus = createSelector(
  selectGetFeatureState,
  (state) => state.registrationLoadingStatus
);

export const selectUserData = createSelector(
  selectGetFeatureState,
  (state) => state.user
);
export const selectUserToken = createSelector(
  selectGetFeatureState,
  (state) => state.user?.token
);
export const selectUserRole = createSelector(selectGetFeatureState, (state) => {
  if (!state.user) {
    return UserRole.Guest;
  } else {
    let userRole = UserRole.User;
    state.user?.userRoles?.forEach((roles) => {
      if (roles.role_id === UserRole.Moderator) {
        userRole = UserRole.Moderator;
      } else if (roles.role_id === UserRole.Admin) {
        userRole = UserRole.Admin;
      }
    });
    return userRole;
  }
});
