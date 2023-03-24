import React from 'react';

const ProductCard = (props) => {
  return(
    <div className='product-card'>
      <img 
        src={require(`../assets/${props.image}`)}
        alt={props.name}
        height={340}
        width={360}
      />
      <p className='card-name'>{props.name}</p>
      <p className='card-category'>{props.category}</p>
      <p className='card-price'>${(props.price).toFixed(2)}</p>
    </div>
  )
};

export default ProductCard;