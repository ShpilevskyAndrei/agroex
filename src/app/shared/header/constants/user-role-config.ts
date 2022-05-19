import { UserRole } from '../enums/user-role';
import { ILoggedRoleOption } from '../interfaces/logged-role-option.interface';

export const LOGGED_ROLE_CONFIG: Record<
  Exclude<UserRole, 'Guest'>,
  ILoggedRoleOption
> = {
  [UserRole.User]: {
    src: '../../../assets/user.png',
  },
  [UserRole.Admin]: {
    src: '../../../assets/admin.png',
  },
  [UserRole.Moderator]: {
    src: '../../../assets/admin.png',
  },
};
