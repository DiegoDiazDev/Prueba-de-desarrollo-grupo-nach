import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner flex-center-center">
      <h1 className="banner__title">Grupo Nach</h1>
      <h2 className="banner__sub-title">Prueba de desarrollo frontend dev</h2>
      <p className="banner__about">
        Prueba de desarrollo para la vacante de frontend developer elaborada por
        <br />
        <b>Diego Díaz.</b>
        <br />
        <br />
        www.diegodiaz.rocks
      </p>
      <div className="banner-stack">
        <h3 className="banner-stack__title">
          Contraseñas para poder ingresar al proyecto
        </h3>
        <p className="banner-stack__about">
          Email: test@usertest.com <br />
          Password: test
          <br />
          <br />
          Proyecto desarrollado con react, typescript y sass
        </p>
      </div>
    </div>
  );
};

export default Banner;
