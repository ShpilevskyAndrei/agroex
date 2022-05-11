import { UserRole, UserRolePossibleKeys } from './user-role';

export const UserRoleConfiguration: Record<UserRole, UserRolePossibleKeys> = {
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
