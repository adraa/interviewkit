import React, { useState } from 'react';

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full text-left py-4 px-2 flex justify-between items-center font-bold text-slate-900 text-sm hover:bg-gray-50"
      >
        <span>{q}</span>
        <i className={`fa-solid fa-caret-down transition-transform ${open ? 'rotate-180' : ''}`}></i>
      </button>
      {open && <div className="p-4 bg-gray-50 text-sm text-gray-700 leading-relaxed border-t border-gray-100">{a}</div>}
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-10 px-5 bg-white">
      <h2 className="text-2xl font-black text-center text-slate-900 mb-8 uppercase">Soalan Lazim</h2>
      <div className="border-t border-gray-200">
        <FaqItem 
            q="English saya lemah, boleh guna ke?" 
            a="Boleh. Skrip ini direka supaya mudah dihafal. Anda tak perlu grammar power, cukup sekadar boleh sebut dengan yakin." 
        />
        <FaqItem 
            q="Sesuai untuk kerja Kerajaan?" 
            a="Fokus utama adalah sektor Swasta & MNC. Tapi teknik keyakinan diri boleh diguna pakai di mana-mana interview." 
        />
        <FaqItem 
            q="Macam mana nak dapatkan Kit ni?" 
            a="Klik butang merah 'Download Sekarang', buat bayaran via FPX/Online Banking. Link download akan dihantar ke email anda dalam 2 minit." 
        />
      </div>
    </section>
  );
};