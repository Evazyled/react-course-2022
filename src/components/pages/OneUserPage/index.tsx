import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type OneUserPagePropsType = {
  userInfo:
    | {
        id: number;
        name: string;
        age: string;
      }
    | undefined;
};

const OneUserPage = ({ userInfo }: OneUserPagePropsType) => {
  console.log(userInfo);

  const navigate = useNavigate();
  const handler = () => {
    navigate('/users', { state: { isOpen: true } });
  };
  return (
    <>
      <h1>User Info</h1>
      <h2>{userInfo?.name}</h2>
      <h3>{userInfo?.age}</h3>
      <br />
      <Link to="/users">НА СПИСОК ПОЛЬЗОВАТЕЛЕЙ</Link>
      <br />
      <button type="button" onClick={handler}>
        НА СПИСОК ПОЛЬЗОВАТЕЛЕЙ кнопка
      </button>
    </>
  );
};

export default OneUserPage;
