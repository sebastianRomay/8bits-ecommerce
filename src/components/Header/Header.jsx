import "./Header.css";
import React from 'react';

const Header = () => {
  return (
    <>
      {/* Creo mi header */}
      <header className="d-flex justify-content-around align-items-center bg-dark text-white">
        {/* En este div van mis iconos superiores */}
        <div className="d-flex gap-3">
          <i className="bi bi-github icono-header"></i>
          <i className="bi bi-instagram icono-header"></i>
          <i className="bi bi-linkedin icono-header"></i>
        </div>
        {/* En este div van mis enlaces para crear cuenta o loguearse */}
        <div className="d-flex gap-4 align-items-center">
          <a href="#" className="bi bi-person-circle link-header">
            {" "}
            Crear cuenta
          </a>
          <a href="#" className="bi bi-box-arrow-in-right link-header">
            {" "}
            Login
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
