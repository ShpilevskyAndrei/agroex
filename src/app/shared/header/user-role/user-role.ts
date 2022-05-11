enum UserRole {
  Guest = 'Guest',
  User = 'User',
  Admin = 'Admin',
}

interface UserRolePossibleKeys {
  point: string;
  src: string;
  newNavPoint?: string;
}

export { UserRole, UserRolePossibleKeys };
