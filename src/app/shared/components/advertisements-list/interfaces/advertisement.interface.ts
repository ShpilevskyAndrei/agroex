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
  authorId?: number;
  lastBetInfo?: {
    user_id_with_last_bet: number;
    last_bet_value: string;
  };
}

export interface IMyBetInterface extends IAdvertisementInterface {
  authorId: number;
  moderationComment: string | null;
  expireAdvert: string;
  moderationStatus: 'unmoderated' | 'approved' | 'rejected';
  isConfirmed: boolean;
  lastBetInfo: {
    user_id_with_last_bet: number;
    last_bet_value: string;
  };
}

export interface IMyBettingsRequestMap extends IMyBetInterface {
  userBets: IAdvertisementBetInterface[];
  author: IUser;
}
