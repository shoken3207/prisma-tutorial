import { configureStore } from '@reduxjs/toolkit';
import snackbarIsShowReducer from '../features/snackbarIsShow/snackbarIsShowSlice';
import snackbarInfoReducer from '../features/snackbarInfo/snackbarInfoSlice';
import loadingIsShowReducer from '../features/loadingIsShow/loadingIsShowSlice';
import userDataReducer from '../features/userData/userDataSlice';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux/es/exports';

export const store = configureStore({
  reducer: {
    snackbarIsShow: snackbarIsShowReducer,
    snackbarInfo: snackbarInfoReducer,
    loadingIsShow: loadingIsShowReducer,
    userData: userDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
