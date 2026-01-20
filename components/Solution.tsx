import React from 'react';

interface GridItemProps {
  title: string;
  subtitle: string;
  icon: string;
  isBonus?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({ title, subtitle, icon, isBonus }) => (
  <div className="bg-white border border-gray-100 shadow-md p-6 rounded-xl flex items-start gap-4 hover:shadow-xl transition-shadow duration-300 group">
    <div className="flex-shrink-0">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${isBonus ? 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200' : 'bg-green-100 text-green-600 group-hover:bg-green-200'}`}>
            <i className={`${icon} text-xl`}></i>
        </div>
    </div>
    <div>
        {isBonus && <span className="text-yellow-700 text-[10px] font-bold uppercase tracking-wider bg-yellow-100 px-2 py-0.5 rounded-full border border-yellow-200">Bonus Item</span>}
        <h3 className="font-bold text-slate-900 text-lg leading-tight mt-1">
            {title}
        </h3>
        <p className="text-gray-500 text-sm mt-1 leading-snug">{subtitle}</p>
    </div>
  </div>
);

export const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-white px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Berhenti Stress. Ini <span className="text-red-600 underline decoration-yellow-400 decoration-4 underline-offset-2">Jalan Pintas</span> Dia.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Kit ini disusun khas untuk 'hack' sistem interview di Malaysia.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <GridItem 
            title="Blueprint Pukau Interviewer"
            subtitle="Ebook Utama: Step-by-step dari apply sampai sign offer letter."
            icon="fa-solid fa-book"
          />
          <GridItem 
            title="30 Skrip Jawapan Maut"
            subtitle="Tiru je. Copy & paste jawapan yang HR nak dengar."
            icon="fa-solid fa-file-lines"
          />
          <GridItem 
            title="Checklist Anti-Gugup"
            subtitle="Hilangkan gemuruh dalam 5 minit sebelum masuk bilik."
            icon="fa-solid fa-clipboard-check"
          />
          <GridItem 
            title="Hacks Body Language"
            subtitle="Psikologi untuk nampak confident & dominan depan majikan."
            icon="fa-solid fa-user-tie"
          />
          <GridItem 
            title="7-Hari Crash Course"
            subtitle="Email series untuk prepare mentaliti juara."
            icon="fa-solid fa-envelope"
          />
          <GridItem 
            title="Realiti Malaysia"
            subtitle="Cara nego gaji style jalanan. Takde dalam buku teks."
            icon="fa-solid fa-star"
            isBonus={true}
          />
        </div>
      </div>
    </section>
  );
};