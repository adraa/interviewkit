import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-8 px-5 text-center bg-white">
      
      {/* Top Badge */}
      <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 text-xs md:text-sm uppercase tracking-widest mb-6 rounded-sm shadow-sm">
        Amaran: Teknik Ini Untuk Yang Serius Nak Kerja Sahaja
      </div>
      
      {/* Headline */}
      <h1 className="font-black text-4xl md:text-5xl leading-[1.1] text-slate-900 uppercase mb-4 tracking-tight">
        Siapa Sangka Cuma Ubah <span className="bg-red-600 text-white px-2 inline-block transform -rotate-1">SKRIP</span> Boleh Dapat Gaji RM3,000+?
      </h1>
      
      {/* Subhead */}
      <p className="text-lg font-bold text-gray-700 mb-8 max-w-lg mx-auto leading-tight">
        Tak Perlu Kabel. Tak Perlu English Power. <br className="hidden md:block"/> Tak Perlu Muka Hensem.
      </p>

      {/* Hero Image */}
      <div className="mb-8 relative max-w-lg mx-auto transform hover:scale-[1.01] transition-transform duration-300">
          <img 
              src="https://placehold.co/600x400/eee/333?text=KIT+PUKAU+MAJIKAN+(2026)" 
              alt="Kit Pukau Majikan" 
              className="w-full rounded shadow-2xl border-4 border-white"
          />
          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black font-black text-sm px-4 py-2 rounded shadow-lg border-2 border-white transform rotate-3">
            EDISI 2026
          </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-md mx-auto">
           <Button 
              text="SAYA NAK RAHSIA NI (RM49)" 
              variant="primary"
              fullWidth={true}
              className="w-full text-xl py-5 shadow-xl shadow-red-200 animate-pulse"
              href="#pricing"
           />
           <p className="text-xs text-gray-400 mt-3 flex justify-center items-center gap-2">
              <i className="fa-solid fa-lock"></i> Selamat & Sulit. Instant Download.
           </p>
      </div>

    </section>
  );
};