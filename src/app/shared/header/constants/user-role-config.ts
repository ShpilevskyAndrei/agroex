import { UserRole } from '../enums/user-role';
import { RoleOptions } from '../interfaces/role-options';

export const USER_ROLE_CONFIG: Record<UserRole, RoleOptions> = {
  [UserRole.Guest]: {
    point: 'Log in',
    srcLogin: '../../../assets/guest.png',
  },
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
