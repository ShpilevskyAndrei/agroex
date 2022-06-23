import {
  IAdvertisementInterface,
  IMyBetInterface,
} from './advertisement.interface';

export interface IAdvertisementRequestInterface {
  advertisementCount: number | null;
  advertisements: IAdvertisementInterface[] | null | undefined;
}

export interface IMyBetsInterface {
  advertisementCount: number | null;
  advertisements: IMyBetInterface[];
}
