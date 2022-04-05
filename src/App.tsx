/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';
import PageWrapper from './components/common/PageWrapper';
import OneUserContainer from './containers/OneUserContainer';
import AuthHOC from './components/hoc/AuthHoc';

const App = () => {
  console.log('APP => start');

  useEffect(() => console.log('APP - MOUNT'), []);
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route
          index
          element={
            <AuthHOC>
              <h1>MAIN PAGE</h1>
            </AuthHOC>
          }
        />
        <Route
          path="users"
          element={
            <AuthHOC>
              <MainContainer />
            </AuthHOC>
          }
        />
        <Route path="users-page" element={<Navigate to="/users" replace />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route
          path="users/:name"
          element={
            <AuthHOC>
              {' '}
              <OneUserContainer />
            </AuthHOC>
          }
        />
        <Route path="registration" element={<RegistrationContainer />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
