import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { PriceAnchor } from './components/PriceAnchor';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-900 text-white">
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solution />
        <SocialProof />
        <PriceAnchor />
        <FAQ />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-slate-900/90 backdrop-blur border-t border-gray-700 md:hidden z-50">
        <a 
          href="https://toyyibpay.com/kit-pukau-majikan"
          className="block w-full bg-[#39FF14] text-black text-center font-black py-4 rounded shadow-lg uppercase tracking-wide animate-pulse"
        >
          Download Sekarang (RM49)
        </a>
      </div>
    </div>
  );
}

export default App;