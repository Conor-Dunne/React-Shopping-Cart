import Nav from './Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Store from './Store';

function App() {
  return (
    <div className="container">
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/cart' element={null} />
      {/* <Route path='/product/:id' element={<ProductPage />} /> */}
    </Routes>
    </div>
  );
}

export default App;
