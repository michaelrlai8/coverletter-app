import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import About from './Components/About';
import NavBar from './Components/NavBar';

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
