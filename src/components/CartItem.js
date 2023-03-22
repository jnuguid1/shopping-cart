import React from 'react';
import ItemQuantity from './ItemQuantity';

const CartItem = (props) => {
  const item = props.item;
  const quantity = props.item.quantity;

  return (
    <div className='cart-item'>
      <img 
        src={require(`../assets/${item.image}`)}
        alt={item.name}
        height={160}
        width={160}
      />
      <div className='cart-item-info'>
        <p>{item.name}</p>
        <div className='info-row'>
          <p className='category'>{item.category}</p>
          <p className='price'>${item.price}</p>
        </div>
        <ItemQuantity
          quantity={quantity}
          onQuantityIncrement={props.onQuantityIncrement}
          onQuantityDecrement={props.onQuantityDecrement}
          onQuantityChange={props.onQuantityChange}
          item={item}
        />
        <button
          className='generic-button'
          type='button'
          onClick={e => props.onRemoveFromCart(item, e)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;