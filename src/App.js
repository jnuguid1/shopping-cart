import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Store from './pages/Store';
import uniqid from 'uniqid';
import Product from './pages/Product';

const App = () => {
  const gloves = [
    {
      name: 'Hayabusa T3 Boxing Gloves',
      price: 199.00,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Everlast Pro Style Elite Training Gloves',
      price: 32.99,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'UNIQ Khaki Velcro Boxing Gloves',
      price: 102,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'RDX Training Boxing Gloves',
      price: 53.99,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Venum Challenge 2.0 Boxing Gloves',
      price: 68.87,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Verace Black & Gold Boxing Gloves',
      price: 1411,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
    },
  ];

  const shoes = [
    {
      name: 'Adidas Men\'s HVC 2',
      price: 69.52,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Viper Boxing Shoes',
      price: 250,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Everlast Elite Black High Top Boxing Shoes',
      price: 149.99,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'ASICS Matflex 6',
      price: 89.99,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Rival RSX-Genesis Boxing Boots 2.0',
      price: 74.99,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Venum Elite Boxing Shoes',
      price: 150.06,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
    },
  ];

  const groin = [
    {
      name: 'Shock Doctor Core Supporter with Bio-flex Cup',
      price: 25,
      category: 'No-Foul & Groin Protectors',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Hayabusa Steel Armored Cup',
      price: 35,
      category: 'No-Foul & Groin Protectors',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Rival RNFL 10 Pro 360 Protector',
      price: 105,
      category: 'No-Foul & Groin Protectors',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Shock Doctor Ultra Pro Supporter',
      price: 40,
      category: 'No-Foul & Groin Protectors',
      image: 'placeholder',
      id: uniqid(),
    },
  ];

  const headGear = [
    {
      name: 'Rival RHG60 Workout Headgear 2.0',
      price: 65,
      category: 'Head Gear',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Hayabusa T3 Headgear',
      price: 150,
      category: 'Head Gear',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Velo Competition Headgear',
      price: 135,
      category: 'Head Gear',
      image: 'placeholder',
      id: uniqid(),
    },
  ];

  const handWraps = [
    {
      name: 'Rival Mexican Handwraps 180',
      price: 12,
      category: 'Hand Wraps',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Hayabusa Quick Gelwraps',
      price: 30,
      category: 'Hand Wraps',
      image: 'placeholder',
      id: uniqid(),
    },
  ];

  const mouthGuards = [
    {
      name: 'Fox40 Mouthguard',
      price: 3,
      category: 'Mouth Guards',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Leone Topguard Mouth Guard',
      price: 25,
      category: 'Mouth Guards',
      image: 'placeholder',
      id: uniqid(),
    },

    {
      name: 'Hayabusa Combat Mouth Guard',
      price: 20,
      category: 'Mouth Guards',
      image: 'placeholder',
      id: uniqid(),
    },
  ];

  const jumpRope = [
    {
      name: 'Twins SR2 Heavy Jump Rope',
      price: 40,
      category: 'Jump Rope',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Rival Plastic Jump Rope 9FT',
      price: 15,
      category: 'Jump Rope',
      image: 'placeholder',
      id: uniqid(),
    },
    {
      name: 'Ring to Cage Plastic Jump Rope',
      price: 12,
      category: 'Jump Rope',
      image: 'placeholder',
      id: uniqid(),
    },
  ];

  const categories = [
    {name: 'Boxing Gloves', id: 0, products: gloves },
    {name: 'Boxing Shoes', id: 1, products: shoes },
    {name: 'No-Foul & Groin Protectors', id: 2, products: groin },
    {name: 'Head Gear', id: 3, products: headGear },
    {name: 'Hand Wraps', id: 4, products: handWraps },
    {name: 'Mouth Guards', id: 5, products: mouthGuards },
    {name: 'Jump Rope', id: 6, products: jumpRope },
  ];

  const [currentProducts, setCurrentProducts] = useState(gloves);


  const handleCategoryChange = (event) => {
    setCurrentProducts(categories[event.target.getAttribute('id')].products);
  };

  const getCurrentProducts = () => {
    return currentProducts;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            path='/store' 
            element={
              <Store 
                products={currentProducts} 
                categories={categories} 
                onCategoryChange={handleCategoryChange}
              />
            } 
          />
          <Route path='/store/:id' element={<Product products={currentProducts} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;