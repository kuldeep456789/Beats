import React from 'react';
import { SectionId } from '../types';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id={SectionId.HERO}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=10"
          alt="Concert Crowd"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[#1a1a2e]/40 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Unleash the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff0080]">
            Rhythm of the City
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          UrbanBeat connects the next generation through immersive music, art, and culture experiences. Join the movement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`#${SectionId.EVENTS}`}
            className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] hover:from-[#00d4ff] hover:to-[#ff0080] text-[#0a0a0a] rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#00ff88]/20"
          >
            Explore Events <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={`#${SectionId.ABOUT}`}
            className="px-8 py-4 bg-white/5 hover:bg-[#ff0080]/10 text-white border border-white/20 hover:border-[#ff0080]/50 rounded-full font-bold text-lg transition-all backdrop-blur-md"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;