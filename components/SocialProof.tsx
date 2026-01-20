import React from 'react';

const ProofCard: React.FC<{ image: string; caption: string }> = ({ image, caption }) => (
  <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
    <img src={image} alt="Bukti" className="w-full h-auto rounded mb-2 border border-gray-100" />
    <p className="text-xs font-bold text-center text-slate-800 bg-gray-50 p-2 rounded">
      {caption}
    </p>
  </div>
);

export const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-white px-5">
      <h2 className="text-2xl md:text-3xl font-black text-center text-slate-900 mb-8 uppercase leading-tight">
        Bukan Cakap Kosong. <br/><span className="bg-yellow-300 px-2">Tengok Bukti.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProofCard 
          image="https://placehold.co/400x300/e5e7eb/555?text=WhatsApp:+Offer+Letter+RM2,800"
          caption="Farid (UiTM): Dapat offer RM2,800 lepas guna skrip!"
        />
        <ProofCard 
          image="https://placehold.co/400x300/e5e7eb/555?text=Email:+Salary+Increase"
          caption="Sarah: Berjaya nego gaji naik RM500!"
        />
      </div>
    </section>
  );
};