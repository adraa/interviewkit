import React from 'react';

const CheckItem: React.FC<{ title: string; desc: string; isBonus?: boolean }> = ({ title, desc, isBonus }) => (
  <div className="flex items-start gap-4 mb-6 group">
    <div className="flex-shrink-0 mt-1">
      <i className={`fa-solid ${isBonus ? 'fa-gift text-yellow-400' : 'fa-check text-[#39FF14]'} text-xl`}></i>
    </div>
    <div>
      <h4 className={`font-bold text-lg md:text-xl ${isBonus ? 'text-yellow-400 uppercase tracking-wider' : 'text-white'}`}>
        {title}
      </h4>
      <p className="text-gray-400 text-sm md:text-base mt-1 group-hover:text-gray-300 transition-colors">{desc}</p>
    </div>
  </div>
);

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-slate-800 px-4 md:px-8 border-y border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            BERHENTI JADI MANGSA KEADAAN. <br/><span className="text-[#39FF14]">INI CHEAT CODE DIA.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Kau tak payah pandai English macam Mat Salleh. Kau cuma perlu <span className="font-bold text-white">SKRIP</span> yang betul. 
            Copy. Paste. Hafal. <span className="underline decoration-[#39FF14] decoration-4 underline-offset-4">Lulus.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Queue Side */}
          <div className="order-2 md:order-1 relative">
             <div className="absolute inset-0 bg-[#39FF14] blur-[100px] opacity-10"></div>
             <img 
               src="https://placehold.co/500x500/0f172a/39ff14/png?text=KIT+PUKAU+BUNDLE+3D" 
               alt="Kit Pukau Bundle Box 3D" 
               className="relative z-10 mx-auto hover:scale-105 transition duration-500 drop-shadow-2xl"
             />
          </div>

          {/* Stack Side */}
          <div className="order-1 md:order-2">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl">
                <CheckItem 
                  title="Blueprint Pukau Interviewer (Ebook)" 
                  desc="Kitab suci untuk lepas filter HR 2026. Baca ni sebelum tidur."
                />
                <CheckItem 
                  title="30 Skrip Jawapan Maut (English & BM)" 
                  desc="Tiru sebiji-sebiji. HR akan ingat kau pro, padahal kau hafal skrip je."
                />
                <CheckItem 
                  title="Checklist Anti-Gugup" 
                  desc="Hilangkan ketar lutut 5 minit sebelum masuk bilik. Confidence level dewa."
                />
                <div className="my-6 border-t border-slate-700"></div>
                <CheckItem 
                  title="BONUS 1: 7-Hari Crash Course Email (PDF)" 
                  desc="Strategi follow-up supaya majikan tak lupa nama kau."
                  isBonus={true}
                />
                <CheckItem 
                  title="BONUS 2: Nota Sulit Realiti Malaysia" 
                  desc="Cara Nego Gaji Jalanan. Jangan biar majikan pijak kepala kau."
                  isBonus={true}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};