import React from 'react';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';

const CartList = ({
  items,
  onQuantityChange,
  onQuantityDecrement,
  onQuantityIncrement,
  onRemoveFromCart,
  closeDrawer,
}) => {
  const hasItems = items.length > 0;

  return (
    <>
      { hasItems ?
        <ul className='cart-list'>
          {items.reverse().map(item => {
            return (
              <li key={item.id}>
                <CartItem
                  item={item}
                  onQuantityIncrement={onQuantityIncrement}
                  onQuantityDecrement={onQuantityDecrement}
                  onQuantityChange={onQuantityChange}
                  onRemoveFromCart={onRemoveFromCart}
                />
                <hr />
              </li>
            )
          })}
        </ul>
        : <div className='cart-empty'>
            <p>Your cart is empty</p>
            <Link to='/store' onClick={closeDrawer}>
              <p className='small-label' >Continue shopping</p>
            </Link>
          </div>
      }
    </>
  );
};

export default CartList;