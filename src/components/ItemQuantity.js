import React from 'react';

const ItemQuantity = ({
  onQuantityChange, onQuantityDecrement, onQuantityIncrement, item
}) => {
  return (
    <div className='item-quantity'>
      <button 
        type='button'
        onClick={e => onQuantityDecrement(item, e)}
      >
        <i className="fa-solid fa-minus fa-xs"></i>
      </button>
      <input
        className='quantity-input'
        value={item.input} 
        type='text'
        size={1}
        onChange={e => onQuantityChange(item, e)}
        data-testid='quantity'
      />
      <button
        onClick={e => onQuantityIncrement(item, e)}
        type='button'
      >
        <i className="fa-solid fa-plus fa-xs"></i>
      </button>
    </div>
  );
};

export default ItemQuantity;