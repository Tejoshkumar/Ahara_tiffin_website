/**
 * Formats cart items and customer details into a clean text message for WhatsApp ordering.
 * 
 * @param {Object} cartState
 * @param {Array} cartState.items - Array of cart items { name, price, quantity }
 * @param {string} cartState.specialInstructions - Cooking notes
 * @param {Object} cartState.customerDetails - { name, phone, preference }
 * @returns {string} Fully formatted URL-encoded WhatsApp link
 */
export function generateWhatsAppLink(cartState) {
  const { items, specialInstructions, customerDetails } = cartState;
  const { name, phone, preference } = customerDetails;

  const itemsTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Format preference name
  let prefLabel = "Pickup from Ahara";
  if (preference === "takeaway") {
    prefLabel = "Takeaway";
  }

  let message = `*NEW ORDER - AHARA TIFFINS*\n`;
  message += `-----------------------------\n`;
  message += `👤 *Name:* ${name || 'Guest'}\n`;
  message += `📞 *Phone:* ${phone || 'Not Provided'}\n`;
  message += `🍽️ *Preference:* ${prefLabel}\n\n`;

  message += `*Selected Items:*\n`;
  items.forEach(item => {
    message += `- ${item.quantity} x ${item.name} (₹${item.price * item.quantity})\n`;
  });

  if (specialInstructions && specialInstructions.trim()) {
    message += `\n📝 *Special Instructions:* ${specialInstructions.trim()}\n`;
  }

  message += `\n-----------------------------\n`;
  message += `💰 *Items Total:* ₹${itemsTotal}\n`;
  message += `💵 *Final Amount:* ₹${itemsTotal}\n`;
  message += `-----------------------------\n`;
  message += `*Prepared fresh & warm with tradition.*`;

  // Standard official phone number for Ahara Tiffins orders (e.g., +91 98765 43210)
  const officialPhone = "919553612882";
  const encodedText = encodeURIComponent(message);

  return `https://wa.me/${officialPhone}?text=${encodedText}`;
}

