import React from 'react';
import { motion } from 'framer-motion';
import { dailyMeals } from '../data/menuData';
import DishCard from '../components/DishCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 15 }
  }
};

export default function DailyMeals({ setCurrentPage }) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 kolam-bg-subtle pointer-events-none z-0"></div>

      <main className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 relative z-10">
        
        {/* Header Section with Motion */}
        <section className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center mb-4 text-secondary opacity-80"
          >
            <span className="material-symbols-outlined text-5xl">home_storage</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-4"
          >
            Ahara Daily Meals
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="font-body-lg text-on-surface-variant italic"
          >
            "Your everyday taste of home, freshly prepared with care."
          </motion.p>
        </section>

        {/* Feature Highlights Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 flex gap-4 items-start shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl">eco</span>
            <div>
              <h3 className="font-bold text-primary text-sm mb-1">Zero Leftovers</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Prepared in small batches, ensuring only fresh food is served every single day.</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 flex gap-4 items-start shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl">restaurant</span>
            <div>
              <h3 className="font-bold text-primary text-sm mb-1">Pure Ingredients</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Top-grade rice, cold-pressed oils, and pure ghee. No chemicals or MSG.</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 flex gap-4 items-start shadow-sm">
            <span className="material-symbols-outlined text-secondary text-2xl">home</span>
            <div>
              <h3 className="font-bold text-primary text-sm mb-1">Homely Taste</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Authentic family recipes that provide nourishing daily comfort and energy.</p>
            </div>
          </div>
        </motion.section>

        {/* Meals Grid with Stagger Reveal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dailyMeals.map((dish) => (
            <motion.div key={dish.id} variants={itemVariants} className="h-full">
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-primary text-on-primary rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">room_service</span>
          </div>
          <h2 className="font-headline-lg text-secondary-fixed text-2xl md:text-3xl mb-4 font-bold">Monthly Subscriptions Available</h2>
          <p className="font-body-lg text-white/80 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            Are you a student or working professional near Thagarapuvalasa? Save time and stay healthy with our custom monthly meal plans. Delivered hot or ready for pickup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => {
                setCurrentPage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-secondary text-white px-8 py-3.5 rounded-full font-label-caps text-xs tracking-widest hover:bg-white hover:text-primary transition-all duration-300 shadow-md"
            >
              EXPLORE FULL MENU
            </button>
            <a 
              href="https://wa.me/919553612882?text=Hi%20Ahara%20Tiffins%2C%20I'm%20interested%20in%20your%20Daily%20Meals%20Monthly%20Subscription%20plans."
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-label-caps text-xs tracking-widest hover:brightness-110 transition-all duration-300 shadow-md flex items-center gap-2"
            >
              SUBSCRIBE ON WHATSAPP
            </a>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
