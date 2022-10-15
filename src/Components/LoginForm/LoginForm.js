import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/auth-actions';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dispatch Actions
  const dispatch = useDispatch();
  const onSubmitHandler = () => {
    dispatch(loginUser(email, password));
  };

  return (
    <>
      <h1>Swastik</h1>
    </>
  );
};

export default LoginForm;
