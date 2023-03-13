import React, {useState} from 'react';
import ProductsGrid from '../components/ProductsGrid';

const Home = (props) => {
  const itemsArray = [
    {
      name: 'Hayabusa T3 Boxing Gloves',
      price: 199.00,
      category: 'Boxing Gloves',
      image: 'placeholder',
    },
    {
      name: 'Everlast Pro Style Elite Training Gloves',
      price: 32.99,
      category: 'Boxing Gloves',
      image: 'placeholder',
    },
    {
      name: 'Adidas Men\'s HVC 2',
      price: 69.52,
      category: 'Boxing Shoes',
      image: 'placeholder',
    }
  ]

  const [featuredItems, setFeaturedItems] = useState(itemsArray);

  return (
    <div>
      <h2>Featured Items</h2>
      <ProductsGrid products={featuredItems} />
    </div>
  );
};

export default Home;