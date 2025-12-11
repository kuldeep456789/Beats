import React from 'react';
import { SectionId } from '../types';
import { Music, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Music className="w-6 h-6" />,
    title: "Curated Sounds",
    description: "From underground DJ sets to indie band showcases, we bring the freshest sounds to unique venues."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community First",
    description: "We aren't just promoters. We are a collective building safe, inclusive spaces for youth expression."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Unforgettable Vibes",
    description: "Visual arts, interactive installations, and high energy. Every event is a masterpiece."
  }
];

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="backdrop-blur-sm bg-black/20 p-8 rounded-3xl border border-white/5">
            <h2 className="text-[#00ff88] font-bold tracking-wider uppercase mb-3 text-sm">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More Than Just A Party. <br /> We Are A Movement.
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Founded in 2024, UrbanBeat emerged from the desire to reclaim city spaces for creative youth.
              What started as a small warehouse gathering has exploded into the city's premier event collective.
              We believe in the power of music and art to unite diverse communities.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a1a2e]/80 backdrop-blur border border-white/10 flex items-center justify-center text-[#00d4ff] shadow-lg shadow-[#00d4ff]/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff88] to-[#ff0080] rounded-2xl opacity-20 blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://picsum.photos/400/500?random=2"
                alt="Event Vibes"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover transform translate-y-8 hover:scale-105 transition-transform duration-500 border border-white/5"
              />
              <img
                src="https://picsum.photos/400/500?random=3"
                alt="DJ Set"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500 border border-white/5"
              />
              <img
                src="https://picsum.photos/400/500?random=4"
                alt="Crowd"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500 border border-white/5"
              />
              <img
                src="https://picsum.photos/400/500?random=5"
                alt="Neon Lights"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover transform translate-y-8 hover:scale-105 transition-transform duration-500 border border-white/5"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;