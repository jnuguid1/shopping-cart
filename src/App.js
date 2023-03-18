import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Store from './pages/Store';
import uniqid from 'uniqid';
import Product from './pages/Product';

const App = () => {
  const [products] = useState([
    {
      name: 'Hayabusa T3 Boxing Gloves',
      price: 199.00,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
      code: 'gloves',
    },
    {
      name: 'Everlast Pro Style Elite Training Gloves',
      price: 32.99,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
      code: 'gloves',
    },
    {
      name: 'UNIQ Khaki Velcro Boxing Gloves',
      price: 102,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
      code: 'gloves',
    },
    {
      name: 'RDX Training Boxing Gloves',
      price: 53.99,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
      code: 'gloves',
    },
    {
      name: 'Venum Challenge 2.0 Boxing Gloves',
      price: 68.87,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
      code: 'gloves',
    },
    {
      name: 'Verace Black & Gold Boxing Gloves',
      price: 1411,
      category: 'Boxing Gloves',
      image: 'placeholder',
      id: uniqid(),
      code: 'gloves',
    },
    {
      name: 'Adidas Men\'s HVC 2',
      price: 69.52,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
      code: 'shoes',
    },
    {
      name: 'Viper Boxing Shoes',
      price: 250,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
      code: 'shoes',
    },
    {
      name: 'Everlast Elite Black High Top Boxing Shoes',
      price: 149.99,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
      code: 'shoes',
    },
    {
      name: 'ASICS Matflex 6',
      price: 89.99,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
      code: 'shoes',
    },
    {
      name: 'Rival RSX-Genesis Boxing Boots 2.0',
      price: 74.99,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
      code: 'shoes',
    },
    {
      name: 'Venum Elite Boxing Shoes',
      price: 150.06,
      category: 'Boxing Shoes',
      image: 'placeholder',
      id: uniqid(),
      code: 'shoes',
    },
    {
      name: 'Shock Doctor Core Supporter with Bio-flex Cup',
      price: 25,
      category: 'No-Foul & Groin Protectors',
      image: 'placeholder',
      id: uniqid(),
      code: 'groin'
    },
    {
      name: 'Hayabusa Steel Armored Cup',
      price: 35,
      category: 'No-Foul & Groin Protectors',
      image: 'placeholder',
      id: uniqid(),
      code: 'groin'
    },
    {
      name: 'Rival RNFL 10 Pro 360 Protector',
      price: 105,
      category: 'No-Foul & Groin Protectors',
      image: 'placeholder',
      id: uniqid(),
      code: 'groin'
    },
    {
      name: 'Shock Doctor Ultra Pro Supporter',
      price: 40,
      category: 'No-Foul & Groin Protectors',
      image: 'placeholder',
      id: uniqid(),
      code: 'groin'
    },
    {
      name: 'Rival RHG60 Workout Headgear 2.0',
      price: 65,
      category: 'Head Gear',
      image: 'placeholder',
      id: uniqid(),
      code: 'headGear',
    },
    {
      name: 'Hayabusa T3 Headgear',
      price: 150,
      category: 'Head Gear',
      image: 'placeholder',
      id: uniqid(),
      code: 'headGear',
    },
    {
      name: 'Velo Competition Headgear',
      price: 135,
      category: 'Head Gear',
      image: 'placeholder',
      id: uniqid(),
      code: 'headGear',
    },
    {
      name: 'Rival Mexican Handwraps 180',
      price: 12,
      category: 'Hand Wraps',
      image: 'placeholder',
      id: uniqid(),
      code: 'handWraps',
    },
    {
      name: 'Hayabusa Quick Gelwraps',
      price: 30,
      category: 'Hand Wraps',
      image: 'placeholder',
      id: uniqid(),
      code: 'handWraps',
    },
    {
      name: 'Fox40 Mouthguard',
      price: 3,
      category: 'Mouth Guards',
      image: 'placeholder',
      id: uniqid(),
      code: 'mouthGuards',
    },
    {
      name: 'Leone Topguard Mouth Guard',
      price: 25,
      category: 'Mouth Guards',
      image: 'placeholder',
      id: uniqid(),
      code: 'mouthGuards',
    },
    {
      name: 'Hayabusa Combat Mouth Guard',
      price: 20,
      category: 'Mouth Guards',
      image: 'placeholder',
      id: uniqid(),
      code: 'mouthGuards',
    },
    {
      name: 'Twins SR2 Heavy Jump Rope',
      price: 40,
      category: 'Jump Rope',
      image: 'placeholder',
      id: uniqid(),
      code: 'jumpRope',
    },
    {
      name: 'Rival Plastic Jump Rope 9FT',
      price: 15,
      category: 'Jump Rope',
      image: 'placeholder',
      id: uniqid(),
      code: 'jumpRope',
    },
    {
      name: 'Ring to Cage Plastic Jump Rope',
      price: 12,
      category: 'Jump Rope',
      image: 'placeholder',
      id: uniqid(),
      code: 'jumpRope',
    },
  ]);

  const getItems = (code) => {
    return products.filter(item => item.code === code);
  }

  const categories = [
    {name: 'Boxing Gloves', id: 0, products: getItems('gloves') },
    {name: 'Boxing Shoes', id: 1, products: getItems('shoes') },
    {name: 'No-Foul & Groin Protectors', id: 2, products: getItems('groin') },
    {name: 'Head Gear', id: 3, products: getItems('headGear') },
    {name: 'Hand Wraps', id: 4, products: getItems('handWraps') },
    {name: 'Mouth Guards', id: 5, products: getItems('mouthGuards') },
    {name: 'Jump Rope', id: 6, products: getItems('jumpRope') },
  ];

  const [featuredItems] = useState([
    getItems('gloves')[0],
    getItems('shoes')[0],
    getItems('headGear')[0],
  ]);


  const [currentProducts, setCurrentProducts] = useState(getItems('gloves'));
  const [cartItems, setCartItems] = useState([]);

  const handleCategoryChange = (event) => {
    setCurrentProducts(categories[event.target.getAttribute('id')].products);
  };

  const handleAddToCart = (product, e) => {
    if (cartItems.find(item => item.id === product.id)) {
      setCartItems(cartItems.map(item => {
        if (product.id === item.id) {
          return {
            ...item, 
            quantity: item.quantity + 1, 
            input: item.quantity + 1 
          };
        } else {
          return item;
        }
      }));
    } else {
      setCartItems(cartItems.concat({
        ...product,
        quantity: 1,
        input: 1
      }));
    }
  };

  const handleRemoveFromCart = (product, e) => {
    setCartItems(cartItems.filter(item => 
      item.id !== product.id
    ));
  };

  const changeQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(product);
    } else {
      const newItems = cartItems.map(item => {
        if (product.id === item.id && newQuantity !== '') {
          return { ...item, quantity: newQuantity, input: newQuantity };
        } else {
          return item;
        }
      });
      setCartItems(newItems);
    };
  }

  const handleQuantityIncrement = (product, e) => {
    changeQuantity(product, product.quantity + 1);
  };

  const handleQuantityDecrement = (product, e) => {
    changeQuantity(product, product.quantity - 1);
  };

  const handleQuantityChange = (product, e) => {
    if (e.target.value !== '') {
      changeQuantity(product, parseInt(e.target.value));
    } else {
      const newItems = cartItems.map(item => {
        if (product.id === item.id ) {
          return { ...item, input: e.target.value };
        } else {
          return item;
        }
      });
      setCartItems(newItems);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<Home featuredItems={featuredItems} />} />
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
          <Route 
            path='/store/:id'
            element={
              <Product 
                products={products} onAddToCart={handleAddToCart} />
            } 
          />
          <Route 
            path='/cart'
            element={
              <Cart 
                items={cartItems}
                onQuantityIncrement={handleQuantityIncrement}
                onQuantityDecrement={handleQuantityDecrement}
                onQuantityChange={handleQuantityChange}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;