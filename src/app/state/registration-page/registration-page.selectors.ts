import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserRole } from 'src/app/shared/interfaces/user.interface';

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
  }
  if (
    state.user?.userRoles?.find(
      (roles: IUserRole) => roles.role_id === UserRole.Admin
    )
  ) {
    return UserRole.Admin;
  }
  if (
    state.user?.userRoles?.find(
      (roles: IUserRole) => roles.role_id === UserRole.Moderator
    )
  ) {
    return UserRole.Moderator;
  }
  return UserRole.User;
});
