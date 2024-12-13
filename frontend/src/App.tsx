import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Error404 from './components/Error404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />      
    </Router>
  )
}

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />

    </Routes>
  );
}