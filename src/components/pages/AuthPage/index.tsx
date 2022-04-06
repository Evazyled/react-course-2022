import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SetUserPasswordAction, SetUserEmailAction } from '../../../store/action';
import { GetUserName } from '../../../store/selectors';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';

const AuthPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [hasError, setHasError] = useState(false);
  const submitHandler = () => {
    if (password.value.length >= 10) {
      setHasError(false);

      dispatch(SetUserEmailAction(email.value));
      dispatch(SetUserPasswordAction(password.value));
      console.log({ email, password });
    } else {
      setHasError(true);
      console.log('Error');
    }
  };

  useEffect(() => {
    if (password.value.length > 10) {
      setHasError(false);
    } else if (password.value.length > 0) {
      setHasError(true);
    }
  }, [password]);

  return (
    <Form title="Авторизация">
      <Input
        title="Email"
        id="email"
        placeholder="Введите почту"
        value={email}
        setValue={setEmail}
      />
      <Input
        title="Password"
        id="password"
        placeholder="Введите пароль"
        value={password}
        setValue={setPassword}
        type="password"
      />
      {hasError && (
        <div>
          <span>Пароль должден быть больше 10 символов</span>
        </div>
      )}

      <Button title="Войти" onClick={submitHandler} />
    </Form>
  );
};

export default AuthPage;
