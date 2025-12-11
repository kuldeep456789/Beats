import React, { useState } from 'react';
import { NavItem, SectionId } from '../types';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'About', href: `#${SectionId.ABOUT}` },
  { label: 'Events', href: `#${SectionId.EVENTS}` },
  { label: 'Gallery', href: `#${SectionId.GALLERY}` },
  { label: 'Contact', href: `#${SectionId.CONTACT}` },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-full border border-white/10 hover:border-[#00ff88]/30 bg-[#1a1a2e]/80 backdrop-blur-md shadow-2xl shadow-[#00ff88]/10 transition-all duration-300">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - Icon removed as requested */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-white">
                Urban<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">Beat</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-300 hover:text-[#00ff88] hover:bg-white/5 px-4 py-2 rounded-full text-sm font-medium transition-all"
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href={`#${SectionId.CONTACT}`}
                  className="ml-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0a0a] px-5 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all transform hover:scale-105"
                >
                  Join Us
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-[#00ff88] hover:bg-white/10 focus:outline-none"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl z-40 md:hidden">
          <div className="bg-[#1a1a2e]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-[#00ff88] hover:bg-white/5 block px-4 py-3 rounded-xl text-base font-medium text-center transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={`#${SectionId.CONTACT}`}
                onClick={() => setIsOpen(false)}
                className="block w-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0a0a] px-4 py-3 rounded-xl font-bold text-center mt-4 shadow-lg"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;