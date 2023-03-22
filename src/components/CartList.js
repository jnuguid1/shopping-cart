import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
  const hasItems = props.items.length > 0;

  return (
    <>
      { hasItems ?
        <ul className='cart-list'>
          {props.items.reverse().map(item => {
            return (
              <li key={item.id}>
                <CartItem
                  item={item}
                  onQuantityIncrement={props.onQuantityIncrement}
                  onQuantityDecrement={props.onQuantityDecrement}
                  onQuantityChange={props.onQuantityChange}
                  onRemoveFromCart={props.onRemoveFromCart}
                />
                <hr />
              </li>
            )
          })}
        </ul>
        : <p className='cart-empty'>Your cart is empty</p>
      }
    </>
  );
};

export default CartList;