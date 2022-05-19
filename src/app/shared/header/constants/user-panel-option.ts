import { IUserOptionsType } from '../interfaces/user-options-type.interface';
import { UserPanelOptionId } from '../enums/user-panel-option-id';

export const USER_PANEL_OPTION: IUserOptionsType[] = [
  {
    id: UserPanelOptionId.MyAdvertisements,
    title: 'My Advertisements',
    url: '/Advertisements',
  },
  { id: UserPanelOptionId.MyAccount, title: 'My Account', url: '/Account' },
  {
    id: UserPanelOptionId.EditPersonalDetails,
    title: 'Edit personal details',
    url: '/Details',
  },
  { id: UserPanelOptionId.MyOrders, title: 'My orders', url: '/Orders' },
  { id: UserPanelOptionId.Settings, title: 'Settings', url: '/Settings' },
  {
    id: UserPanelOptionId.ChangePassword,
    title: 'Change password',
    url: '/Password',
  },
  { id: UserPanelOptionId.LogOut, title: 'Logout', url: '' },
];
