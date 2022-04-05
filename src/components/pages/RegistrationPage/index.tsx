import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../common/Button';
import Input from '../../common/Form/Input';
import Form from '../../common/Form';
import PasswordInput from '../../common/Form/PasswordInput';
import {
  SetUserEmailAction,
  SetUserNameAction,
  SetUserPasswordAction,
} from '../../../store/action';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState({ value: '', error: false });
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [repeatPassword, setRepeatPassword] = useState({ value: '', error: false });
  const navigate = useNavigate();

  const nameAndEmailValidation = () => {
    if (name.value && email.value) {
      setEmail((prev) => ({ ...prev, error: false }));
      setName((prev) => ({ ...prev, error: false }));
      dispatch(SetUserNameAction(name.value));
      dispatch(SetUserEmailAction(email.value));
    }
    return true;
  };
  const validation = () => {
    if (
      // eslint-disable-next-line operator-linebreak
      (!repeatPassword.value.length || !password.value.length) &&
      (repeatPassword.value.length < 10 || password.value.length < 10)
    ) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      return false;
    }

    if (repeatPassword.value !== password.value) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      return false;
    }
    setPassword((prev) => ({ ...prev, error: false }));
    setRepeatPassword((prev) => ({ ...prev, error: false }));
    dispatch(SetUserPasswordAction(password.value));
    return true;
  };

  const submitHandler = () => {
    if (validation() && nameAndEmailValidation()) {
      console.log('registration');
      navigate('/auth');
    }
  };

  return (
    <Form title="Регистрация">
      <Input value={name} setValue={setName} title="Name" id="name" placeholder="Введите имя" />
      <Input
        value={email}
        setValue={setEmail}
        title="Email"
        id="email"
        placeholder="Введите почту"
      />
      <PasswordInput
        value={password}
        setValue={setPassword}
        title="Password"
        id="password"
        placeholder="Введите пароль"
        validation={validation}
      />
      <PasswordInput
        value={repeatPassword}
        setValue={setRepeatPassword}
        title="Repeat Password"
        id="repeatPassword"
        placeholder="Повторите пароль"
        validation={validation}
      />
      {password.error && (
        <div>
          Пароль должен содержать больше 10 символов
          <div>Пароли должны совпадать</div>
        </div>
      )}
      <Button title="Регистрация" onClick={submitHandler} />
    </Form>
  );
};
export default RegistrationPage;
