import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load initial cart state from localStorage if available
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('ahara_cart_items');
    return saved ? JSON.parse(saved) : [];
  });

  const [specialInstructions, setSpecialInstructions] = useState(() => {
    return localStorage.getItem('ahara_special_instructions') || '';
  });

  const [customerDetails, setCustomerDetails] = useState(() => {
    const saved = localStorage.getItem('ahara_customer_details');
    return saved ? JSON.parse(saved) : { name: '', phone: '', preference: 'pickup' }; // Default is pickup
  });

  // Persist state changes
  useEffect(() => {
    localStorage.setItem('ahara_cart_items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('ahara_special_instructions', specialInstructions);
  }, [specialInstructions]);

  useEffect(() => {
    localStorage.setItem('ahara_customer_details', JSON.stringify(customerDetails));
  }, [customerDetails]);

  // Operations
  const addToCart = (dish) => {
    setItems(prevItems => {
      const existing = prevItems.find(item => item.id === dish.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...dish, quantity: 1 }];
    });
  };

  const removeFromCart = (dishId) => {
    setItems(prevItems => {
      const existing = prevItems.find(item => item.id === dishId);
      if (!existing) return prevItems;
      if (existing.quantity <= 1) {
        return prevItems.filter(item => item.id !== dishId);
      }
      return prevItems.map(item =>
        item.id === dishId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const deleteFromCart = (dishId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== dishId));
  };

  const updateQuantity = (dishId, qty) => {
    if (qty <= 0) {
      deleteFromCart(dishId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item => (item.id === dishId ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    setSpecialInstructions('');
    setCustomerDetails({ name: '', phone: '', preference: 'pickup' });
  };

  const updateCustomerDetails = (fields) => {
    setCustomerDetails(prev => ({ ...prev, ...fields }));
  };

  // Helper values
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const itemsTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      specialInstructions,
      customerDetails,
      cartCount,
      itemsTotal,
      addToCart,
      removeFromCart,
      deleteFromCart,
      updateQuantity,
      setSpecialInstructions,
      updateCustomerDetails,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
