import React from 'react';
import { Button } from './Button';

export const PriceAnchor: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white px-4 md:px-8 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 opacity-50 z-0"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">
          JANGAN TUNGGU SAMPAI OFFER TAMAT
        </h2>
        
        <div className="bg-slate-800 border-2 border-[#39FF14] p-8 md:p-14 rounded-3xl shadow-[0_0_50px_rgba(57,255,20,0.1)] max-w-2xl mx-auto relative">
          {/* Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#39FF14] text-black text-sm font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
            Limited Time Offer
          </div>

          <div className="mb-8 mt-4">
            <span className="block text-red-500 text-2xl md:text-3xl font-bold line-through mb-2 opacity-70">
              RM299
            </span>
            <div className="flex justify-center items-baseline gap-2">
                <span className="text-6xl md:text-8xl font-black text-[#39FF14] font-display tracking-tighter drop-shadow-lg">
                RM49
                </span>
            </div>
          </div>

          <p className="text-white text-lg md:text-xl mb-10 font-medium leading-relaxed">
            "RM49 ni harga sekali makan kat kafe hipster. Kau makan, esok jadi tahi. 
            <br className="hidden md:block"/>
            <span className="text-[#39FF14]">Beli Kit ni, bulan depan gaji masuk.</span> Mana lagi cerdik?"
          </p>

          <Button 
            text="DOWNLOAD KIT PUKAU SEKARANG (RM49)" 
            variant="neon"
            fullWidth={true}
          />
          
          <div className="mt-6 text-xs text-gray-500 flex justify-center items-center gap-2">
            <i className="fa-solid fa-lock"></i> Secure Payment via ToyyibPay / FPX
          </div>
        </div>
      </div>
    </section>
  );
};