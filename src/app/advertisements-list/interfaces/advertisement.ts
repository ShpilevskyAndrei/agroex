import { IUser } from '../../shared/interfaces/user.interface';

export interface Advertisement {
  id: number;
  title: string;
  slug: string;
  category: string;
  subCategory: string;
  description: string;
  isModerated: boolean;
  price: string;
  currency: string;
  img: string;
  quantity: string;
  unit: string;
  createAt: string;
  updatedAt: string;
  author: IUser;
}
