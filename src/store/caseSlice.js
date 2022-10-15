import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const caseSlice = createSlice({
  name: 'Case',
  initialState,
  reducers: {
    replaceCase(state, action) {},
    addCase(state, action) {
      state.unshift(action.payload);
    },

    removeCase(state, action) {
      state = state.filter(c => {
        return c.id !== action.payload;
      });
    },
  },
});
