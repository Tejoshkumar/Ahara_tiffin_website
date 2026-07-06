import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppLink } from '../utils/orderFormatter';

export default function Cart({ setCurrentPage }) {
  const {
    items,
    specialInstructions,
    customerDetails,
    itemsTotal,
    addToCart,
    removeFromCart,
    deleteFromCart,
    setSpecialInstructions,
    updateCustomerDetails
  } = useCart();

  const [formError, setFormError] = useState('');

  // Handle inputs changes
  const handleNameChange = (e) => {
    updateCustomerDetails({ name: e.target.value });
    if (formError) setFormError('');
  };

  const handlePhoneChange = (e) => {
    // Keep only numbers
    const val = e.target.value.replace(/\D/g, '');
    updateCustomerDetails({ phone: val });
    if (formError) setFormError('');
  };

  const handlePreferenceChange = (pref) => {
    updateCustomerDetails({ preference: pref });
  };

  // Submit order validation and redirection
  const handleCheckout = (e) => {
    e.preventDefault();
    
    if (!customerDetails.name.trim()) {
      setFormError('Please enter your full name to continue.');
      return;
    }
    
    if (!customerDetails.phone || customerDetails.phone.length < 10) {
      setFormError('Please enter a valid 10-digit phone number.');
      return;
    }

    // Trigger WhatsApp checkout
    const link = generateWhatsAppLink({
      items,
      specialInstructions,
      customerDetails
    });

    window.open(link, '_blank');
  };

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
    <main className="py-16 px-6 md:px-16 max-w-[1280px] mx-auto relative animate-fade-in-up">
      {/* Background Subtle Texture */}
      <div className="fixed inset-0 kolam-bg-subtle pointer-events-none z-0"></div>

      <header className="mb-12 relative z-10">
        <h1 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-2">
          Your Ahara Plate
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          Review your freshly prepared selections before placing your order.
        </p>
        <div className="mt-6 flex items-center gap-4 text-secondary font-medium">
          <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          <span className="text-label-caps text-xs tracking-wider">PREPARED FRESH AFTER EVERY ORDER</span>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-surface-container-low rounded-3xl border border-dashed border-outline-variant/40 relative z-10 max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-primary/40 text-6xl mb-4">shopping_cart</span>
          <h2 className="font-headline-md text-2xl text-primary mb-2">Your plate is empty</h2>
          <p className="text-on-surface-variant mb-8 max-w-xs mx-auto text-sm">
            It looks like you haven't added any of our delicious South Indian tiffins yet.
          </p>
          <button
            onClick={() => setCurrentPage('menu')}
            className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-caps text-xs tracking-widest hover:bg-secondary hover:scale-105 active:scale-95 transition-all duration-300"
          >
            DISCOVER MENU
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* Left Column: Cart Items & Cooking Notes */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* List Cards */}
            <div className="space-y-6">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-surface-container-lowest border border-secondary/10 p-6 rounded-3xl flex flex-col md:flex-row gap-6 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500"
                >
                  <div className="w-full md:w-36 h-36 flex-shrink-0 overflow-hidden rounded-2xl bg-primary/5">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      src={item.image} 
                      alt={item.name} 
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-headline-md text-xl text-primary group-hover:text-secondary transition-colors duration-300">
                          {item.name}
                        </h3>
                        <span className="font-headline-md text-secondary text-lg">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                      
                      <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.badges && item.badges.map((badge, idx) => (
                          <span 
                            key={idx} 
                            className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${getBadgeStyle(badge)}`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-outline-variant/30">
                      {/* Quantity Toggle */}
                      <div className="flex items-center bg-surface-container rounded-full px-2 py-0.5 border border-outline-variant/20">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 flex items-center justify-center text-primary hover:text-secondary transition-colors active:scale-75"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="px-3 font-bold text-primary text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="w-8 h-8 flex items-center justify-center text-primary hover:text-secondary transition-colors active:scale-75"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button 
                        onClick={() => deleteFromCart(item.id)}
                        className="text-on-surface-variant hover:text-error flex items-center gap-1 transition-all duration-300 text-sm font-medium hover:scale-105"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Instructions */}
            <div className="bg-surface-container-low p-6 md:p-8 rounded-[32px] border border-outline-variant/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary text-2xl">edit_note</span>
                <h4 className="font-headline-md text-primary text-xl font-bold">Special Instructions</h4>
              </div>
              <textarea 
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full bg-surface-container-lowest border-outline-variant/50 border rounded-2xl p-4 focus:ring-1 focus:ring-secondary focus:border-secondary transition-all outline-none text-body-md min-h-[100px] placeholder:text-on-surface-variant/40 text-primary text-sm resize-none" 
                placeholder="Examples: Less spicy chutney, separate sambar packet, filter coffee extra hot..."
              />
            </div>
          </div>

          {/* Right Column: Checkout details & Billing summary */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Customer Details Form */}
            <section className="bg-surface-container-high p-6 md:p-8 rounded-[32px] shadow-sm">
              <h3 className="font-headline-md text-xl text-primary font-bold mb-6">Customer Details</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-label-caps text-[10px] tracking-wider text-on-surface-variant mb-2 ml-1">FULL NAME</label>
                  <input 
                    type="text" 
                    value={customerDetails.name}
                    onChange={handleNameChange}
                    className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary text-sm placeholder:text-on-surface-variant/30" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div>
                  <label className="block text-label-caps text-[10px] tracking-wider text-on-surface-variant mb-2 ml-1">PHONE NUMBER</label>
                  <input 
                    type="tel" 
                    maxLength={10}
                    value={customerDetails.phone}
                    onChange={handlePhoneChange}
                    className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none text-primary text-sm placeholder:text-on-surface-variant/30" 
                    placeholder="10-digit mobile number" 
                  />
                </div>
                
                {/* Order preference tags */}
                <div className="pt-2">
                  <label className="block text-label-caps text-[10px] tracking-wider text-on-surface-variant mb-4 ml-1">ORDER PREFERENCE</label>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Pickup Option */}
                    <button
                      type="button"
                      onClick={() => handlePreferenceChange('pickup')}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${
                        customerDetails.preference === 'pickup'
                          ? 'bg-primary text-on-primary border-primary shadow-lg scale-[1.02]'
                          : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant/30 hover:bg-secondary/10 hover:text-secondary'
                      }`}
                    >
                      <span className="material-symbols-outlined mb-2 text-2xl">store</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Pickup from Ahara</span>
                    </button>

                    {/* Takeaway Option */}
                    <button
                      type="button"
                      onClick={() => handlePreferenceChange('takeaway')}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${
                        customerDetails.preference === 'takeaway'
                          ? 'bg-primary text-on-primary border-primary shadow-lg scale-[1.02]'
                          : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant/30 hover:bg-secondary/10 hover:text-secondary'
                      }`}
                    >
                      <span className="material-symbols-outlined mb-2 text-2xl">local_mall</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Takeaway</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Order Summary Box */}
            <section className="bg-primary text-on-primary p-6 md:p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-[100px]">chat_bubble_outline</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-headline-md text-xl text-secondary-fixed mb-6 font-bold">Order Summary</h3>
                
                {/* Billing details (No GST/Taxes) */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-body-md opacity-80 text-sm">
                    <span>Items Total ({items.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                    <span className="font-semibold">₹{itemsTotal}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-on-primary/20">
                    <span className="font-headline-md text-lg">Final Amount</span>
                    <span className="font-headline-md text-2xl text-secondary-fixed font-bold">₹{itemsTotal}</span>
                  </div>
                </div>

                {/* Validation alert */}
                {formError && (
                  <div className="bg-error-container text-on-error-container p-4 rounded-xl text-xs font-semibold mb-6 flex items-center gap-2 animate-pulse">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    {formError}
                  </div>
                )}

                {/* WhatsApp Continue Button */}
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] text-white py-4.5 rounded-full font-bold text-xs tracking-widest flex items-center justify-center gap-3 hover:brightness-115 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.788 2.012 14.317.989 11.69.988 6.25.988 1.824 5.36 1.82 10.79c-.001 1.639.433 3.238 1.258 4.63l-.993 3.627 3.731-.978 group-hover:scale-105 transition-transform"/>
                    <path d="M17.021 13.918c-.28-.141-1.65-.815-1.905-.907-.255-.092-.44-.139-.626.139-.185.278-.718.907-.88 1.092-.162.185-.324.208-.604.068-.28-.141-1.18-.435-2.247-1.388-.832-.743-1.393-1.66-1.556-1.938-.162-.28-.017-.43.122-.569.125-.125.28-.324.42-.486.139-.162.185-.278.278-.463.092-.185.046-.347-.023-.486-.069-.139-.626-1.505-.856-2.06-.225-.542-.454-.47-.626-.479-.162-.008-.347-.01-.532-.01s-.486.069-.74.347c-.255.278-.972.95-1.002.972-.282.253-.466.576-.713 1.004-.847 1.469-.769 3.09-.153 4.254.664 1.258 2.227 3.327 4.793 4.254.912.33 1.705.474 2.355.568.802.115 1.536.082 2.114-.004.644-.096 1.65-.674 1.882-1.326.232-.652.232-1.21.162-1.326-.069-.115-.255-.185-.536-.326z"/>
                  </svg>
                  CONTINUE ON WHATSAPP
                </button>
                <p className="mt-5 text-center text-[10px] opacity-60 uppercase tracking-[0.2em] font-medium">
                  Freshly Prepared • Authentic Heritage
                </p>
              </div>
            </section>
          </div>
        </div>
      )}
    </main>
  );
}
