import { UserCredentials } from './user.interfase';

export interface UserApiResponse {
  user: IUser;
}

export interface AuthorizationCombineInfo {
  user: UserCredentials;
  url: string;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
  phone: string;
  id: number;
  status: string;
  image: string;
  token: string;
}
