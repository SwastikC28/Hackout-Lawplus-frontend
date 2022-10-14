import authSlice from './auth-slice';
import uiSlice from './ui-slice';
import userSlice from './userSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
