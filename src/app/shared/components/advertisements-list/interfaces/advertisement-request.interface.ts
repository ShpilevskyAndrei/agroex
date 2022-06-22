import {
  IAdvertisementInterface,
  IMyBetInterface,
} from './advertisement.interface';

export interface IAdvertisementRequestInterface {
  advertisementCount: number | null;
  advertisements: IAdvertisementInterface[];
}

export interface IMyBetsRequestInterface {
  advertisementCount: number | null;
  advertisements: IMyBetInterface[];
}
