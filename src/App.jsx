import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

function MainLayout() {
  const [currentPage, setCurrentPage] = useState('home');
  const { cartCount } = useCart();

  // Dynamic Page Switcher
  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <Menu setCurrentPage={setCurrentPage} />;
      case 'cart':
        return <Cart setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-sans selection:bg-secondary-fixed selection:text-on-secondary-fixed-variant">
      {/* Navigation Header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Page Content Area */}
      <div className="flex-grow">
        {renderPage()}
      </div>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Mobile Cart Button (Hidden on Cart page & when cart is empty) */}
      {currentPage !== 'cart' && cartCount > 0 && (
        <button
          onClick={() => {
            setCurrentPage('cart');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-8 right-6 md:hidden bg-secondary text-white p-4.5 rounded-full shadow-2xl z-50 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse border border-white/20"
          aria-label="View plate"
        >
          <span className="material-symbols-outlined text-2xl">shopping_basket</span>
          <span className="absolute -top-1.5 -right-1.5 bg-primary text-secondary-fixed text-[10px] w-6 h-6 flex items-center justify-center rounded-full font-bold border border-secondary">
            {cartCount}
          </span>
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
