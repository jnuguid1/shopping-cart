import React from 'react';
import ProductCard from './ProductCard';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

const ProductsGrid = (props) => {
  return(
    <div className='items-grid'>
      {props.products.map(product => {
        return (
          <Link key={product.id} to={`/store/${product.id}`}>
            <ProductCard
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          </Link>
        )
      })}
    </div>
  )
};

export default ProductsGrid;