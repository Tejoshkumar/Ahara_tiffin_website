import React, { useState } from 'react';
import logoImg from '../../ahara_logo.png';
import { getSpecials, getSignatureDishes } from '../data/menuData';
import DishCard from '../components/DishCard';
import SectionDivider from '../components/SectionDivider';
import ahara1 from "../../ahara_image_1.jpeg";
import ahara2 from "../../ahara_image_2.jpeg";
import ahara3 from "../../ahara_image_3.jpeg";
import ahara4 from "../../ahara_image_4.jpeg";
import Reveal from "../components/Reveal";
import heroFood from "../../ahara_hero_food.png";


const galleryImages = [
  ahara1,
  ahara2,
  ahara3,
  ahara4,
];

export default function Home({ setCurrentPage }) {
  const specials = getSpecials();
  const signatures = getSignatureDishes();

  // Feedback form state
  const [feedback, setFeedback] = useState({ name: '', rating: '5 Stars - Exceptional', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedback.name.trim() || !feedback.message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFeedback({ name: '', rating: '5 Stars - Exceptional', message: '' });
    }, 3000);
  };

  return (
    <div className="animate-fade-in-up">
      {/* Centered Heritage Hero Section */}
      <Reveal>
        <section className="relative bg-surface py-20 px-6 md:px-16 overflow-hidden">
          {/* Elegant Brass Border Frame */}
          <div className="absolute inset-4 md:inset-8 border border-secondary/20 pointer-events-none rounded-[48px] z-10"></div>
          <div className="absolute inset-5 md:inset-10 border border-secondary/10 pointer-events-none rounded-[44px] z-10"></div>

          <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center relative z-20">
            {/* Center-aligned Logo - STRICT BRAND RULE */}
            <div className="mb-8">
              <img
                alt="Ahara Tiffins Logo"
                className="w-44 md:w-60 h-auto object-contain mx-auto"
                src={logoImg}
              />
            </div>

            {/* Center-aligned Text Content */}
            <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
              Tradition <br className="hidden md:block" />
              <span className="italic text-secondary">Served Fresh.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
              Authentic South Indian tiffins, prepared fresh every single day with heritage recipes and premium ingredients. Pure tastes, warm hospitality, and traditional care.
            </p>

            {/* Center-aligned CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <button
                onClick={() => setCurrentPage('menu')}
                className="bg-primary text-secondary-fixed px-10 py-4 rounded-full font-label-caps tracking-widest hover:bg-secondary hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                EXPLORE MENU
              </button>
              <a
                href="#specials"
                className="border-2 border-secondary-fixed text-secondary px-10 py-4 rounded-full font-label-caps tracking-widest flex items-center justify-center hover:bg-secondary/5 hover:scale-105 transition-all duration-300"
              >
                TODAY'S SPECIALS
              </a>
            </div>

            {/* Food Photography in Arched Frame */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-t-full overflow-hidden shadow-2xl border-x-8 border-t-8 border-surface-container-high animate-float">
                <img
                  alt="Premium South Indian breakfast with idli dosa vada chutney and sambar"
                  className="w-full h-full object-cover"
                  src={heroFood}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary rounded-full opacity-30"></div>
            </div>
          </div>
        </section>
        <Reveal>

          {/* The Ahara Experience */}
        </Reveal>
        <section className="py-24 bg-surface-container-low px-6 md:px-16" id="experience">
          <div className="max-w-[1280px] mx-auto text-center mb-16">
            <div className="flex justify-center mb-4 text-secondary opacity-50">
              <span className="material-symbols-outlined text-4xl">hotel_class</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Experience The Taste Of Tradition</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              At Ahara, we serve authentic tiffins using age-old family recipes. We blend the hygiene and elegance of a 5-star kitchen with the comforting, affordable warmth of traditional South Indian hospitality.
            </p>
          </div>

          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-surface p-10 rounded-[32px] border border-outline-variant/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-on-secondary-fixed-variant text-3xl"></span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Pure Ingredients</h3>
              <p className="text-on-surface-variant leading-relaxed">
                We use premium quality ingredients — top-grade rice, cold-pressed oils, and pure ghee — cooked fresh in small batches throughout the day.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-surface p-10 rounded-[32px] border border-outline-variant/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-on-secondary-fixed-variant text-3xl">restaurant_menu</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Heritage Flavours</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Centuries-old recipes meticulously prepared without any artificial colors, MSG, or preservatives, keeping the taste authentic.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface p-10 rounded-[32px] border border-outline-variant/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-on-secondary-fixed-variant text-3xl">volunteer_activism</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Served with Love</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Warm, responsive hospitality that honors our heritage. Every plate is served fresh and steaming hot, straight from the grid.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <SectionDivider />


      {/* Today's Specials */}
      <Reveal>
        <section className="py-24 px-6 md:px-16" id="specials">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary">Today's Fresh Picks</h2>
                <p className="text-secondary font-label-caps tracking-widest mt-2 uppercase">CHEF'S SPECIAL RECOMMENDATIONS</p>
              </div>
              <button
                onClick={() => setCurrentPage('menu')}
                className="group flex items-center gap-2 text-secondary hover:text-primary font-bold text-sm tracking-wide transition-colors"
              >
                VIEW ALL ITEMS
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specials.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Signature Dishes Asymmetric Bento Section */}
      <Reveal>
        <section className="py-24 bg-primary px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-surface mb-16 text-center">Our Signature Creations</h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Large Bento Card (Maharaja Thali) */}
              <div className="md:col-span-7 relative rounded-[32px] overflow-hidden group min-h-[400px] md:h-[500px]">
                <img
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  src={signatures[0].image}
                  alt={signatures[0].name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-end p-10 md:p-12">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest w-fit mb-4">
                    {signatures[0].badge}
                  </span>
                  <h3 className="text-white font-headline-lg text-3xl md:text-4xl mb-2">{signatures[0].name}</h3>
                  <p className="text-white/80 max-w-md text-sm md:text-base mb-4">{signatures[0].description}</p>
                  <div className="flex justify-between items-center w-full">
                    <span className="text-secondary-fixed font-headline-md text-2xl">₹{signatures[0].price}</span>
                    <button
                      onClick={() => setCurrentPage('menu')}
                      className="bg-secondary text-white px-6 py-2.5 rounded-xl text-xs font-bold tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
                    >
                      ORDER NOW
                    </button>
                  </div>
                </div>
              </div>

              {/* Stacked Bento Cards */}
              <div className="md:col-span-5 flex flex-col gap-8">
                {/* Small Bento 1 (Rava Kesari) */}
                <div className="relative rounded-[32px] overflow-hidden group h-[236px]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    src={signatures[1].image}
                    alt={signatures[1].name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex flex-col justify-end p-8">
                    <span className="bg-[#d0e9d4] text-[#0b2013] px-3 py-0.5 rounded-full text-[9px] font-bold tracking-widest w-fit mb-2">
                      {signatures[1].badge}
                    </span>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-white font-headline-md text-xl">{signatures[1].name}</h3>
                      <span className="text-secondary-fixed font-headline-md text-lg">₹{signatures[1].price}</span>
                    </div>
                  </div>
                </div>

                {/* Small Bento 2 (Bisi Bele Bath) */}
                <div className="relative rounded-[32px] overflow-hidden group h-[236px]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    src={signatures[2].image}
                    alt={signatures[2].name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex flex-col justify-end p-8">
                    <span className="bg-secondary text-white px-3 py-0.5 rounded-full text-[9px] font-bold tracking-widest w-fit mb-2">
                      {signatures[2].badge}
                    </span>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-white font-headline-md text-xl">{signatures[2].name}</h3>
                      <span className="text-secondary-fixed font-headline-md text-lg">₹{signatures[2].price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      {/* Daily Meals Subscription Section */}
      <section className="py-24 px-6 md:px-16 bg-surface-container-low" id="daily-meals">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Image */}
          <div>
            <div className="rounded-[32px] overflow-hidden shadow-xl border border-outline-variant/20 aspect-[4/3] bg-primary/5">
              <img
                alt="Ahara Daily Mini Meal"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBrTGO6iS20wpb50bfCsfrO5_YLa_Dgvq6t3qfrHh5hi5RoENqspvZRsLLcxSRg0JPFuUfGnEEaT-BLUES_7dJCVcCv0sWIqiirETv2JRPtePmKQ8GeD6957vtVMp18hgDsn0cdWzvBbdsTcAj-z0CnhCTCuy4s4YUNbAHyOiu_7CEyvEufWGoZ7Sno_mqn_ysGez8lFRheryZylSizaYZYNCdZYIQ8R6E9zS6Lw4Br3FQyGnIwUhPbBEgh8LrZoXiiHeAuX0QnUR_"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Ahara Daily Meals</h2>
              <p className="text-secondary font-label-caps tracking-widest uppercase">YOUR EVERYDAY TASTE OF HOME</p>
            </div>

            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Perfect for college students and working professionals. Fresh, comforting, and affordable meals prepared daily, bringing the warmth of a traditional home kitchen straight to you.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-secondary text-2xl">home</span>
                <div>
                  <p className="font-bold text-primary text-sm">Home Style Taste</p>
                  <p className="text-xs text-on-surface-variant">Simple, delicious cooking with traditional spices.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-2xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-secondary text-2xl">eco</span>
                <div>
                  <p className="font-bold text-primary text-sm">Prepared Fresh Daily</p>
                  <p className="text-xs text-on-surface-variant">Sourced and prepared every morning — zero leftovers.</p>
                </div>
              </div>
            </div>

            {/* Meal Plan Badges */}
            <div className="flex gap-4 mt-2">
              <span className="px-4 py-2 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-[10px] font-bold tracking-wider font-label-caps uppercase">
                MINI MEALS
              </span>
              <span className="px-4 py-2 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-[10px] font-bold tracking-wider font-label-caps uppercase">
                MONTHLY SUBSCRIPTIONS
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={() => setCurrentPage('menu')}
              className="w-fit bg-primary text-secondary-fixed px-10 py-4 rounded-full font-label-caps tracking-widest hover:bg-secondary hover:text-white hover:scale-105 transition-all duration-300 mt-4"
            >
              EXPLORE MEAL PLANS
            </button>
          </div>
        </div>
      </section>

      {/* Ahara Gallery */}
      <Reveal>

        <section className="py-20 bg-[#F7E8D0]">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-12">

              <h2 className="text-4xl font-bold text-[#062C1B]">
                Moments at Ahara
              </h2>

              <p className="mt-3 text-[#352116]">
                Fresh flavours, warm memories, and authentic experiences.
              </p>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {galleryImages.map((image, index) => (

                <div
                  key={index}
                  className="overflow-hidden rounded-3xl shadow-lg"
                >

                  <img
                    src={image}
                    className="
          w-full 
          h-72 
          object-cover 
          hover:scale-110 
          transition 
          duration-700
          "
                  />

                </div>

              ))}

            </div>

          </div>

        </section>
      </Reveal>


      {/* Customer Reviews */}
      <Reveal>
        <section className="py-24 bg-surface-container-high px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-16">Kind Words From Our Guests</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-surface p-10 rounded-[32px] border border-outline-variant/10 relative hover:shadow-xl transition-all duration-500">
                <span className="material-symbols-outlined text-secondary/20 text-6xl absolute top-6 right-8">format_quote</span>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="italic text-on-surface leading-relaxed mb-8 text-sm">
                  "The Filter Coffee is absolutely divine. Strong decoction frothed beautifully in that brass davara. Priced at just ₹20, it is both authentic and incredibly affordable!"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">AM</div>
                  <div>
                    <h5 className="font-bold text-primary text-sm">Anjali Menon</h5>
                    <span className="text-[10px] text-on-surface-variant font-label-caps uppercase tracking-wider">VERIFIED GUEST</span>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-surface p-10 rounded-[32px] border border-outline-variant/10 relative hover:shadow-xl transition-all duration-500">
                <span className="material-symbols-outlined text-secondary/20 text-6xl absolute top-6 right-8">format_quote</span>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="italic text-on-surface leading-relaxed mb-8 text-sm">
                  "Their Ghee Karam Dosa has the perfect spicy podi crunch, and the idlies are soft as clouds. You get 5-star presentation and taste at local tiffin center rates. A gem!"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold text-xs">RS</div>
                  <div>
                    <h5 className="font-bold text-primary text-sm">Rahul Sharma</h5>
                    <span className="text-[10px] text-on-surface-variant font-label-caps uppercase tracking-wider">FOOD BLOGGER</span>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-surface p-10 rounded-[32px] border border-outline-variant/10 relative hover:shadow-xl transition-all duration-500">
                <span className="material-symbols-outlined text-secondary/20 text-6xl absolute top-6 right-8">format_quote</span>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="italic text-on-surface leading-relaxed mb-8 text-sm">
                  "We ordered catering for a small family gathering. The Maharaja Thali was a massive hit. Clean preparation, excellent taste, and great logistics. Highly recommend."
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold text-xs">SP</div>
                  <div>
                    <h5 className="font-bold text-primary text-sm">Sriya Patel</h5>
                    <span className="text-[10px] text-on-surface-variant font-label-caps uppercase tracking-wider">REGULAR CUSTOMER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>


      {/* Feedback Form Section */}
      <section className="py-24 px-6 md:px-16 bg-surface">
        <div className="max-w-[800px] mx-auto bg-surface-bright rounded-[32px] border border-outline-variant/20 p-8 md:p-16 shadow-xl relative">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[100px] text-secondary">rate_review</span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-4">Share Your Experience</h2>
          <p className="text-on-surface-variant text-center mb-10">Your valuable feedback helps us perfect the tradition.</p>

          {submitted ? (
            <div className="bg-[#d0e9d4] border border-[#b4cdb8] text-[#0b2013] p-6 rounded-2xl text-center font-bold animate-fade-in">
              <span className="material-symbols-outlined text-3xl mb-2 block">task_alt</span>
              Thank you for sharing your experience! We appreciate your support.
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs tracking-wider text-on-surface-variant">YOUR NAME</label>
                  <input
                    required
                    type="text"
                    value={feedback.name}
                    onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                    className="bg-transparent border-b border-outline focus:border-secondary focus:ring-0 transition-colors py-2 text-primary text-sm placeholder:text-on-surface-variant/30"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs tracking-wider text-on-surface-variant">RATING</label>
                  <select
                    value={feedback.rating}
                    onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
                    className="bg-transparent border-b border-outline focus:border-secondary focus:ring-0 transition-colors py-2 text-primary text-sm outline-none cursor-pointer"
                  >
                    <option>5 Stars - Exceptional</option>
                    <option>4 Stars - Very Good</option>
                    <option>3 Stars - Good</option>
                    <option>2 Stars - Fair</option>
                    <option>1 Star - Poor</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-xs tracking-wider text-on-surface-variant">YOUR MESSAGE</label>
                <textarea
                  required
                  rows="4"
                  value={feedback.message}
                  onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                  className="bg-transparent border-b border-outline focus:border-secondary focus:ring-0 transition-colors py-2 text-primary text-sm resize-none placeholder:text-on-surface-variant/30"
                  placeholder="Tell us how was your meal..."
                />
              </div>
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="bg-secondary text-white px-16 py-4 rounded-full font-label-caps tracking-widest hover:bg-on-secondary-container hover:scale-105 active:scale-95 transition-all duration-300 text-xs"
                >
                  SUBMIT FEEDBACK
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
