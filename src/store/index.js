import authSlice from './auth-slice';
import uiSlice from './ui-slice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: { auth: authSlice.reducer, ui: uiSlice.reducer },
});

export default store;
