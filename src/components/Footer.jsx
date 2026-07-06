import React from 'react';
import logoImg from '../../ahara_logo.png';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-high border-t border-outline-variant py-16 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Brand details */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={logoImg} 
              alt="Ahara Tiffins Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className="font-display-lg text-lg text-primary font-bold">
              Ahara Tiffins
            </span>
          </div>
          <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
            Dedicated to preserving the culinary heritage of South Indian tiffin culture, served with contemporary grace.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-secondary hover:text-white hover:scale-110 transition-all duration-300" href="#" aria-label="Website">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-secondary hover:text-white hover:scale-110 transition-all duration-300" href="#" aria-label="WhatsApp">
              <span className="material-symbols-outlined text-sm">chat</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-secondary hover:text-white hover:scale-110 transition-all duration-300" href="#" aria-label="Share">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h6 className="font-label-caps text-[11px] tracking-[0.2em] text-primary mb-6 font-bold uppercase">QUICK LINKS</h6>
          <ul className="space-y-4">
            <li>
              <a 
                href="#experience" 
                onClick={(e) => {
                  setCurrentPage('home');
                  setTimeout(() => {
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                  e.preventDefault();
                }}
                className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-sm"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="/menu" 
                onClick={(e) => handleNavClick(e, 'menu')}
                className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-sm"
              >
                Full Menu
              </a>
            </li>
            <li>
              <a 
                href="/daily-meals" 
                onClick={(e) => handleNavClick(e, 'daily-meals')}
                className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-sm"
              >
                Daily Meals
              </a>
            </li>
            <li>
              <a 
                href="/cart" 
                onClick={(e) => handleNavClick(e, 'cart')}
                className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block text-sm"
              >
                Your Plate
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Visit Us */}
        <div>
          <h6 className="font-label-caps text-[11px] tracking-[0.2em] text-primary mb-6 font-bold uppercase">VISIT US</h6>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-secondary text-lg mt-0.5">location_on</span>
              <span>
                Near Three Temples, <br />
                Thagarapuvalasa, Sanghivalasa, <br />
                Visakhapatnam, Bheemunipatnam, <br />
                Andhra Pradesh 531162
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-secondary text-lg mt-0.5">schedule</span>
              <span>
                Daily: 7:00 AM - 10:00 PM <br />
                Fresh Tiffins all day
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h6 className="font-label-caps text-[11px] tracking-[0.2em] text-primary mb-6 font-bold uppercase">CONTACT</h6>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-secondary text-lg">phone</span>
              <span>+91 95536 12882</span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="material-symbols-outlined text-secondary text-lg">mail</span>
              <span>namaste@aharatiffins.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs">
          © {new Date().getFullYear()} Ahara Tiffins. Tradition Served Fresh.
        </p>
        <div className="flex gap-8 text-xs text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
