import React from 'react';

const ItemQuantity = (props) => {
  return (
    <div className='item-quantity'>
      <p>Quantity </p>
      <button 
        type='button'
        onClick={e => props.onQuantityDecrement(props.item, e)}
      >
        -
      </button>
      <input 
        value={props.item.input} 
        type='text'
        onChange={e => props.onQuantityChange(props.item, e)} 
      />
      <p data-testid='quantity'>{props.quantity}</p>
      <button
        onClick={e => props.onQuantityIncrement(props.item, e)}
        type='button'
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;