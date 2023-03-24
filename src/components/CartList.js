import React from 'react';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';

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
        : <div className='cart-empty'>
            <p>Your cart is empty</p>
            <Link to='/store' onClick={props.closeDrawer}>
              <p className='small-label' >Continue shopping</p>
            </Link>
          </div>
      }
    </>
  );
};

export default CartList;