import { Routes, Route } from 'react-router-dom';

import Home from './pages/Index';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
