import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-charcoal flex flex-col font-inter">
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<div className="pt-48 text-center"><h1 className="text-4xl font-bold">404 - Not Found</h1></div>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
