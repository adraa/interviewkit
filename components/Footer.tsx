import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 py-12 px-5 text-center text-sm border-t border-gray-200">
      <div className="max-w-4xl mx-auto space-y-2">
        <p className="font-bold text-slate-900 uppercase tracking-widest">
          Hak Cipta Terpelihara © 2026 Kit Pukau Majikan.
        </p>
        <p className="text-xs">
          Penafian: Ini adalah produk pendidikan. Hasil bergantung pada usaha individu.
        </p>
      </div>
    </footer>
  );
};