
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';



const App = () => {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>


  );
};

export default App;