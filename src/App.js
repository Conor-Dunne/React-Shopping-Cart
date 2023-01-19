import Nav from './Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={null} />
      <Route path='/cart' element={null} />
    </Routes>
    </div>
  );
}

export default App;
