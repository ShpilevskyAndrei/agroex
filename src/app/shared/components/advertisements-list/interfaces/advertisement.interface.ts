import { IUser } from '../../../interfaces/user.interface';
import { IAdvertisementBetInterface } from './advertisement-bet.interface';

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
  userBets: IAdvertisementBetInterface[];
  isConfirmed?: boolean;
  expireAdvert?: string | null;
  moderationComment?: string | null;
  moderationStatus?: 'unmoderated' | 'approved' | 'rejected';
}
