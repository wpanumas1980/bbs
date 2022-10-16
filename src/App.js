import './App.less';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExOne from './pages/ExOne';
import ExTwo from './pages/ExTwo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/one' element={<ExOne />} />
      <Route path='/two' element={<ExTwo />} />
    </Routes>
  );
}

export default App;
