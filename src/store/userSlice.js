import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
  email: '',
  role: '',
};
const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    replaceUserData(state, action) {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
