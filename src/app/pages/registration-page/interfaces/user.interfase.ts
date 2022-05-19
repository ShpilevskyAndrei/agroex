export interface IUser {
  email: string;
  username?: string;
  phoneNumber?: string;
  password: string;
}

export type ApiUser = Record<string, IUser>;
