// Quantity input for product page
import React, {useEffect} from 'react';

const ProductQuantity = ({onInputChange, value}) => {
  useEffect(() => {
    onInputChange(1);
  }, [])

  return (
    <div className='item-quantity'>
      <button 
        type='button'
        onClick={e => onInputChange(value-1)}
      >
        <i className="fa-solid fa-minus fa-xs"></i>
      </button>
      <input
        className='quantity-input' 
        value={value} 
        type='text'
        size={1}
        onChange={e => onInputChange(e.target.value)} 
      />
      <button
        onClick={e => onInputChange(value+1)}
        type='button'
      >
        <i className="fa-solid fa-plus fa-xs"></i>
      </button>
    </div>
  );
};

export default ProductQuantity;