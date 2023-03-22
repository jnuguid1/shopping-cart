import React from 'react';
import CartList from '../components/CartList';
import CartSummary from '../components/CartSummary';

const Cart = (props) => {
  return (
    <div className='page'>
      <h2>Cart</h2>
      <div className='cart-body'>
        <div className='cart-section-left'>
          <CartList
            items={props.items}
            onQuantityIncrement={props.onQuantityIncrement}
            onQuantityDecrement={props.onQuantityDecrement}
            onQuantityChange={props.onQuantityChange}
            onRemoveFromCart={props.onRemoveFromCart}
          />
        </div>
        <div className='cart-section-right'>
          <CartSummary items={props.items} />
        </div>
      </div>
    </div>
  );
};

export default Cart;