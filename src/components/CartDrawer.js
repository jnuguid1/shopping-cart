import React, {useState, useEffect} from 'react';
import CartList from './CartList';
import { Link } from 'react-router-dom';

const CartDrawer = 
({
  isOpen, 
  items, 
  onQuantityIncrement,
  onQuantityDecrement,
  onQuantityChange,
  onRemoveFromCart,
  toggleDrawer
}) => {

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const prices = items.map(item => item.price*item.quantity);
    setSubtotal(prices.reduce((sum, price) => sum + price, 0));
  }, [items])

  return(
    <div 
      className={`drawer-container ${isOpen ? 'drawer-container-open' : ''}`}
    >
      <h2>Shopping Cart</h2>
      <CartList 
        items={items}
        onQuantityIncrement={onQuantityIncrement}
        onQuantityDecrement={onQuantityDecrement}
        onQuantityChange={onQuantityChange}
        onRemoveFromCart={onRemoveFromCart}
      />
      <p className='subtotal-label'>Subtotal</p>
      <p className='subtotal'>${subtotal.toFixed(2)}</p>
      <button className='action-button' type='button'>Checkout</button>
      <Link to='/cart' onClick={toggleDrawer}>
        <button
          className='secondary-action-button'
          type='button'
        >
          View Cart
        </button>
      </Link>
    </div>
  );
};

export default CartDrawer;