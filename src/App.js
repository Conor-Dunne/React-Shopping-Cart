import Nav from './Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import { Store, ProductPage } from './Store';
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [products, setProducts] = useState(null);

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
      <Route path='/cart' element={null} />
      <Route path='/product/:id' element={<ProductPage products={products} />} />
    </Routes>
    </div>
  );
}

export default App;
