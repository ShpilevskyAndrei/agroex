import {
  IAdvertisementInterface,
  IAdvertisementMyBetInterface,
} from './advertisement.interface';

export interface IAdvertisementRequestInterface {
  advertisementCount: number | null;
  advertisements: IAdvertisementInterface[];
}

export interface IAdvertisementRequestMyBetsInterface {
  advertisementCount: number | null;
  advertisements: IAdvertisementMyBetInterface[];
}
