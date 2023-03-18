import React from 'react';
import CartList from '../components/CartList';
import CartSummary from '../components/CartSummary';

const Cart = (props) => {
  return (
    <div>
      <h2>Cart</h2>
      <CartList
        items={props.items}
        onQuantityIncrement={props.onQuantityIncrement}
        onQuantityDecrement={props.onQuantityDecrement}
        onQuantityChange={props.onQuantityChange}
        onRemoveFromCart={props.onRemoveFromCart}
      />
      <CartSummary items={props.items} />
      <button type='button'>Checkout</button>
    </div>
  );
};

export default Cart;