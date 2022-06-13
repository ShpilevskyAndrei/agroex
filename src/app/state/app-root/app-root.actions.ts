import { createAction, props } from '@ngrx/store';
import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';

export const AppRootActions = {
  getUserSelectTab: createAction(
    '[APP_ROOT] myAccount success',
    props<{ selectedOptionId: UserPanelOptionId }>()
  ),
};
