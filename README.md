# Ahara Tiffins Website

An ultra-premium, authentic, and traditional website for **Ahara Tiffins** — built using **React + Vite + Tailwind CSS**. It embodies the "Modern Heritage" design guidelines with high-end, responsive layouts, smooth micro-animations, and a unified WhatsApp ordering system.

---

## 🚀 Getting Started

Follow these simple steps to run the website locally on your machine.

### 1. Install Dependencies
Open your terminal in this project directory and run:
```bash
npm install
```

### 2. Run the Development Server
Start the local Vite server:
```bash
npm run dev
```
Once started, open `http://localhost:3000` in your web browser.

---

## 🛠️ Corrections & Guidelines Applied

As requested, the following brand rules, checkout parameters, and pricing have been fully integrated:

1. **Official Brand Logo Integration**:
   - The original `ahara_logo.png` file in the root is imported directly as a module (`import logoImg from '../ahara_logo.png'`). It is positioned and sized correctly without any modifications.

2. **Simplified Checkout & Cart Summary**:
   - **GST and taxes calculations have been removed completely**. No percentages or extra fees are displayed.
   - The billing container now lists only **Items Total** and **Final Amount** (which match perfectly).
   - Orders are formatted and forwarded cleanly to the WhatsApp API.

3. **Restructured Order Preferences**:
   - The "Table Order" option has been removed.
   - Users can choose only between **Pickup from Ahara** and **Takeaway**.

4. **Realistic Traditional Pricing**:
   - Pricing reflects a premium yet affordable traditional tiffin center:
     * **Idly (2 pcs)**: ₹30
     * **Medu Vada (2 pcs)**: ₹30
     * **Idly Vada Combo**: ₹40
     * **Sambar Idly**: ₹40
     * **Ghee Podi Idli (Button)**: ₹50
     * **Plain Dosa**: ₹40
     * **Classic Masala Dosa**: ₹60
     * **Ghee Karam Dosa**: ₹70
     * **The Maharaja Thali**: ₹120
     * **Filter Coffee**: ₹20
     * **Masala Chai**: ₹20
     * **Spiced Buttermilk**: ₹20

5. **Restricted Food Badges**:
   - "Gluten-Free" and "Diet" tags have been removed.
   - Only the following allowed badges are displayed on the menu and checkout plates:
     * 🌿 Pure Veg
     * ⭐ Customer Favourite
     * 🔥 Most Ordered
     * ✨ Signature Dish

6. **Look & Feel**:
   - Maintains the premium, five-star hospitality design language with warm ivory canvases, dark heritage green headers/footers, and elegant serif typography.

---

## 📂 Project Structure

```
c:\Users\TEJOSH\Documents\Ahara_tiffin _website
├── ahara_logo.png           # Official brand logo (intact)
├── ahara_menu_list.jpeg     # Original menu image reference
├── package.json             # Build configurations & dependencies
├── vite.config.js           # Vite settings & React plugin loader
├── tailwind.config.js       # Extended colors & custom spacing
├── postcss.config.js        # PostCSS directives
├── index.html               # Font loaders & HTML container
├── src/
│   ├── main.jsx             # React DOM loader
│   ├── index.css            # Custom scrollbars, animations, Kolam styles
│   ├── App.jsx              # Main routing shell & state coordinator
│   ├── components/
│   │   ├── Navbar.jsx       # Header with blurred backdrop & cart status
│   │   ├── Footer.jsx       # Operational details & brand summary
│   │   ├── DishCard.jsx     # Food card rendering tags & price
│   │   └── SectionDivider.jsx # Kolam dividers
│   ├── context/
│   │   └── CartContext.jsx  # Cart state machine with localStorage sync
│   ├── data/
│   │   └── menuData.js      # Centralized database for items & category lists
│   └── utils/
│       └── orderFormatter.js # Encodes cart details into WhatsApp string
└── stitch-design/           # Original design references
```
