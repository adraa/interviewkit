import React from 'react';
import { Button } from './Button';

export const PriceAnchor: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-wider">
            Pilih Senjata Kau
            </h2>
            <p className="text-gray-400 mt-4">Jangan salah pilih. Masa depan kau bergantung kat sini.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            
            {/* The Decoy - Basic */}
            <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl p-8 flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
                <div>
                    <h3 className="text-xl font-bold text-gray-400 uppercase mb-2">Basic Package</h3>
                    <div className="text-4xl font-display font-bold text-white mb-6">RM39</div>
                    <p className="text-sm text-gray-500 mb-6 border-b border-slate-800 pb-6">
                        Untuk yang nak baca teori je. Taknak skrip, taknak strategi.
                    </p>
                    <ul className="space-y-4 mb-8 text-gray-400">
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-white"></i> Interview Blueprint Ebook
                        </li>
                        <li className="flex items-center gap-3 opacity-50">
                            <i className="fa-solid fa-xmark text-red-500"></i> No Skrip Jawapan Maut
                        </li>
                        <li className="flex items-center gap-3 opacity-50">
                            <i className="fa-solid fa-xmark text-red-500"></i> No Checklist Anti-Gugup
                        </li>
                        <li className="flex items-center gap-3 opacity-50">
                            <i className="fa-solid fa-xmark text-red-500"></i> No Bonus Content
                        </li>
                    </ul>
                </div>
                <div>
                    <Button 
                        text="Nak Ebook Je (RM39)" 
                        variant="muted"
                        href="https://toyyibpay.com/kit-pukau-basic"
                        fullWidth={true}
                    />
                </div>
            </div>

            {/* The Hero - Bundle */}
            <div className="bg-slate-800 border-2 border-[#39FF14] rounded-2xl p-8 flex flex-col justify-between relative shadow-[0_0_40px_rgba(57,255,20,0.15)] transform md:-translate-y-4">
                {/* Recommended Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#39FF14] text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Recommended
                </div>

                <div>
                    <h3 className="text-xl font-bold text-[#39FF14] uppercase mb-2">Full Kit Bundle</h3>
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-red-500 line-through text-lg font-bold">RM299</span>
                        <span className="text-5xl font-display font-black text-white">RM49</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-6 border-b border-gray-700 pb-6">
                        Pakej lengkap untuk <span className="text-[#39FF14]">pukau majikan</span>. Semua tool, skrip & bonus included.
                    </p>
                    <ul className="space-y-4 mb-8 text-white">
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-[#39FF14]"></i> Interview Blueprint Ebook
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-[#39FF14]"></i> 30 Skrip Jawapan Maut
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-[#39FF14]"></i> Checklist Anti-Gugup
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-[#39FF14]"></i> Body Language Hacks
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-star text-yellow-400"></i> BONUS: 7-Day Email Course
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-star text-yellow-400"></i> BONUS: Nota Realiti Malaysia
                        </li>
                    </ul>
                </div>
                <div>
                    <Button 
                        text="SAMBAR SEMUA + BONUS (RM49)" 
                        subtext="Jimat RM250 Harini Sahaja"
                        variant="neon"
                        href="https://toyyibpay.com/kit-pukau-majikan"
                        fullWidth={true}
                    />
                    <div className="mt-4 text-center text-xs text-gray-500">
                        <i className="fa-solid fa-lock mr-1"></i> Secure Payment via ToyyibPay
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};