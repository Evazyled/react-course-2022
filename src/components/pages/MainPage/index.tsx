import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { data } from '../../../helpers';
import UserList from './UserList';
import Button from '../../common/Button';

type MainPagePropsType = {
  userData: any[];
};

const MainPage = ({ userData }: MainPagePropsType) => {
  useEffect(() => console.log('MAIN_PAGE - MOUNT'), []);

  // const { state } = useLocation() as { state: { isOpen: boolean } };
  const location: any = useLocation();
  const [listVisible, setListVisible] = useState(false);
  const handler = () => {
    setListVisible((prev) => !prev);
  };
  useEffect(() => {
    if (location?.state?.isOpen) {
      setListVisible(true);
    }
  }, [location?.state?.isOpen]);

  console.log(location);

  return (
    <>
      <h1>User list</h1>
      {userData.length ? (
        <>
          {listVisible ? <UserList data={userData} /> : <h2>список скрыт</h2>}
          <Button title={listVisible ? 'Скрыть список' : 'Показать список'} onClick={handler} />
        </>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};
export default MainPage;
