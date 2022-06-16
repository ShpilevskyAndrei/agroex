export type MapToggleText = 'Hide map' | 'Show map';
export type MapToggleIcon = 'keyboard_arrow_up' | 'keyboard_arrow_down';

export interface IShownMapConfig {
  isShown: boolean;
  showMapText: MapToggleText;
  hideMapText: MapToggleText;
  iconUp: MapToggleIcon;
  iconDown: MapToggleIcon;
}
