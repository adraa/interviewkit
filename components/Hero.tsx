import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white py-20 px-4 md:px-8 overflow-hidden border-b border-gray-800">
      {/* Aggressive Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#39FF14] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block bg-red-600 text-white text-xs font-black px-4 py-1 rounded mb-6 uppercase tracking-widest rotate-2 hover:rotate-0 transition-transform">
          Amaran: Content Ini Untuk Yang Serius Nak Kerja Je
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 tracking-tight">
          DEGREE GANTUNG KAT DINDING, <br/>
          TAPI DUIT DALAM POKET <span className="text-red-500 italic">HABUK PUN TAKDE?</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed border-l-4 border-red-600 pl-4 md:pl-0 md:border-none">
          Member sekolah yang 'biasa-biasa' dulu dah pakai Honda & belanja mak ayah. <br className="hidden md:block"/>
          <span className="text-white font-bold">Kau? Masih minta duit topup.</span> Malu weh.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="w-full md:w-auto">
             <Button 
                text="AKU NAK KERJA GAJI RM3,000+ (RM49)" 
                variant="neon"
                fullWidth={true}
             />
          </div>
        </div>

        <div className="mt-8 relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-[#39FF14] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
                src="https://placehold.co/600x400/1e293b/ffffff/png?text=Resume+Kena+Reject" 
                alt="Situasi Resume Kena Reject" 
                className="relative rounded-lg border border-gray-700 w-full shadow-2xl grayscale group-hover:grayscale-0 transition duration-500"
            />
        </div>
      </div>
    </section>
  );
};