import { IUserCredentials } from './user-credentials.interfase';

export interface UserApiResponse {
  user: IUser;
}

export interface AuthorizationCombineInfo {
  user: IUserCredentials;
  url: string;
}

export interface IUserRole {
  role_id: number;
  role: {
    description: string;
    id: number;
    value: string;
  };
  user_id?: number;
  id: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  phone: string;
  image: string;
  token?: string;
  userRoles?: IUserRole[];
  banned: boolean;
  banReason: string;
}
