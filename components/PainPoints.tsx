import React from 'react';

const TruthBomb: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="bg-slate-800 border border-slate-700 p-8 rounded-none hover:border-red-600 transition-colors duration-300 relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <i className={`${icon} text-6xl text-red-600`}></i>
    </div>
    <div className="relative z-10">
        <div className="w-16 h-16 bg-red-900/30 rounded flex items-center justify-center mb-6">
          <i className={`${icon} text-3xl text-red-500`}></i>
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{title}</h3>
        <p className="text-gray-400 leading-relaxed font-light">
          {text}
        </p>
    </div>
  </div>
);

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            KENAPA HR <span className="text-red-600 bg-white px-2">BUANG</span> RESUME KAU?
            </h2>
            <p className="text-gray-400 text-lg">Baca ni dan hadam. Jangan terasa hati, ini realiti.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <TruthBomb 
            icon="fa-solid fa-language"
            title="English Kau Hancur"
            text="Bila HR tanya 'Tell me about yourself', kau gagap 'Err.. err.. my father name is...'. Terus dia pangkah nama kau. Next!"
          />
          <TruthBomb 
            icon="fa-solid fa-person-circle-question"
            title="Muka Tak Confident"
            text="Masuk bilik interview jalan bongkok, mata pandang lantai, suara macam tikus. Macam mana company nak percaya kau handle projek juta-juta?"
          />
          <TruthBomb 
            icon="fa-brands fa-google"
            title="Jawapan Skema Google"
            text="HR dah dengar jawapan 'My weakness is I work too hard' tu 1,000 kali. Boring gila! Kau nampak fake dan takde originaliti."
          />
        </div>
      </div>
    </section>
  );
};