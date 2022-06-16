import { IAdvertisementBetInterface } from '../../../shared/components/advertisements-list/interfaces/advertisement-bet.interface';
import { IUser } from '../../../shared/interfaces/user.interface';

export interface IAdvertisementInterface {
  id: number;
  title: string;
  country: string;
  location: string;
  slug: string;
  category: string;
  subCategory: string | null;
  isModerated: boolean;
  isActive: boolean;
  price: string;
  currency: string;
  img: string;
  quantity: string;
  unit: string;
  createAt: string;
  updatedAt: string;
  author: IUser;
  moderationComment?: string | null;
  userBets: IAdvertisementBetInterface[];
}

export interface IAdvertisementModerationInterface {
  slug: string;
  moderationStatus: 'approved' | 'rejected';
  moderationComment: string | null;
}

export interface IAdvertisementModerationRequest {
  advertisements: IAdvertisementModerationInterface;
}
