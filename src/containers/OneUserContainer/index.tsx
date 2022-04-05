import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../helpers';

import OneUserPage from '../../components/pages/OneUserPage';

const OneUserContainer = () => {
  const { name } = useParams();

  const user = data.find((el) => el.name === name);

  return <OneUserPage userInfo={user} />;
};

export default OneUserContainer;
