import React from 'react';

const ItemQuantity = (props) => {
  return (
    <div className='item-quantity'>
      <button 
        type='button'
        onClick={e => props.onQuantityDecrement(props.item, e)}
      >
        -
      </button>
      <input
        className='quantity-input' 
        value={props.item.input} 
        type='text'
        size={1}
        onChange={e => props.onQuantityChange(props.item, e)} 
      />
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