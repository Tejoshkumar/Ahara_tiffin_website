import React from 'react';
import { useCart } from '../context/CartContext';
import logoImg from '../../ahara_logo.png';

export default function Navbar({ currentPage, setCurrentPage }) {
  const { cartCount } = useCart();

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-16 h-20 max-w-[1280px] mx-auto">
        
        {/* Brand Logo & Name */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <img 
            src={logoImg} 
            alt="Ahara Tiffins Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
          <span className="font-display-lg text-xl md:text-2xl text-primary font-bold tracking-tight">
            Ahara Tiffins
          </span>
        </a>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <a 
            href="#experience" 
            onClick={(e) => {
              if (currentPage !== 'home') {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }
              e.preventDefault();
            }}
            className="text-on-surface-variant hover:text-secondary hover:scale-105 transition-all duration-300 font-body-md text-sm"
          >
            Experience
          </a>
          <a 
            href="#specials" 
            onClick={(e) => {
              if (currentPage !== 'home') {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('specials')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('specials')?.scrollIntoView({ behavior: 'smooth' });
              }
              e.preventDefault();
            }}
            className="text-on-surface-variant hover:text-secondary hover:scale-105 transition-all duration-300 font-body-md text-sm"
          >
            Specials
          </a>
          <a 
            href="/menu" 
            onClick={(e) => handleNavClick(e, 'menu')}
            className={`font-body-md text-sm transition-all duration-300 hover:text-secondary ${
              currentPage === 'menu' 
                ? 'text-secondary font-bold border-b-2 border-secondary' 
                : 'text-on-surface-variant'
            }`}
          >
            Menu
          </a>
          <a 
            href="#daily-meals" 
            onClick={(e) => {
              if (currentPage !== 'home') {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('daily-meals')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('daily-meals')?.scrollIntoView({ behavior: 'smooth' });
              }
              e.preventDefault();
            }}
            className="text-on-surface-variant hover:text-secondary hover:scale-105 transition-all duration-300 font-body-md text-sm"
          >
            Daily Meals
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button 
            onClick={(e) => handleNavClick(e, 'menu')}
            className="hidden md:block bg-primary text-on-primary px-8 py-3 rounded-full font-label-caps text-[10px] tracking-widest transition-all duration-300 hover:bg-secondary hover:scale-105 active:scale-95"
          >
            ORDER NOW
          </button>
          
          <button 
            onClick={(e) => handleNavClick(e, 'cart')}
            className={`relative group cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center p-2 rounded-full ${
              currentPage === 'cart' ? 'bg-secondary-container/40' : ''
            }`}
            aria-label="View Cart"
          >
            <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 500" }}>
              shopping_cart
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
