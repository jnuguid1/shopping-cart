import React from 'react';

const ProductCard = (props) => {
  return(
    <div>
      <img src={require(`../assets/${props.image}.png`)} alt={props.name} />
      <p>{props.name}</p>
      <p>${props.price}</p>
      <p>{props.category}</p>
    </div>
  )
};

export default ProductCard;