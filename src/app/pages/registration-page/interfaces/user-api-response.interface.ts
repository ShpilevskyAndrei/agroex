import { UserCredentials } from './user.interfase';

export interface UserApiResponse {
  user: IUser;
}

export interface AuthorizationCombineInfo {
  user: UserCredentials;
  url: string;
}

export interface IUserRole {
  role_id: number;
  user_id: number;
  id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IUser {
  banReason: string;
  banned: boolean;
  email: string;
  id: number;
  image: string;
  phone: string;
  token: string;
  userRoles: IUserRole[];
  username: string;
}
