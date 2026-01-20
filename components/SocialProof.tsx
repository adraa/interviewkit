import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; location: string }> = ({ quote, name, location }) => (
  <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative">
    <i className="fa-solid fa-quote-left text-4xl text-slate-700 absolute top-4 left-4"></i>
    <p className="text-lg text-gray-200 mb-6 relative z-10 font-medium italic">"{quote}"</p>
    <div className="flex items-center gap-4">
       <div className="w-10 h-10 bg-[#39FF14] rounded-full flex items-center justify-center text-black font-bold">
         {name.charAt(0)}
       </div>
       <div>
         <p className="font-bold text-white">{name}</p>
         <p className="text-xs text-gray-500 uppercase">{location}</p>
       </div>
    </div>
  </div>
);

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 px-4 md:px-8 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-white mb-12 uppercase tracking-wide">
          Apa Member Lain Cakap?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard 
            quote="Dulu 6 bulan menganggur. Lepas hafal skrip Bab 3, interview pertama terus dapat offer. Gaji RM2,800. Tq Boss!"
            name="Amir"
            location="Gombak"
          />
          <TestimonialCard 
            quote="English aku berterabur. Tapi guna teknik 'Keyword' dalam kit ni, HR ingat aku fluent. Magic beb."
            name="Sarah"
            location="JB"
          />
        </div>
      </div>
    </section>
  );
};