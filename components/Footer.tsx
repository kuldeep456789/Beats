import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a]/80 backdrop-blur-xl py-12 border-t border-white/5 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="font-bold text-xl tracking-tight text-white">
          Urban<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">Beat</span>
        </span>
      </div>
      
      <div className="flex justify-center space-x-6 mb-8 text-slate-400">
        <a href="#" className="hover:text-[#00ff88] transition-colors"><Instagram className="w-6 h-6"/></a>
        <a href="#" className="hover:text-[#00ff88] transition-colors"><Twitter className="w-6 h-6"/></a>
        <a href="#" className="hover:text-[#00ff88] transition-colors"><Facebook className="w-6 h-6"/></a>
        <a href="#" className="hover:text-[#00ff88] transition-colors"><Youtube className="w-6 h-6"/></a>
      </div>
      
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} UrbanBeat Collective. All rights reserved. <br/>
        <span className="text-xs opacity-50">Built with React + Tailwind + Gemini AI.</span>
      </p>
    </footer>
  );
};

export default Footer;