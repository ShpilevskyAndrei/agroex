import { UserRole } from '../enums/user-role';
import { ILoggedRoleOption } from '../interfaces/logged-role-option.interface';

export const LOGGED_ROLE_CONFIG: Record<
  Exclude<UserRole, 'Guest' | 1>,
  ILoggedRoleOption
> = {
  [UserRole.Admin]: {
    src: '../../../assets/headphones.svg',
  },
  [UserRole.Moderator]: {
    src: '../../../assets/headphones.svg',
  },
};
