import { IDecodedUser } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  user: null | IDecodedUser;
  token: null | string;
}

const initialState: IAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user || state.user;
      state.token = action.payload.token || state.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
