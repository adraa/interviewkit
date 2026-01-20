import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-10 pb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 text-center">
        
        {/* Super Headline */}
        <div className="inline-block bg-red-100 text-red-700 font-bold px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-wider mb-6 border border-red-200">
          <i className="fa-solid fa-triangle-exclamation mr-2"></i>
          Amaran: Teknik Ini Untuk Yang Serius Nak Kerja Sahaja
        </div>
        
        {/* Main Headline */}
        <h1 className="font-display text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          SIAPA SANGKA CUMA UBAH <br/>
          <span className="text-red-600 bg-red-50 px-2 rounded decoration-red-300 underline underline-offset-4 decoration-4">
            'SKRIP'
          </span>
          <br/>
          BOLEH DAPAT GAJI RM3,000+ SEBULAN?
        </h1>
        
        {/* Subheadline */}
        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Tak Perlu Kabel. Tak Perlu English Power. <br className="hidden md:block" />
          <span className="font-bold text-slate-900 bg-yellow-200 px-1 border-b-2 border-yellow-400">Tak Perlu Muka Hensem.</span>
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-12">
             <Button 
                text="SAYA NAK RAHSIA NI (RM49)" 
                variant="primary"
                fullWidth={false}
                className="w-full md:w-auto animate-pulse min-w-[300px]"
                href="#pricing"
             />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-medium">
          <span className="flex items-center"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Edisi Terkini 2026</span>
          <span className="flex items-center"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> 100% Digital Download</span>
          <span className="flex items-center"><i className="fa-solid fa-check-circle text-green-500 mr-2"></i> Proven Results</span>
        </div>
      </div>
    </section>
  );
};