import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { PriceAnchor } from './components/PriceAnchor';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solution />
        <PriceAnchor />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;