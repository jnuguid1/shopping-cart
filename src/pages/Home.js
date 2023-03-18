import React from 'react';
import ProductsGrid from '../components/ProductsGrid';

const Home = ({featuredItems}) => {
  return (
    <div>
      <h2>Featured Items</h2>
      <ProductsGrid products={featuredItems} />
    </div>
  );
};

export default Home;