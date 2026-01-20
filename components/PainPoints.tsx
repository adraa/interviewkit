import React from 'react';

const ProblemCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="bg-white p-5 shadow border-l-4 border-red-600 mb-4 rounded-r flex flex-col justify-center">
    <h3 className="font-black text-slate-900 uppercase text-lg mb-1">{title}</h3>
    <p className="text-gray-700 text-sm font-medium leading-relaxed">
      {text}
    </p>
  </div>
);

export const PainPoints: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 px-5 border-y border-gray-200">
      <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
          Rasa <span className="text-red-600 underline decoration-4 decoration-red-300">Terhimpit</span> Macam Ni?
          </h2>
      </div>
      
      <div className="flex flex-col">
        <ProblemCard 
          title="DUIT MAKIN HABIS"
          text="Dah 6 bulan grad, tapi masih minta duit belanja kat mak ayah. Rasa malu setiap kali minta topup. Member lain dah belanja family makan."
        />
        <ProblemCard 
          title="INTERVIEW ASYIK GAGAL"
          text="Bila HR tanya dalam English, terus gagap. Otak blank. Balik rumah rasa nak nangis sebab lepaskan peluang depan mata."
        />
        <ProblemCard 
          title="MEMBER DAH KAYA"
          text="Kawan satu batch dah post gambar kereta baru & holiday. Kau? Masih scroll JobStreet cari kerja kosong pukul 2 pagi."
        />
      </div>
    </section>
  );
};