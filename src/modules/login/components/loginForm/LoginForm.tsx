import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../../../application/store/auth/actions/Login.action';
import './LoginForm.scss';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    mail: '',
    password: ''
  });
  const authenticateUser = () => {
    if (
      formValue.mail === 'test@usertest.com' &&
      formValue.password === 'test'
    ) {
      dispatch(loginAction(true));
      navigate('/employees');
    } else {
      alert('Credenciales incorrectas');
    }
  };
  return (
    <div className="login-form flex">
      <h4 className="login-form__title">Iniciar Sesión</h4>
      <p className="login-form__about">
        Ingresa tu correo electronico y tu contraseña <br />
        para poder acceder a tu cuenta
      </p>
      <form className="login-form__form">
        <div className="login-input">
          <div className="login-input__label">Correo eléctronico</div>
          <div className="login-input__input">
            <input
              value={formValue.mail}
              onChange={(e) =>
                setFormValue({ ...formValue, mail: e.target.value })
              }
              onCopy={(e) => {
                e.preventDefault();
                return false;
              }}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              className="input"
              placeholder="email@email.com"
            />
          </div>
        </div>
        <div className="login-input">
          <div className="login-input__label">Contraseña</div>
          <div className="login-input__input">
            <input
              value={formValue.password}
              onChange={(e) =>
                setFormValue({ ...formValue, password: e.target.value })
              }
              onCopy={(e) => {
                e.preventDefault();
                return false;
              }}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              className="input"
              type="password"
              placeholder="**************"
            />
          </div>
        </div>
        <div
          className="login-button flex-center-center"
          onClick={() => authenticateUser()}>
          Iniciar sesión
        </div>
        <div className="login-link">Olvide mi contraseña</div>
      </form>
    </div>
  );
};

export default LoginForm;
