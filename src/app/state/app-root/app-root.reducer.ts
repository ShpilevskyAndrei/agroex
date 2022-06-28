import { createReducer, on } from '@ngrx/store';
import firebase from 'firebase/compat';
import MessagePayload = firebase.messaging.MessagePayload;

import { AppRootActions } from './app-root.actions';
import { LoadingStatus } from '../../shared/interfaces/loading-status';
import { DEFAULT_LOADING_STATUS } from '../../shared/constants/lodaing-default-status';
import { UserPanelOptionId } from '../../shared/components/header/enums/user-panel-option-id';

export interface AppRootState {
  notificationMessage: MessagePayload[];
  selectedOptionId: string;
  mapLoadingStatus: LoadingStatus;
  map: GeoJSON.FeatureCollection<GeoJSON.MultiPolygon> | null;
}

export const APP_ROOT = 'appRoot';

const initialState: AppRootState = {
  selectedOptionId: UserPanelOptionId.MyAccount,
  mapLoadingStatus: DEFAULT_LOADING_STATUS,
  map: null,
  notificationMessage: [],
};

export const APP_ROOT_REDUCER = createReducer(
  initialState,
  on(
    AppRootActions.getNotificationMessage,
    (state, { message }): AppRootState => {
      return {
        ...state,
        notificationMessage: [message, ...state.notificationMessage],
      };
    }
  ),
  on(
    AppRootActions.changeNotificationStatus,
    (state, { message }): AppRootState => {
      const updateNotifications: MessagePayload[] =
        state.notificationMessage.map((notification: MessagePayload) => {
          if (message.data?.id === notification.data?.id) {
            return {
              ...notification,
              data: {
                ...notification.data,
                status: 'visited',
              },
            };
          }

          return notification;
        });

      return {
        ...state,
        notificationMessage: updateNotifications,
      };
    }
  ),
  on(
    AppRootActions.getUserSelectTab,
    (state, { selectedOptionId }): AppRootState => ({
      ...state,
      selectedOptionId,
    })
  ),
  on(
    AppRootActions.getMapRequest,
    (state): AppRootState => ({
      ...state,
      mapLoadingStatus: DEFAULT_LOADING_STATUS,
    })
  ),
  on(
    AppRootActions.getMapSuccess,
    (state, { map }): AppRootState => ({
      ...state,
      map,
      mapLoadingStatus: {
        loading: false,
        loaded: true,
        error: null,
      },
    })
  ),
  on(
    AppRootActions.getMapError,
    (state, { error }): AppRootState => ({
      ...state,
      mapLoadingStatus: { loading: false, loaded: false, error },
    })
  )
);
