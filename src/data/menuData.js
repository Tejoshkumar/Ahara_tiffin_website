import gheeKaramDosaImg from '../../ghee_karam_dosa.png';
import spicedButtermilkImg from '../../spiced_buttermilk.png';
import filterCoffeeImg from '../../filter_coffee.png';


export const MENU_CATEGORIES = {
  MORNING_CLASSICS: "Morning Classics",
  DOSA_VARIETIES: "Dosa Varieties",
  IDLI_SPECIALS: "Idli Specials",
  AHARA_SPECIALS: "Ahara Specials",
  BEVERAGES: "Beverages"
};

export const menuItems = [
  // MORNING CLASSICS
  {
    id: "idly-classic",
    name: "Idly (2 pcs)",
    category: MENU_CATEGORIES.MORNING_CLASSICS,
    price: 30,
    description: "Soft, pillowy steamed rice cakes served with our signature sambar and fresh coconut chutney.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpK_8s5qaP39OwcoyEGDF76Zox91X_oBHFQCoACO5sLv2IeLFJbKHVjatyTvyF1_0Hv1JB_UmoWh4Iv7qS49FZIXwkPFUQ0HzwmxRbzV5EJ2R03ewIrlE5HWn9bivd0tBoJwp-egrxVD-KUklEg1g4TORBqwiJquQR92W8o4TZmXt8cPCmNgxgpAX9pOCpKM69N80_0EZYvI3gSKdAOVrsw2vcHiZVL6YcfzjNDhawqy6JS3_agsdqaASHcCEe2T-1fUc1pte5qIOd", // placeholder
    badges: ["🌿 Pure Veg"]
  },
  {
    id: "vada-classic",
    name: "Medu Vada (2 pcs)",
    category: MENU_CATEGORIES.MORNING_CLASSICS,
    price: 30,
    description: "Crispy, golden-brown deep-fried black gram doughnuts flavored with pepper, ginger, and curry leaves.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop",
    badges: ["🌿 Pure Veg", "🔥 Most Ordered"]
  },
  {
    id: "idly-vada-combo",
    name: "Idly Vada Combo",
    category: MENU_CATEGORIES.MORNING_CLASSICS,
    price: 40,
    description: "The perfect pair: One pillowy steamed idly and one crispy medu vada served with chutney and sambar.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhXz-JrTjm8UxKunrYbf7jAiopYCe0DSuOC5NvWEpMmncz35oFh8hBqzWvoBYdzwUeenwuh4hpZNf8HNFxJBPBcnIvkcu214SpGhUDiFcEWxHe74MJZjB-ytgfzPlkgy0FgroeFMda_3ocAKmvbvXQHDMHvGk7RL67ouydXAreBetyHaxLapN_DroBV-P7c7F43XfTBD_a2fajFGzNyjEcSaf7_22dkrBeD-SFxix2c-FcnLSOItiOavQ52IIPiUIQGFgI-5zCUUTi",
    badges: ["🌿 Pure Veg"]
  },
  {
    id: "upma-traditional",
    name: "Traditional Upma",
    category: MENU_CATEGORIES.MORNING_CLASSICS,
    price: 30,
    description: "Roasted semolina cooked with seasoned mustard seeds, lentils, curry leaves, and green chillies.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
    badges: ["🌿 Pure Veg"]
  },

  // DOSA VARIETIES
  {
    id: "plain-dosa",
    name: "Plain Dosa",
    category: MENU_CATEGORIES.DOSA_VARIETIES,
    price: 40,
    description: "Thin, golden crispy crepe made from fermented rice and lentil batter, brushed with ghee.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg6ZjQtL1Rb4cZ5gv8-1MdGXVfCofvK_J_6QTp6R9NGtfQKPZukHOp7X-PNfsGtHg_0fMsI4upCqzXmni-N19kOuRGtv-yTe8swYM9PnC93zzGZMskEtgbM0358PBdNQv8NN-ds_VbIICK0m4HaPR0dquejCAhEtds1oaNzqDr00iDSUskhV6-QLavy8cU9QhyCeIf9VhXFa6pZlVqOwfj1M57bf9drlhEiR9aHVZ7IXm-WCc-I4TksMIjmjG4bDMV-XqRR0OvMbh9",
    badges: ["🌿 Pure Veg"]
  },
  {
    id: "masala-dosa",
    name: "Classic Masala Dosa",
    category: MENU_CATEGORIES.DOSA_VARIETIES,
    price: 60,
    description: "Crispy golden crepe filled with a tempered potato and onion masala, served with chutneys and sambar.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrKNH5_Ps7XjOo0nqOA-cRj8RTGR_2NXzWPGSMo6JUSyoHCNmwJCaF-cfMw07O7wgqm5v0pJXb4J1L4YWXEjWZpJTzj3jw4sZBV73VO4rUhqmsV30k6g8fSNr4qRVz7OzxxqoqtXSnBAix9elMwm9ydkRaoCg6Y4JR7Vyr1LZvmBm1F8EM8LpUYpp3AH47n81p4iIPFXdChpYuixxPn-o5lVKoKdRZNcxFmyFJdE2DdQa69v-VrOPSMm4ABOX1lP-xQG2vhoibFOFM",
    badges: ["🌿 Pure Veg", "⭐ Customer Favourite"]
  },
  {
    id: "ghee-karam-dosa",
    name: "Ghee Karam Dosa",
    category: MENU_CATEGORIES.DOSA_VARIETIES,
    price: 70,
    description: "Crispy crepe coated with spicy homemade garlic-chilli paste (karam podi) and a generous splash of pure ghee.",
    image: gheeKaramDosaImg,
    badges: ["🌿 Pure Veg", "✨ Signature Dish"]
  },
  {
    id: "rava-masala-dosa",
    name: "Rava Masala Dosa",
    category: MENU_CATEGORIES.DOSA_VARIETIES,
    price: 70,
    description: "Lacy, ultra-crispy semolina crepe filled with spiced potato masala and green chillies.",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=800&auto=format&fit=crop",
    badges: ["🌿 Pure Veg"]
  },
  {
    id: "onion-dosa",
    name: "Onion Dosa",
    category: MENU_CATEGORIES.DOSA_VARIETIES,
    price: 50,
    description: "Thin rice crepe topped with a generous layer of finely chopped onions, green chillies, and fresh coriander.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg6ZjQtL1Rb4cZ5gv8-1MdGXVfCofvK_J_6QTp6R9NGtfQKPZukHOp7X-PNfsGtHg_0fMsI4upCqzXmni-N19kOuRGtv-yTe8swYM9PnC93zzGZMskEtgbM0358PBdNQv8NN-ds_VbIICK0m4HaPR0dquejCAhEtds1oaNzqDr00iDSUskhV6-QLavy8cU9QhyCeIf9VhXFa6pZlVqOwfj1M57bf9drlhEiR9aHVZ7IXm-WCc-I4TksMIjmjG4bDMV-XqRR0OvMbh9",
    badges: ["🌿 Pure Veg"]
  },

  // IDLI SPECIALS
  {
    id: "sambar-idly",
    name: "Sambar Idly",
    category: MENU_CATEGORIES.IDLI_SPECIALS,
    price: 40,
    description: "Two hot, pillowy steamed idlies fully submerged in a bowl of aromatic piping-hot vegetable sambar.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUynj9hnLjUwiLzNAs2ZEKGYK5X6Awe6ulZI2igtK3yvDbchPXfGmOM5ErjZ2l1GapfDaaFSfc8SWeQcuSOyIpGxGv9JEPIyXK1hKNIjoJyydqPgFfeOu2ybXkgF77F8EhW059-IxdJniFu1NuMte2NN8_vcTJy47jnEcv3xBzFl3SW_7cPICNASxczSM84yGSca_T2mWBOdQqc9p-rV4vLGHfROgU1LAo-gzM0855vONdruckFaCyGEt26OeMwtujGxXVmm1YqqEp",
    badges: ["🌿 Pure Veg", "🔥 Most Ordered"]
  },
  {
    id: "ghee-podi-idli",
    name: "Ghee Podi Idli (Button)",
    category: MENU_CATEGORIES.IDLI_SPECIALS,
    price: 50,
    description: "10 bite-sized button idlis tossed in pure cow ghee and freshly ground spicy gunpowder (podi).",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChwMJRkY92fx4qcRD28PLUGWEcZtF7TXTKxiSsnVaFSSlgdDnu5kz96BJWeQYtat8hGdGJpP_2mEkpdGUNxK8Jx2BFDvVHq9dXKiwp0a5xwEMXl1Le1Dahyn896JKAxM29qL2KOIq_RsmypE65R0Q3Sn2vxI9ZfeGSpH4sxm-G41RDpgCIAxZR8nO1fGiejetdekBpUsiWElXLkIKS9jVh1Jg_v8TTItRojqgcH8MV2_Qa3GagRW-Uwxg0jvbnYd-mByWSkOHACSUm",
    badges: ["🌿 Pure Veg", "⭐ Customer Favourite"]
  },
  {
    id: "button-sambar-idli",
    name: "Button Sambar Idli",
    category: MENU_CATEGORIES.IDLI_SPECIALS,
    price: 50,
    description: "10 mini button idlies served floating in a bowl of aromatic hot sambar, finished with coriander.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUynj9hnLjUwiLzNAs2ZEKGYK5X6Awe6ulZI2igtK3yvDbchPXfGmOM5ErjZ2l1GapfDaaFSfc8SWeQcuSOyIpGxGv9JEPIyXK1hKNIjoJyydqPgFfeOu2ybXkgF77F8EhW059-IxdJniFu1NuMte2NN8_vcTJy47jnEcv3xBzFl3SW_7cPICNASxczSM84yGSca_T2mWBOdQqc9p-rV4vLGHfROgU1LAo-gzM0855vONdruckFaCyGEt26OeMwtujGxXVmm1YqqEp",
    badges: ["🌿 Pure Veg"]
  },

  // AHARA SPECIALS
  {
    id: "maharaja-thali",
    name: "The Maharaja Thali",
    category: MENU_CATEGORIES.AHARA_SPECIALS,
    price: 120,
    description: "A premium mini lunch thali featuring steamed rice, sambar, rasam, curd, two dry vegetable curries, papad, and a traditional sweet.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIETiOblk_irjOIhK3EL3Eos3_wLd2yi-AOQlUVvz9QuTMfxP3_lV5zdYU0-4FQNDKHrGM7ftAalccBHDwvWmJOnq6AWVADe5qYS2kpAnsNv9Lo3o9v4iZ4CD5yChdleROHb_3kr0SYdVz_V9x9OwRA2KkcAI_KRq7oglIv9p_7Lcsi77YdkTaPbq4nRZTah4P_XmCgI1q8lR-gWX1OC4tzbPZttEa7wDI9Chh6j70cvOiZHSghObOFnWVPLOCRcM_HvqDDQAxY8b2",
    badges: ["🌿 Pure Veg", "✨ Signature Dish"]
  },
  {
    id: "bisi-bele-bath",
    name: "Bisi Bele Bath",
    category: MENU_CATEGORIES.AHARA_SPECIALS,
    price: 50,
    description: "Traditional Karnataka spicy hot lentil rice mash, loaded with vegetables, tamarind, and pure ghee, topped with crisp boondi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQR6ory63DRRTGYjv9rPzR5wAFZA8UjimwOgFR6W3w0Ht0hogtT7odCdzkoz1bONx0_zPUp5EOl9BmGr2DCxXJTUK2iSzImuzBAr5m3P4EJz8PMTnu-81F6Prg96GedJ1Udzod33VSzyV0IEG34iAjx7ML5-9Aw79-tk4UnHAAWQ14a-CxN1YieKjKu7SRNYHMCBHeWXAAT9scKQmh6qYTTOw6fkquGUlcMv-I7k4y-hjp2Z6mtJf6_rBKyLEc5nsryP8Fgwt3dSxk",
    badges: ["🌿 Pure Veg", "⭐ Customer Favourite"]
  },
  {
    id: "rava-kesari",
    name: "Rava Kesari",
    category: MENU_CATEGORIES.AHARA_SPECIALS,
    price: 40,
    description: "Sweet golden semolina pudding enriched with milk, dry fruits, raisins, cardamom, and pure ghee.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEaAkf9ROkkOOg8hNFYXShTgN9uM8R-WkUDNuBCAMiXIi8IACAvrzABMaH7iSR3E3YFAubimp9ry4yrysnsnSgjoL4U0BG7ri5HRs5ay7zOam5SSnfYQgRbw87Epo0pYC71I94Cgu2wh032nJcXUA1CaG9_xLsBepV1pHnw4WeQSQcJkPQODDmhFTo7YvSbqEcMDt4VF8sYW2wunlbRHwx74oLUiNkfxmjfCxA26iSftyIAt9KEwnI2iF9N2xaPog1HxrsF4H6kFOo",
    badges: ["🌿 Pure Veg"]
  },

  // BEVERAGES
  {
    id: "filter-coffee",
    name: "Filter Coffee",
    category: MENU_CATEGORIES.BEVERAGES,
    price: 20,
    description: "Freshly decocted premium chicory-coffee blend frothed with boiling full-cream milk, served in a traditional brass davara.",
    image: filterCoffeeImg,
    badges: ["🌿 Pure Veg", "🔥 Most Ordered"]
  },
  {
    id: "masala-tea",
    name: "Masala Chai",
    category: MENU_CATEGORIES.BEVERAGES,
    price: 20,
    description: "Brewed black tea leaves cooked with milk, crushed ginger, cardamom, cloves, and black pepper.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAohkfLK8FzOEb5ETMB7BpG2FS786Rg_CxfOph-DylZM1BUwAQ4EeXT_HHNk8ADAc3ol6yT-bbwMUcFqGYq7Qekg4YMDomBEJQgkA0qeTEnIiP29mV8-jRfdf1Gm5a9JB_udT3_T4cO3200IuWVwB4Uj9kpEkljw1HXEoiJw6rCQ583Ych1o19Lhfb_xFAD0XbhxNEO205XMCKqHe9fy7FN309bF44GcCvqUVgNgi3Qgv7UlTj2G897X9KR48SzgEYm4ane-gEKfoVe",
    badges: ["🌿 Pure Veg"]
  },
  {
    id: "spiced-buttermilk",
    name: "Spiced Buttermilk",
    category: MENU_CATEGORIES.BEVERAGES,
    price: 20,
    description: "Cool, churning yogurt drink spiced with green chillies, ginger, fresh coriander, and curry leaves.",
    image: spicedButtermilkImg,
    badges: ["🌿 Pure Veg"]
  }
];

