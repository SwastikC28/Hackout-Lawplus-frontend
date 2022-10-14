import axios from 'axios';

export const loginUser = (email, password) => {
  return async dispatch => {
    const login = async () => {
      // axios.post(url[, data[, config]])
      const response = await axios.post('url', {
        email: email,
        password: password,
      });
      return response;
    };

    try {
      const userData = await login();
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
};
