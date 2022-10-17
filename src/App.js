import './App.less';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExOne from './pages/ExOne';
import ExTwo from './pages/ExTwo';
import ExThree from './pages/ExThree';
import Create from './pages/Create';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/one' element={<ExOne />} />
      <Route path='/two' element={<ExTwo />} />
      <Route path='/three' element={<ExThree />} />
      <Route path='/three/create' element={<Create />} />
    </Routes>
  );
}

export default App;
