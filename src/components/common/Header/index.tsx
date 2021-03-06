import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ClearUserNameAction } from '../../../store/auth/action';

import { GetUserEmail, GetUserName } from '../../../store/auth/selectors';
import Button from '../Button';

import style from './Header.module.scss';

const Header = () => {
  const name = useSelector(GetUserName);
  const email = useSelector(GetUserEmail);
  const dispatch = useDispatch();

  return (
    <header className={style.header}>
      <h1>Header</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}>
            main
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth"
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}>
            auth
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/registration"
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}>
            registration
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}>
            users
          </NavLink>
        </li>
      </ul>
      <div>
        {email ? (
          <div className={style.user_info}>
            <h2>{email}</h2>
            <Button title=" LOG OUT" onClick={() => dispatch(ClearUserNameAction())} />
          </div>
        ) : (
          'NO AUTH'
        )}
      </div>
    </header>
  );
};

export default Header;
