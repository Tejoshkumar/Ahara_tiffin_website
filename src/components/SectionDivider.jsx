import React from 'react';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-12 w-full max-w-[1280px] mx-auto px-6">
      <div className="flex-1 h-[1px] bg-secondary/20"></div>
      <div className="mx-6 text-secondary opacity-60 flex items-center justify-center">
        {/* Simplified Kolam/Mandala SVG */}
        <svg className="w-8 h-8 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 7V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="flex-1 h-[1px] bg-secondary/20"></div>
    </div>
  );
}
