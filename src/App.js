import Nav from './Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import { Store, ProductPage } from './Store';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from './Cart';


function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  function handleAddToCart(order) {
    let newCart = cart.slice();
    newCart.push(order);
    setCart(newCart);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
      }
    };
    fetchData();
  }, []);


  return (
    <div className="container">
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store products={products} />} />
      <Route path='/cart' element={<Cart cart={cart} />} />
      <Route path='/product/:id' element={<ProductPage products={products} addToCart={handleAddToCart}/>} />
    </Routes>
    </div>
  );
}

export default App;
