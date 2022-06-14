import { IUserOptionsType } from '../interfaces/user-options-type.interface';
import { UserPanelOptionId } from '../enums/user-panel-option-id';

export const USER_PANEL_OPTION: IUserOptionsType[] = [
  {
    id: UserPanelOptionId.MyAdvertisements,
    title: 'My Advertisements',
    url: '/Advertisements',
    icon: 'my-ads-icon',
  },
  {
    id: UserPanelOptionId.Betting,
    title: 'Betting',
    url: '/Betting',
    icon: 'auction-icon',
  },
  {
    id: UserPanelOptionId.MyOrders,
    title: 'My orders',
    url: '/Orders',
    icon: 'truck-icon',
  },
  {
    id: UserPanelOptionId.MyAccount,
    title: 'My Account',
    url: '/account',
    icon: 'account-icon',
  },
  {
    id: UserPanelOptionId.LogOut,
    title: 'Logout',
    url: '',
    icon: 'logout-icon',
  },
];
