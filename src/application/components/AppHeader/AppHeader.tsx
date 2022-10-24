import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/auth/actions/Login.action';
import './AppHeader.scss';

const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const closeSesion = () => {
    dispatch(loginAction(false));
    navigate('/login');
  };

  return (
    <div className="app-header flex-between-center">
      <div className="app-header__logo flex-start-center">Grupo nach</div>
      <div className="app-header__links flex-end-center">
        <div className="link" onClick={() => navigate('/employees')}>
          Employees
        </div>
        /
        <div className="link" onClick={() => navigate('/upload')}>
          Upload
        </div>
        /{' '}
        <div className="link" onClick={() => closeSesion()}>
          Exit
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
