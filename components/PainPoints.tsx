import React from 'react';

const ProblemCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 relative hover:-translate-y-1 transition-transform duration-300">
    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 absolute -top-6 left-1/2 -translate-x-1/2 border-4 border-white shadow-sm">
       <i className="fa-solid fa-xmark text-2xl text-red-600"></i>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 text-center mt-2">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed text-sm">
      {text}
    </p>
  </div>
);

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-[#FEF2F2] px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Adakah Anda Sedang Rasa <span className="text-red-600 bg-yellow-200 px-2 rotate-2 inline-block shadow-sm transform border border-yellow-300">TERHIMPIT</span> Macam Ni?
            </h2>
            <p className="text-gray-600">Jangan tipu diri sendiri. Situasi ni memang sakit.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          <ProblemCard 
            title="Duit Habis"
            text="Dah 6 bulan grad, tapi masih minta duit belanja kat mak ayah. Rasa bersalah setiap kali minta topup. Malu weh."
          />
          <ProblemCard 
            title="Interview Gagal"
            text="Bila HR tanya dalam English, terus gagap. Otak blank. Balik rumah rasa nak nangis sebab lepaskan peluang."
          />
          <ProblemCard 
            title="Member Dah Kaya"
            text="Kawan satu batch dah post gambar kereta baru & holiday. Kau? Masih scroll JobStreet cari kerja kosong."
          />
        </div>
      </div>
    </section>
  );
};