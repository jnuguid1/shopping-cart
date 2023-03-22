import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductQuantity from '../components/ProductQuantity';

const Product = (props) => {
  const { id } = useParams();
  const [product] = 
    useState(props.products.find(item => item.id === id));

  return (
    <div className='page product-page'>
      <img 
        src={require(`../assets/${product.image}`)} 
        alt='Product'
        height={400}  
        width={400}
      />
      <div className='product-info'>
        <h2>{product.name}</h2>
        <p className='category'>{product.category}</p>
        <p className='price'>CA${(product.price).toFixed(2)}</p>
        <ProductQuantity
          onInputChange={props.onQuantityChange}  
          value={props.quantityInput}
        />
        <button 
          type='button'
          onClick={e => props.onAddToCart(product, e)}
          className='action-button'
        >
          Add to cart
        </button>
      </div>
    </div>
  )
};

export default Product;