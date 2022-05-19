export interface UserI {
  email?: string;
  username?: string;
  phonenumber?: string;
  password?: string;
}

export type UserIforBE = Record<string, UserI>;
