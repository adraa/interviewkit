import React from 'react';

export const UrgencyBar: React.FC = () => {
  return (
    <section className="px-5 mb-10">
      <div className="bg-red-50 border-2 border-dashed border-red-300 rounded p-4 text-center">
        <p className="text-red-800 font-bold text-base md:text-lg uppercase">
          <i className="fa-solid fa-fire text-red-600 mr-2 animate-pulse"></i> 
          Harga Promosi Tamat Dalam: <br className="md:hidden" />
          <span className="font-black text-2xl md:text-xl ml-2 text-red-900">11 Jam 45 Minit</span>
        </p>
      </div>
    </section>
  );
};