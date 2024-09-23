import { IUser } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

export interface IAuthState {
  user: null | IUser;
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
      const token = action.payload;
      state.token = token;
      state.user = jwtDecode(token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
