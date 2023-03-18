import React from 'react';
import ProductsGrid from '../components/ProductsGrid';
import CategoryList from '../components/CategoryList';

const Store = (props) => {

  return (
    <div>
      <h2>Store</h2>
      <CategoryList
        categories={props.categories}
        onCategoryChange={props.onCategoryChange}  
      />
      <ProductsGrid products={props.products} />
    </div>
  );
};

export default Store;