export const getSpecials = () => {
  return menuItems.filter(item =>
    item.id === "ghee-karam-dosa" ||
    item.id === "sambar-idly" ||
    item.id === "filter-coffee"
  );
};

export const getSignatureDishes = () => {
  return [
    {
      id: "maharaja-thali",
      name: "The Maharaja Thali",
      price: 120,
      description: "A festive feast featuring 14 authentic items curated for a complete traditional culinary experience.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIETiOblk_irjOIhK3EL3Eos3_wLd2yi-AOQlUVvz9QuTMfxP3_lV5zdYU0-4FQNDKHrGM7ftAalccBHDwvWmJOnq6AWVADe5qYS2kpAnsNv9Lo3o9v4iZ4CD5yChdleROHb_3kr0SYdVz_V9x9OwRA2KkcAI_KRq7oglIv9p_7Lcsi77YdkTaPbq4nRZTah4P_XmCgI1q8lR-gWX1OC4tzbPZttEa7wDI9Chh6j70cvOiZHSghObOFnWVPLOCRcM_HvqDDQAxY8b2",
      badge: "✨ Signature Dish"
    },
    {
      id: "rava-kesari",
      name: "Rava Kesari",
      price: 40,
      description: "Rich, golden semolina sweet loaded with cashews, raisins, and aromatic ghee.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEaAkf9ROkkOOg8hNFYXShTgN9uM8R-WkUDNuBCAMiXIi8IACAvrzABMaH7iSR3E3YFAubimp9ry4yrysnsnSgjoL4U0BG7ri5HRs5ay7zOam5SSnfYQgRbw87Epo0pYC71I94Cgu2wh032nJcXUA1CaG9_xLsBepV1pHnw4WeQSQcJkPQODDmhFTo7YvSbqEcMDt4VF8sYW2wunlbRHwx74oLUiNkfxmjfCxA26iSftyIAt9KEwnI2iF9N2xaPog1HxrsF4H6kFOo",
      badge: "🌿 Pure Veg"
    },
    {
      id: "bisi-bele-bath",
      name: "Bisi Bele Bath",
      price: 50,
      description: "Hot, spiced lentil and rice mixture loaded with fresh vegetables and seasoned in pure ghee.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQR6ory63DRRTGYjv9rPzR5wAFZA8UjimwOgFR6W3w0Ht0hogtT7odCdzkoz1bONx0_zPUp5EOl9BmGr2DCxXJTUK2iSzImuzBAr5m3P4EJz8PMTnu-81F6Prg96GedJ1Udzod33VSzyV0IEG34iAjx7ML5-9Aw79-tk4UnHAAWQ14a-CxN1YieKjKu7SRNYHMCBHeWXAAT9scKQmh6qYTTOw6fkquGUlcMv-I7k4y-hjp2Z6mtJf6_rBKyLEc5nsryP8Fgwt3dSxk",
      badge: "⭐ Customer Favourite"
    }
  ];
};

