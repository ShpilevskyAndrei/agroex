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
}

export interface IMyBetInterface {
  id: number;
  img: string;
  createAt: string;
  updatedAt: string;
  authorId: number;
  title: string;
  price: string;
  currency: string;
  quantity: string;
  unit: string;
  slug: string;
  category: string;
  subCategory: string | null;
  isModerated: boolean;
  country: string;
  location: string;
  moderationComment: string | null;
  isActive: boolean;
  expireAdvert: string;
  moderationStatus: 'approved' | 'rejected' | 'unmoderated';
  isConfirmed: boolean;
  lastBetInfo: {
    user_id_with_last_bet: number;
    last_bet_value: string;
  };
}
