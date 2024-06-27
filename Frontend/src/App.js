import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Listing from './Pages/Listing';
import CarDetail from './Pages/carDetail';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/car-detail" element={<CarDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
