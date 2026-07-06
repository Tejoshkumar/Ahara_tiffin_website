import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { menuItems, MENU_CATEGORIES } from '../data/menuData';
import DishCard from '../components/DishCard';

export default function Menu({ setCurrentPage }) {
  const { 
    items, 
    itemsTotal, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    deleteFromCart 
  } = useCart();
  
  const [selectedCategory, setSelectedCategory] = useState(MENU_CATEGORIES.MORNING_CLASSICS);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on category and search query
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 animate-fade-in-up flex flex-col lg:flex-row gap-8 relative">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 kolam-bg-subtle pointer-events-none z-0"></div>

      {/* Main Menu Area */}
      <div className="flex-1 z-10 lg:mr-[340px]">
        {/* Header Title */}
        <section className="text-center mb-12">
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-4">
            Flavours of Ahara
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto italic">
            "Freshly prepared South Indian classics served with authentic traditional taste."
          </p>
        </section>

        {/* Search bar for mobile / general */}
        <div className="mb-8 max-w-md mx-auto flex items-center bg-surface-container-high rounded-full px-5 py-2.5 border border-outline-variant/30 shadow-inner">
          <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
          <input 
            type="text" 
            placeholder="Search our delicious menu..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none focus:ring-0 text-sm p-0 w-full text-primary outline-none"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>

        {/* Category Navigation Tabs */}
        <nav className="flex overflow-x-auto gap-6 border-b border-outline-variant/30 mb-12 pb-2 custom-scrollbar">
          {Object.values(MENU_CATEGORIES).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`pb-4 text-xs font-bold font-label-caps tracking-widest whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'border-b-2 border-secondary text-secondary font-bold scale-105'
                  : 'text-on-surface-variant opacity-60 hover:opacity-100'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredItems.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface-container-low rounded-3xl border border-dashed border-outline-variant/40">
            <span className="material-symbols-outlined text-secondary text-5xl mb-4">search_off</span>
            <p className="text-on-surface-variant font-medium">No dishes found matching your selection.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory(MENU_CATEGORIES.MORNING_CLASSICS); }}
              className="mt-4 text-secondary underline hover:text-primary font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Interactive Cart Sidebar Panel (Desktop Only, Sticky) */}
      <aside className="hidden lg:flex fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 bg-surface/95 backdrop-blur-md border-l border-outline-variant/30 z-35 flex-col shadow-2xl">
        <div className="p-6 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low">
          <h2 className="font-headline-md text-xl text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">shopping_basket</span>
            Your Plate
          </h2>
          <span className="bg-primary text-secondary-fixed text-xs px-2.5 py-0.5 rounded-full font-bold">
            {items.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        </div>

        {/* Cart items list */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-4 pb-4 border-b border-outline-variant/10 group">
                <div className="flex-grow">
                  <h4 className="font-bold text-primary text-sm leading-tight group-hover:text-secondary transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-xs text-secondary font-bold mt-1">
                    ₹{item.price}
                  </p>
                </div>
                
                {/* Quantity Toggles */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center bg-surface-container-high rounded-full px-2 py-0.5 border border-outline-variant/20">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-primary hover:text-secondary p-1"
                    >
                      <span className="material-symbols-outlined text-xs">remove</span>
                    </button>
                    <span className="font-bold text-xs px-2 text-primary">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="text-primary hover:text-secondary p-1"
                    >
                      <span className="material-symbols-outlined text-xs">add</span>
                    </button>
                  </div>
                  <button 
                    onClick={() => deleteFromCart(item.id)}
                    className="text-[10px] text-on-surface-variant hover:text-error flex items-center gap-0.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[12px]">delete</span>
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-65 py-12">
              <span className="material-symbols-outlined text-primary/45 text-4xl mb-3">restaurant</span>
              <p className="text-xs text-on-surface-variant max-w-[180px]">Your plate is currently empty. Explore the menu to add delicious tiffins!</p>
            </div>
          )}
        </div>

        {/* Sidebar Summary & Continue button */}
        <div className="p-6 bg-surface-container-high border-t border-outline-variant/30 space-y-4">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-on-surface-variant">Items Total</span>
            <span className="font-headline-md text-primary text-lg font-bold">₹{itemsTotal}</span>
          </div>
          
          <button 
            disabled={items.length === 0}
            onClick={() => {
              setCurrentPage('cart');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`w-full py-4 rounded-xl font-bold text-xs tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
              items.length > 0 
                ? 'bg-primary text-on-primary hover:bg-secondary hover:scale-[1.02] active:scale-95 shadow-md' 
                : 'bg-outline-variant text-on-surface-variant opacity-50 cursor-not-allowed'
            }`}
          >
            CONTINUE ORDER
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
