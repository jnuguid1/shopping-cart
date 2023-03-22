import React from 'react';
import ProductsGrid from '../components/ProductsGrid';
import CategoryList from '../components/CategoryList';

const Store = (props) => {

  return (
    <div className='page'>
      <h2>Store</h2>
      <div className='store-body'>
        <CategoryList
          categories={props.categories}
          onCategoryChange={props.onCategoryChange}
        />
        <ProductsGrid products={props.products} />
      </div>
    </div>
  );
};

export default Store;