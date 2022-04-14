import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

type UserListItemPropsType = {
  name: string;
  id: number;
};

const UserListItem = ({ name, id }: UserListItemPropsType) => {
  useEffect(() => console.log('USER_LIST_ITEM - MOUNT'), []);
  return (
    <Link to={`${id}`}>
      <li>
        <h3>{name}</h3>
      </li>
    </Link>
  );
};

export default UserListItem;
