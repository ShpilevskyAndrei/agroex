export interface IUser {
  email: string;
  username?: string;
  phone?: string;
  password: string;
}

export type ApiUser = Record<string, IUser>;
