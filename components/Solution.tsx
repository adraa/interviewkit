import React from 'react';

interface BentoItemProps {
  title: string;
  desc: string;
  icon: string;
  isBonus?: boolean;
  imageAlt: string;
}

const BentoItem: React.FC<BentoItemProps> = ({ title, desc, icon, isBonus, imageAlt }) => (
  <div className={`relative group overflow-hidden rounded-2xl border ${isBonus ? 'border-yellow-500 bg-slate-900' : 'border-slate-700 bg-slate-800'} hover:border-[#39FF14] transition-colors duration-300 flex flex-col h-full`}>
    {/* Product Cover Placeholder */}
    <div className="h-40 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
         <img 
            src={`https://placehold.co/600x400/1e293b/${isBonus ? 'eab308' : '39ff14'}/png?text=${encodeURIComponent(imageAlt)}`}
            alt={imageAlt}
            className="object-cover w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
         />
         <i className={`${icon} text-5xl absolute z-10 ${isBonus ? 'text-yellow-500' : 'text-[#39FF14]'} drop-shadow-lg`}></i>
      </div>
    </div>
    
    <div className="p-6 flex-grow flex flex-col">
        {isBonus && (
            <span className="inline-block bg-yellow-500 text-black text-xs font-black px-2 py-1 rounded mb-3 w-max uppercase">
                Bonus Item
            </span>
        )}
        <h3 className={`font-display text-xl font-bold mb-2 ${isBonus ? 'text-yellow-400' : 'text-white'}`}>
            {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
            {desc}
        </p>
    </div>
  </div>
);

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-slate-800 px-4 md:px-8 border-y border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            Bukan Sekadar Ebook. <br/><span className="text-[#39FF14]">Ini Senjata Perang.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kami tak jual "motivasi". Kami bagi tools untuk kau <span className="text-white font-bold underline decoration-red-500">hack</span> system HR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoItem 
            title="Blueprint Pukau Interviewer"
            desc="Ebook utama. Kitab suci untuk lepas filter HR 2026. Dari cara dress up sampai cara 'nego' gaji."
            icon="fa-solid fa-book"
            imageAlt="Main Ebook"
          />
          <BentoItem 
            title="30 Skrip Jawapan Maut"
            desc="Tiru bulat-bulat. Bila HR tanya soalan killer, kau senyum je sebab dah ada jawapan dalam poket."
            icon="fa-solid fa-file-lines"
            imageAlt="Script Templates"
          />
          <BentoItem 
            title="Checklist Anti-Gugup"
            desc="Hilangkan ketar lutut dalam 5 minit. Checklist wajib semak sebelum ketuk pintu bilik interview."
            icon="fa-solid fa-clipboard-check"
            imageAlt="Checklist PDF"
          />
          <BentoItem 
            title="Hacks Body Language"
            desc="Psikologi duduk, cara pandang mata, dan posisi tangan yang buat HR rasa kau 'Dominant' & 'Confident'."
            icon="fa-solid fa-eye"
            imageAlt="Body Language Guide"
          />
          <BentoItem 
            title="7-Hari Email Crash Course"
            desc="Strategi follow-up lepas interview supaya majikan tak lupa nama kau. Jangan jadi 'ghosted'."
            icon="fa-solid fa-envelope"
            imageAlt="Email Course"
          />
          <BentoItem 
            title="Realiti Interview Malaysia"
            desc="Nota sulit: Budaya syarikat Chinaman vs MNC, dan pantang larang HR yang tak diajar kat universiti."
            icon="fa-solid fa-map-location-dot"
            isBonus={true}
            imageAlt="Bonus Content"
          />
        </div>
      </div>
    </section>
  );
};