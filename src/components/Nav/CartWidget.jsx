import './NavBar.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
  <>
    <Link to='/carrito' className="bi bi-cart"></Link>
  </>);
  };

export default CartWidget;
