import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <>

      {/* Este es mi nav traido de bootstrap y modificado */}
        <nav className="navbar navbar-dark d-flex justify-content-center flex-column bg-dark">
          {/* Logo, mas adelante lo voy a crear en png o svg */}
          <Link className="navbar-brand logo-nav"to='/'>
            8 Bits
          </Link>
          {/* Lista con los items del menu */}
          <ul className="navbar-nav d-flex flex-row gap-5 menu-nav align-items-center  w-100 justify-content-end">
            <li className="mx-5">
            <CartWidget/>
            </li>
          </ul>
          
        </nav>
        
    </>
  );
};

export default NavBar;
