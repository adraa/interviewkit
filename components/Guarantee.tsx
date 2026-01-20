import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="px-5 mb-12">
      <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 bg-gray-50 flex flex-col md:flex-row items-center gap-4">
        <div className="text-4xl text-slate-700">
             <i className="fa-solid fa-shield-halved"></i>
        </div>
        <div className="text-center md:text-left">
            <h3 className="font-black text-slate-900 uppercase text-lg mb-2">Jaminan Pulangan Wang 30 Hari</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                Kalau anda rasa kit ini tak membantu langsung, email je saya. Saya refund 100% duit anda. Risiko atas saya, bukan awak.
            </p>
        </div>
      </div>
    </section>
  );
};