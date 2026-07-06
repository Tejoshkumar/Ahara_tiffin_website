import React from 'react';
import { useCart } from '../context/CartContext';

export default function DishCard({ dish }) {
  const { addToCart, items, removeFromCart } = useCart();
  
  // Find if this dish is already in the cart to show quantity controls
  const cartItem = items.find(item => item.id === dish.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Map badge values to styled labels
  const getBadgeStyle = (badge) => {
    switch (badge) {
      case '✨ Signature Dish':
        return 'bg-secondary-container text-on-secondary-container';
      case '⭐ Customer Favourite':
        return 'bg-secondary text-white';
      case '🔥 Most Ordered':
        return 'bg-primary text-secondary-fixed';
      case '🌿 Pure Veg':
      default:
        return 'bg-[#d0e9d4] text-[#0b2013]';
    }
  };

  return (
    <div className="group bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
      {/* Image container */}
      <div className="aspect-[4/3] w-full relative overflow-hidden bg-primary/5">
        {dish.image ? (
          <img 
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
            src={dish.image} 
            alt={dish.name} 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary/30">
            <span className="material-symbols-outlined text-4xl">restaurant</span>
          </div>
        )}
        
        {/* Badges container */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {dish.badges && dish.badges.map((badge, idx) => (
            <span 
              key={idx} 
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${getBadgeStyle(badge)}`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline-md text-xl text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
          {dish.name}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
          {dish.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-outline-variant/30">
          <span className="text-secondary font-headline-md text-lg">
            ₹{dish.price}
          </span>
          
          {quantity > 0 ? (
            <div className="flex items-center bg-surface-container-high rounded-full px-2 py-1 border border-outline-variant/30">
              <button 
                onClick={() => removeFromCart(dish.id)}
                className="w-8 h-8 flex items-center justify-center text-primary hover:text-secondary transition-colors active:scale-75"
              >
                <span className="material-symbols-outlined text-sm">remove</span>
              </button>
              <span className="px-3 font-bold text-primary text-sm">{quantity}</span>
              <button 
                onClick={() => addToCart(dish)}
                className="w-8 h-8 flex items-center justify-center text-primary hover:text-secondary transition-colors active:scale-75"
              >
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={() => addToCart(dish)}
              className="bg-primary text-on-primary px-5 py-2 rounded-xl text-xs font-bold tracking-widest hover:bg-secondary hover:scale-105 active:scale-95 transition-all duration-300"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
