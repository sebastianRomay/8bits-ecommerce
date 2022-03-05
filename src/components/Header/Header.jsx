import "./Header.css";
import React from 'react';

const Header = () => {
  return (
    <>
      {/* Creo mi header */}
      <header className="d-flex justify-content-md-start justify-content-center align-items-center bg-dark text-white">
        <div className="d-flex gap-3 mx-5">
         <a href="https://github.com/sebastianRomay" > <i className="bi bi-github icono-header"></i></a>
         <a href="https://instagram.com/sebastian_agustin" > <i className="bi bi-instagram icono-header"></i></a>
         <a href="https://linkedin.com/in/sebastianromay" > <i className="bi bi-linkedin icono-header"></i></a>
        </div>
      </header>
    </>
  );
};

export default Header;