export const dailyMeals = [
  {
    id: "meals-mini",
    name: "Mini Meals",
    price: 60,
    description: "A comforting daily meal featuring steamed rice, dal, curry of the day, curd, and papad. Homely and fresh.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBrTGO6iS20wpb50bfCsfrO5_YLa_Dgvq6t3qfrHh5hi5RoENqspvZRsLLcxSRg0JPFuUfGnEEaT-BLUES_7dJCVcCv0sWIqiirETv2JRPtePmKQ8GeD6957vtVMp18hgDsn0cdWzvBbdsTcAj-z0CnhCTCuy4s4YUNbAHyOiu_7CEyvEufWGoZ7Sno_mqn_ysGez8lFRheryZylSizaYZYNCdZYIQ8R6E9zS6Lw4Br3FQyGnIwUhPbBEgh8LrZoXiiHeAuX0QnUR_",
    badges: ["🌿 Pure Veg", "🏠 Home Style"]
  },
  {
    id: "meals-south-indian",
    name: "South Indian Meals",
    price: 90,
    description: "Standard lunch with steamed rice, premium sambar, rasam, two vegetable curries, curd, pickle, and sweet.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    badges: ["🌿 Pure Veg", "⭐ Most Popular"]
  },
  {
    id: "meals-curd-rice",
    name: "Curd Rice",
    price: 50,
    description: "Creamy traditional curd rice tempered with mustard seeds, curry leaves, ginger, and pomegranate seeds.",
    image: spicedButtermilkImg,
    badges: ["🌿 Pure Veg", "🍃 Light & Healthy"]
  },
  {
    id: "meals-sambar-rice",
    name: "Sambar Rice",
    price: 50,
    description: "Hot, spiced lentil rice cooked with vegetables and pure ghee, served with papad/chips.",
    image: spicedButtermilkImg,
    badges: ["🌿 Pure Veg", "🔥 Customer Choice"]
  },
  {
    id: "meals-special",
    name: "Special Meal",
    price: 110,
    description: "An indulgent traditional meal with pulihora/fried rice, sweet, pakoda, double vegetable curry, curd, and special pickle.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop",
    badges: ["🌿 Pure Veg", "✨ Royal Experience"]
  }
];
