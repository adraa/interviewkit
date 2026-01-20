import React from 'react';

const StackItem: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-3 bg-white p-3 border border-gray-200 rounded shadow-sm">
    <i className="fa-solid fa-circle-check text-green-500 text-xl flex-shrink-0"></i>
    <span className="font-bold text-slate-900 text-sm uppercase leading-tight">{title}</span>
  </div>
);

export const Solution: React.FC = () => {
  return (
    <section className="py-12 bg-slate-900 px-5 text-center">
      <h2 className="text-2xl md:text-3xl font-black text-white mb-8 uppercase">
        Ini Jalan Pintas Dia
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
        <StackItem title="Blueprint Pukau Interviewer" />
        <StackItem title="30 Skrip Jawapan Maut" />
        <StackItem title="Checklist Anti-Gugup" />
        <StackItem title="Hacks Body Language" />
        <StackItem title="7-Hari Crash Course (Email)" />
        <StackItem title="BONUS: Realiti Malaysia" />
      </div>
    </section>
  );
};