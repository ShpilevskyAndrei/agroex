import { IAdvertisementBetInterface } from '../../../interfaces/advertisement-bet.interface';

export interface BetModalDataInterface {
  bet: string | undefined;
  price: string;
  currency: string;
  actualBet: IAdvertisementBetInterface[];
  unit: string;
  quantity: string;
}
