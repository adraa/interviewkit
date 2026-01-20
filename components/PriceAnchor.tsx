import React from 'react';
import { Button } from './Button';

export const PriceAnchor: React.FC = () => {
  return (
    <section id="pricing" className="py-12 bg-white px-5">
      <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
          Pilih Pakej Anda
          </h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
          
          {/* DECOY */}
          <div className="flex-1 bg-white border-2 border-gray-200 p-6 rounded flex flex-col justify-between order-2 md:order-1 opacity-75 grayscale hover:grayscale-0 transition-all">
              <div>
                  <h3 className="text-lg font-bold text-gray-500 uppercase mb-2 text-center">Ebook Sahaja</h3>
                  <div className="text-center mb-4">
                      <span className="text-3xl font-black text-gray-800">RM39</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                      <li className="flex gap-2"><i className="fa-solid fa-check"></i> Ebook Utama</li>
                      <li className="flex gap-2 text-gray-400 line-through"><i className="fa-solid fa-xmark"></i> 30 Skrip Jawapan</li>
                      <li className="flex gap-2 text-gray-400 line-through"><i className="fa-solid fa-xmark"></i> Bonus Tambahan</li>
                  </ul>
              </div>
              <Button 
                  text="Beli Basic (Rugi)" 
                  variant="secondary"
                  href="https://toyyibpay.com/kit-pukau-basic"
                  fullWidth={true}
                  className="text-sm py-3 bg-gray-200 text-gray-600"
              />
          </div>

          {/* HERO */}
          <div className="flex-1 bg-red-50 border-4 border-red-600 p-6 rounded flex flex-col justify-between relative shadow-2xl order-1 md:order-2 transform scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-red-600 text-white font-black px-4 py-1 rounded shadow text-sm uppercase">
                      Paling Berbaloi
                  </span>
              </div>

              <div>
                  <h3 className="text-xl font-black text-red-600 uppercase mb-1 text-center mt-4">Full Kit Bundle</h3>
                  <div className="text-center mb-6">
                      <span className="text-5xl font-black text-slate-900">RM49</span>
                      <span className="block text-gray-400 line-through font-bold text-lg">Asal: RM299</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm font-bold text-slate-800">
                      <li className="flex gap-2"><i className="fa-solid fa-check text-green-600"></i> Blueprint Interview <span className="text-gray-500 text-xs">(Bernilai RM99)</span></li>
                      <li className="flex gap-2"><i className="fa-solid fa-check text-green-600"></i> 30 Skrip Jawapan <span className="text-gray-500 text-xs">(Bernilai RM59)</span></li>
                      <li className="flex gap-2"><i className="fa-solid fa-check text-green-600"></i> Body Language <span className="text-gray-500 text-xs">(Bernilai RM49)</span></li>
                      <li className="flex gap-2"><i className="fa-solid fa-check text-green-600"></i> Email Course <span className="text-gray-500 text-xs">(Bernilai RM39)</span></li>
                      <li className="flex gap-2"><i className="fa-solid fa-check text-green-600"></i> Bonus Realiti <span className="text-gray-500 text-xs">(Priceless)</span></li>
                  </ul>
              </div>
              
              <Button 
                  text="DOWNLOAD SEKARANG" 
                  variant="primary"
                  href="https://toyyibpay.com/kit-pukau-majikan"
                  fullWidth={true}
                  className="py-4 text-xl shadow-red-400 animate-wiggle"
              />
          </div>
      </div>
    </section>
  );
};