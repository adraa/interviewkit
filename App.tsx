import React from 'react';
import { Hero } from './components/Hero';
import { UrgencyBar } from './components/UrgencyBar';
import { PainPoints } from './components/PainPoints';
import { SocialProof } from './components/SocialProof';
import { Solution } from './components/Solution';
import { PriceAnchor } from './components/PriceAnchor';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-0 md:py-8">
      {/* Narrow Container: max-w-3xl forces focus */}
      <main className="max-w-3xl mx-auto bg-white shadow-2xl min-h-screen overflow-hidden border-x border-gray-200">
        <Hero />
        <UrgencyBar />
        <PainPoints />
        <SocialProof />
        <Solution />
        <PriceAnchor />
        <Guarantee />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;