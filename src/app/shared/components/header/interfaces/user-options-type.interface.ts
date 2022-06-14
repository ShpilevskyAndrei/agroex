import { UserPanelOptionId } from '../enums/user-panel-option-id';

export interface IUserOptionsType {
  id: UserPanelOptionId;
  title: string;
  url: string;
  icon: string;
}
