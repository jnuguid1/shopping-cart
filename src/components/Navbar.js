import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({cartItems}) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    const quantities = cartItems.map(item => item.quantity);
    setItemQuantity(quantities.reduce((sum, quantity) => sum + quantity, 0));
  }, [cartItems])

  return (
    <nav className='nav-bar'>
      <Link to='/'>
        <h1>The Armory</h1>
      </Link>
      <ul className='nav-list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/store'>Store</Link>
        </li>
        <li className='cart-link'>
          <Link to='/cart'>
            <p className='quantity-label'>{itemQuantity}</p>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;