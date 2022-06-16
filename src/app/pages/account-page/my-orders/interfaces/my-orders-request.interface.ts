import { IAdvertisementInterface } from '../../../../shared/components/advertisements-list/interfaces/advertisement.interface';
import { MyOrdersInfoInterface } from './my-orders-info.interface';

export interface IMyOrdersInterface extends IAdvertisementInterface {
  isConfirmed: boolean;
  moderationComment: null;
  expireAdvert: string;
  orderInfo: MyOrdersInfoInterface;
}
