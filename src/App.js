import './App.css';
import Nav from './Nav';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path='/' element={null} />
      <Route path='/store' element={null} />
      <Route path='/cart' element={null} />
    </Routes>
    </div>
  );
}

export default App;
