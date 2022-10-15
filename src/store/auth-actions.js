import axios from 'axios';
import { authActions } from './auth-slice';

export const loginUser = (email, password) => {
  return async dispatch => {
    const loginRequest = async () => {
      // axios.post(url[, data[, config]])
      const response = await axios.post('url', {
        email: email,
        password: password,
      });
      return response;
    };

    try {
      const userData = await loginRequest();
      dispatch(authActions.login());
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerUser = data => {
  return async dispatch => {
    const registerRequest = async () => {
      const response = await axios.post('url', data);
      return response;
    };

    try {
      const userData = await registerRequest();
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
};
