import React from 'react';
import { Button } from './Button';

export const PriceAnchor: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 px-5 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 uppercase">
            Pilih Pakej Anda
            </h2>
            <p className="text-gray-600 mt-2 text-lg">Dapatkan akses segera harini.</p>
        </div>
        
        {/* Layout: Stack Mobile, Side-by-Side Desktop */}
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            
            {/* CARD 1: THE DECOY (Minimalist) */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl flex flex-col justify-between h-auto md:h-[480px] shadow-sm hover:shadow-md transition-shadow">
                <div>
                    <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-4 text-center">Ebook Sahaja</h3>
                    <div className="text-center mb-6">
                        <span className="text-4xl font-extrabold text-slate-800">RM39</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-gray-600 text-sm">
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-green-500"></i> Blueprint Ebook Utama
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 line-through">
                            <i className="fa-solid fa-xmark"></i> 30 Skrip Jawapan
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 line-through">
                            <i className="fa-solid fa-xmark"></i> Semua Bonus Tambahan
                        </li>
                    </ul>
                </div>
                <Button 
                    text="Beli Ebook Saja" 
                    variant="secondary"
                    href="https://toyyibpay.com/kit-pukau-basic"
                    fullWidth={true}
                    className="text-sm"
                />
            </div>

            {/* CARD 2: THE WINNER (Red Border & Ribbon) */}
            <div className="bg-white border-4 border-red-600 p-8 rounded-xl flex flex-col justify-between h-auto md:h-[540px] shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                
                {/* Ribbon */}
                <div className="absolute top-0 right-0">
                    <div className="bg-yellow-400 text-red-900 text-xs font-bold px-10 py-1 transform rotate-45 translate-x-8 translate-y-4 shadow-sm border border-yellow-500 uppercase tracking-wider">
                        Paling Laris
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-black text-red-600 uppercase tracking-widest mb-4 text-center mt-4">Full Kit Bundle + Bonus</h3>
                    <div className="text-center mb-2">
                        <span className="text-gray-400 line-through text-lg font-semibold mr-2">RM299</span>
                        <span className="text-5xl font-extrabold text-red-600">RM49</span>
                    </div>
                    
                    {/* Urgency Graphic Placeholder */}
                    <div className="text-center mb-6">
                        <div className="inline-block bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-100 animate-pulse">
                            <i className="fa-regular fa-clock mr-1"></i> Harga Naik Esok!
                        </div>
                    </div>

                    <ul className="space-y-3 mb-8 text-slate-800 font-medium">
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-circle-check text-green-500 text-lg"></i> Interview Success Blueprint
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-circle-check text-green-500 text-lg"></i> 30 Skrip Jawapan Maut
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-circle-check text-green-500 text-lg"></i> Checklist & Body Language
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-circle-check text-green-500 text-lg"></i> BONUS: Email Course
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-circle-check text-green-500 text-lg"></i> BONUS: Nota Realiti
                        </li>
                    </ul>
                </div>
                
                <div>
                    <Button 
                        text="DOWNLOAD SEKARANG (RM49)" 
                        variant="primary"
                        href="https://toyyibpay.com/kit-pukau-majikan"
                        fullWidth={true}
                        className="animate-pulse shadow-red-300 w-full"
                    />
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                        <i className="fa-solid fa-lock"></i> Secure Payment via ToyyibPay
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};