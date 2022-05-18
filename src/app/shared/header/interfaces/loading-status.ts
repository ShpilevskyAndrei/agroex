export interface LoadingStatus {
  loading: boolean;
  loaded: boolean;
}

export const DEFAULT_LOADING_STATUS: LoadingStatus = {
  loading: true,
  loaded: false,
};
