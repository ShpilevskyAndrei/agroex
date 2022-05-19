import { IUser } from './user.interfase';

export interface UserApiResponse {
  user: UserFromApi;
}

export interface AuthorizationCombineInfo {
  user: IUser;
  url: string;
}

export interface UserFromApi {
  username: string;
  email: string;
  password: string;
  phone: string;
  id: number;
  status: string;
  image: string;
  token: string;
}
