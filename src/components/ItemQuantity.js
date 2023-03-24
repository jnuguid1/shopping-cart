import React from 'react';

const ItemQuantity = (props) => {
  return (
    <div className='item-quantity'>
      <button 
        type='button'
        onClick={e => props.onQuantityDecrement(props.item, e)}
      >
        <i className="fa-solid fa-minus fa-xs"></i>
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
        <i className="fa-solid fa-plus fa-xs"></i>
      </button>
    </div>
  );
};

export default ItemQuantity;