import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-600 py-12 px-4 text-center text-sm border-t border-gray-900">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="font-display tracking-widest text-gray-500 uppercase">
          Kit Pukau Majikan &copy; 2026
        </p>
        <p>
          Hak Cipta Terpelihara. Jangan curi content aku. <br/>
          Disclaimer: Result depends on your effort. No refund for laziness.
        </p>
      </div>
    </footer>
  );
};