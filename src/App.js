import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Main} from './components/main/Main'
import {MenuMobile} from './components/MenuMobile/MenuMobile'


function App() {







  return (
    <>   
    <Routes>
      <Route path="/" element={Main()}/>
      <Route path="/menu" element={MenuMobile()}/>
    </Routes>
    </>
  );
}

export default App;
