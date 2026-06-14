import React from 'react';

const Landing = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0F0F1A] overflow-hidden p-4 font-inter">
      {/* Animated Gradient Background */}
      {/* Assumes 'animate-gradient-shift' is defined in tailwind.config.js with keyframes for background-position and background-size: 200% 200% */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#1A1A2E] bg-[length:200%_200%] opacity-30 animate-gradient-shift"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4 md:text-5xl lg:text-6xl">
          Transformuj Své Tělo
        </h1>
        <p className="text-lg text-[#A0A0B0] mb-8 md:text-xl">
          Dosáhni svých fitness cílů s personalizovaným tréninkem a podporou.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <button className="bg-[#FF6B35] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-opacity-90 transition-colors duration-300">
            Začít zdarma
          </button>
          <button className="bg-[#1A1A2E] text-[#A0A0B0] font-bold py-3 px-6 rounded-xl border border-[#A0A0B0]/30 hover:border-[#FF6B35] hover:text-white transition-all duration-300">
            Více info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;