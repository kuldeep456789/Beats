import React from 'react';
import { SectionId } from '../types';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id={SectionId.GALLERY} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 backdrop-blur-sm bg-black/20 py-8 rounded-3xl border border-white/5">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Captured Moments</h2>
          <p className="text-slate-300">Follow us on Instagram <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff] font-bold">@UrbanBeat</span></p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl border border-white/10">
            <img src="https://picsum.photos/800/800?random=11" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>

          <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl border border-white/10">
            <img src="https://picsum.photos/400/400?random=12" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white w-6 h-6" />
            </div>
          </div>

          <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl border border-white/10">
            <img src="https://picsum.photos/400/800?random=13" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white w-6 h-6" />
            </div>
          </div>

          <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl border border-white/10">
            <img src="https://picsum.photos/400/400?random=14" alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white w-6 h-6" />
            </div>
          </div>

          <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-2xl border border-white/10">
            <img src="https://picsum.photos/800/400?random=15" alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;