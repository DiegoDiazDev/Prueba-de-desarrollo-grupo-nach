import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Banner from './components/banner/Banner';
import LoginForm from './components/loginForm/LoginForm';
import './LoginLayout.scss';
const LoginLayout = () => {
  const loginStatus = useSelector(
    (state: { authReducer: { logginIn: boolean } }) =>
      state.authReducer.logginIn
  );
  return (
    <>
      {!loginStatus ? (
        <div className="login-layout flex">
          <div className="login-layout__banner">
            <Banner />
          </div>
          <div className="login-layout__login">
            <LoginForm />
          </div>
        </div>
      ) : (
        <Navigate to="/employees" />
      )}
    </>
  );
};

export default LoginLayout;
