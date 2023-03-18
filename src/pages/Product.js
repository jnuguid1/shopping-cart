import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(props.products.find(item => item.id === id));

  return (
    <div>
      <img src={require(`../assets/${product.image}.png`)} alt='Product'/>
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>CA${product.price}</p>
      <button type='button' onClick={e => props.onAddToCart(product, e)}>
        Add to cart
      </button>
    </div>
  )
};

export default Product;