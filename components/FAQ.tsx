import React, { useState } from 'react';
import { FaqItem } from '../types';

const FaqAccordion: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded mb-4 bg-slate-800 hover:border-gray-500 transition-colors">
      <button 
        className="w-full py-5 px-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-white">{item.question}</span>
        <i className={`fa-solid fa-chevron-down text-[#39FF14] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <p className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-slate-700 mt-2">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Kalau tak menjadi macam mana?",
      answer: "Kalau kau baca tapi tak amal, memang tak jadi. Ini bukan ubat kurus, ini ilmu. Kau buat, kau dapat. Kalau kau malas, jangan beli."
    },
    {
      question: "English saya memang level budak tadika. Boleh ke?",
      answer: "Sebab tu kami bagi skrip. Kau tak payah create ayat sendiri. Hafal je skrip tu macam kau hafal lirik lagu. HR takkan tahu rahsia kau."
    },
    {
      question: "Mahal la RM49 ni...",
      answer: "Kalau RM49 untuk masa depan kau pun kau berkira, patutlah kau menganggur. Stay broke. Orang lain dah invest untuk ubah nasib."
    },
    {
      question: "Sesuai untuk kerja kerajaan?",
      answer: "Kit ni design untuk swasta & MNC yang aggressive. Tapi teknik confident tu universal, boleh pakai kat mana-mana."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-12">
          SOALAN YANG SELALU ORANG TANYA
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <FaqAccordion key={index} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};