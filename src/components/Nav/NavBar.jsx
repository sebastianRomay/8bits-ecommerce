import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

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
          <ul className="navbar-nav d-flex flex-row gap-5 menu-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to='/productos'>
                Productos
              </Link>
            </li>
            <li>
            <CartWidget/>

            </li>
          </ul>
          
        </nav>
        
    </>
  );
};

export default NavBar;
