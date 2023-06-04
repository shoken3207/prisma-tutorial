import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/user/User';
import { InitialUser } from '../../types/user/InitialUser';

const initialState: User | InitialUser = {
  id: undefined,
  email: undefined,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    login: (state: User | InitialUser, action: { payload: User }) => {
      state = { ...state, ...action.payload };
      sessionStorage.setItem('user', JSON.stringify(state));
    },
    logout: (state: User | InitialUser) => {
      state = { id: undefined, email: undefined };
      sessionStorage.setItem('user', JSON.stringify(state));
    },
  },
});

export const { login, logout } = userDataSlice.actions;
export default userDataSlice.reducer;
