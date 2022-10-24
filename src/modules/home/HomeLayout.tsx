import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppHeader from '../../application/components/AppHeader/AppHeader';
import './HomeLayout.scss';
const HomeLayout = () => {
  const loginStatus = useSelector(
    (state: { authReducer: { logginIn: boolean } }) =>
      state.authReducer.logginIn
  );
  return (
    <div className="home-layout">
      {loginStatus ? (
        <>
          <AppHeader />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};
export default HomeLayout;
