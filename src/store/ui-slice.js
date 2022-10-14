import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notification: [],
};
const uiSlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    toggleNotification(state, action) {},
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
