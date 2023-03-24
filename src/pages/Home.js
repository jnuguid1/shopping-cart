import React from 'react';
import ProductsGrid from '../components/ProductsGrid';

const Home = ({featuredItems}) => {
  return (
    <>
      {/* <div className='landing-image-section'>
        <img
          src={require('../assets/landing2.jpg')}
          alt='landing'
          className='landing-image'
        />
        <button className='shop-button'>SHOP NOW</button>
      </div> */}
      <div className='page'>
        <h2>Featured Items</h2>
        <ProductsGrid products={featuredItems} />
      </div>
    </>
  );
};

export default Home;