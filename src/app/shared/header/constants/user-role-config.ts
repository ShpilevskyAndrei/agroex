import { UserRole } from '../enums/user-role';
import { RoleOptions } from '../interfaces/role-options';

export const USER_ROLE_CONFIG: Record<UserRole, RoleOptions> = {
  [UserRole.Guest]: {
    point: 'LOG IN',
    src: '../../../assets/guest.png',
  },
  [UserRole.User]: {
    point: 'USER NAME',
    src: '../../../assets/user.png',
    newNavPoint: 'User room',
  },
  [UserRole.Admin]: {
    point: 'ADMIN',
    src: '../../../assets/admin.png',
    newNavPoint: 'Moderation room',
  },
};
