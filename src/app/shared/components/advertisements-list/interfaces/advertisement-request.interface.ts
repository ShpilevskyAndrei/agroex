import { IAdvertisementInterface } from './advertisement.interface';

export interface IAdvertisementRequestInterface {
  advertisementCount: number | null;
  advertisements: IAdvertisementInterface[];
}
