import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/auth-actions';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // Dispatch Actions Using this
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    const data = { email, password, phone };
    dispatch(registerUser(data));
  };

  return <></>;
};

export default RegisterForm;
