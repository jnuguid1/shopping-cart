import React from 'react';
import ItemQuantity from './ItemQuantity';

const CartItem = (props) => {
  const item = props.item;
  const quantity = props.item.quantity;

  return (
    <div className='cart-item'>
      <img 
        src={require(`../assets/${item.image}.png`)}
        alt={item.name}
        height={160}
        width={160}
      />
      <p>{item.name}</p>
      <p>${item.price}</p>
      <p>{item.category}</p>
      <button 
        type='button'
        onClick={e => props.onRemoveFromCart(item, e)}   
      >
        Remove
      </button>
      <ItemQuantity
        quantity={quantity}
        onQuantityIncrement={props.onQuantityIncrement}
        onQuantityDecrement={props.onQuantityDecrement}
        onQuantityChange={props.onQuantityChange}
        item={item}
      />
    </div>
  );
};

export default CartItem;