import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      {/* Este es mi nav traido de bootstrap y modificado */}
        <nav className="navbar navbar-dark d-flex justify-content-center flex-column bg-dark">
          {/* Logo, mas adelante lo voy a crear en png o svg */}
          <a className="navbar-brand logo-nav" href="#">
            8 Bits
          </a>
          {/* Lista con los items del menu */}
          <ul className="navbar-nav d-flex flex-row gap-5 menu-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Carrito
              </a>
            </li>
          </ul>
        </nav>
      
    </>
  );
};

export default NavBar;
