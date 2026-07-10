import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';


function MainLayout() {

  const initialPage = () => {
    if (window.location.pathname.includes('menu')) {
      return 'menu';
    }

    if (window.location.pathname.includes('cart')) {
      return 'cart';
    }

    return 'home';
  };


  const [currentPage, setCurrentPage] = useState(initialPage);

  const { cartCount } = useCart();


  const changePage = (page) => {
    setCurrentPage(page);

    if (page === 'menu') {
      window.history.pushState(null, '', '/menu');
    }
    else if (page === 'cart') {
      window.history.pushState(null, '', '/cart');
    }
    else {
      window.history.pushState(null, '', '/');
    }

    window.scrollTo(0, 0);
  };


  const renderPage = () => {

    switch (currentPage) {

      case 'menu':
        return <Menu setCurrentPage={changePage} />;

      case 'cart':
        return <Cart setCurrentPage={changePage} />;

      default:
        return <Home setCurrentPage={changePage} />;

    }
  };


  return (

    <div className="flex flex-col min-h-screen bg-background text-on-surface font-sans">

      <Navbar
        currentPage={currentPage}
        setCurrentPage={changePage}
      />


      <div className="flex-grow">

        {renderPage()}

      </div>


      <Footer setCurrentPage={changePage} />


      {currentPage !== 'cart' && cartCount > 0 && (

        <button

          onClick={() => changePage('cart')}

          className="fixed bottom-8 right-6 md:hidden bg-secondary text-white p-4 rounded-full shadow-2xl z-50"

        >

          🛒 {cartCount}

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