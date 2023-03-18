import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
  const hasItems = props.items.length > 0;

  return (
    <div>
      { hasItems ?
        <ul className='cart-list'>
          {props.items.map(item => {
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
        : <p>Your cart is empty</p>
      }
    </div>
  );
};

export default CartList;