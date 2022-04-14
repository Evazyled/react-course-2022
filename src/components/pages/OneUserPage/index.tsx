import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type OneUserPagePropsType = {
  userInfo: {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
  };
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
      <h2>
        Name:
        {userInfo?.name}
      </h2>

      <h3>
        Status:
        {userInfo?.status}
      </h3>
      <h3>
        Species:
        {userInfo?.species}
      </h3>
      <img alt="avatat" src={userInfo?.image} />
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
