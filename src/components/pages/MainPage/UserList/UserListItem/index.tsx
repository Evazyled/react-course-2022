import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

type UserListItemPropsType = {
  name: string;
};

const UserListItem = ({ name }: UserListItemPropsType) => {
  useEffect(() => console.log('USER_LIST_ITEM - MOUNT'), []);
  return (
    <Link to={name}>
      <li>
        <h3>{name}</h3>
      </li>
    </Link>
  );
};

export default UserListItem;
