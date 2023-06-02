import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Create from './pages/Create';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className='font-light'>
      <NavBar />
      <div className='m-auto max-w-7xl p-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
