import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Footer from './footer/Footer';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/stuff' element />
    </Routes>
    <Footer />
    </>
  )
}

export default App
