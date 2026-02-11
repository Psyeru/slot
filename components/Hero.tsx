
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[380px] pt-14 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200" 
          alt="Casino Interior" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50" />
      </div>

      {/* Dealer Character */}
      <div className="absolute left-[-20px] bottom-10 z-10 w-64 h-80">
        <img 
          src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600" 
          alt="Dealer" 
          className="w-full h-full object-contain filter drop-shadow-2xl"
          style={{ transform: 'scale(1.2)' }}
        />
      </div>

      {/* Hero Text */}
      <div className="relative z-20 text-center px-4 mb-20">
        <h2 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-lg animate-pulse">
          <span className="gold-text">메타 슬롯머신</span><br />
          <span className="text-white text-5xl">OPEN!</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
