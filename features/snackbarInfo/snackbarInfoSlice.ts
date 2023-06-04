import { createSlice } from '@reduxjs/toolkit';

type SnackbarInfoType = { text: string; severity: string };

const initialState: SnackbarInfoType = { text: '', severity: '' };

export const snackbarInfoSlice = createSlice({
  name: 'snackbarInfo',
  initialState,
  reducers: {
    setInfo: (state, action: { payload: SnackbarInfoType }): void => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { setInfo } = snackbarInfoSlice.actions;
export default snackbarInfoSlice.reducer;
