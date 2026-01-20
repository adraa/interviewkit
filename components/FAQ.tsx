import React, { useState } from 'react';
import { FaqItem } from '../types';

const FaqAccordion: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white mb-4 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <button 
        className="w-full py-4 px-6 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-900 text-sm md:text-base">{item.question}</span>
        <i className={`fa-solid fa-chevron-down text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <p className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Kalau saya tak pandai English langsung, boleh guna?",
      answer: "Boleh sangat. Sebab tu kami sediakan skrip. Anda cuma perlu hafal dan latih sebut. Tak perlu pening nak susun ayat grammar sendiri."
    },
    {
      question: "Ada jaminan dapat kerja ke?",
      answer: "Rezeki di tangan Tuhan. Tapi dengan ilmu ni, anda takkan masuk bilik interview dengan 'kosong'. Anda akan lebih confident dan peluang lulus jauh lebih tinggi."
    },
    {
      question: "Format apa kit ni?",
      answer: "Semua dalam bentuk PDF Digital. Lepas bayar, terus boleh download masuk phone atau laptop. Tak perlu tunggu posmen."
    },
    {
      question: "Sesuai untuk fresh grad?",
      answer: "Memang direka khas untuk fresh grad dan mereka yang dah lama menganggur. Kami ajar dari A sampai Z."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-5 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-slate-900 mb-10 uppercase">
          Soalan Lazim (FAQ)
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