import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    login() {},
    logout() {},
  },
});

export const authActions = authSlice.actions;
export default authSlice;
