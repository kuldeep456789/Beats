import React, { useState } from 'react';
import { SectionId, EventItem } from '../types';
import { Calendar, MapPin } from 'lucide-react';

const initialEvents: EventItem[] = [
  {
    id: 1,
    title: "Neon Horizon Festival",
    date: "Aug 15 • 9:00 PM",
    location: "The Old Steel Mill",
    description: "An immersive audio-visual experience featuring top synth-wave artists and interactive light installations.",
    image: "https://picsum.photos/600/400?random=6",
    tags: ["Music", "Art", "Nightlife"]
  },
  {
    id: 2,
    title: "Rooftop Chill Sessions",
    date: "Aug 22 • 6:00 PM",
    location: "Skyline Lounge",
    description: "Lo-fi beats, craft mocktails, and the best sunset views in the city. A laid back evening for creatives.",
    image: "https://picsum.photos/600/400?random=7",
    tags: ["Chill", "Social", "Networking"]
  },
  {
    id: 3,
    title: "Urban Graffiti Workshop",
    date: "Sep 01 • 10:00 AM",
    location: "Sector 4 Skatepark",
    description: "Learn from local legends. Supplies provided. Express yourself on our legal walls.",
    image: "https://picsum.photos/600/400?random=8",
    tags: ["Workshop", "Art", "Daytime"]
  }
];

const Events: React.FC = () => {
  const [events] = useState<EventItem[]>(initialEvents);

  return (
    <section id={SectionId.EVENTS} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="backdrop-blur-sm bg-black/30 p-6 rounded-2xl border border-white/5 inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-slate-300 text-lg max-w-2xl">
              Don't miss out on what's happening. Tickets sell out fast.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group bg-[#1a1a2e]/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-[#00ff88]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00ff88]/10">

              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  {event.tags.map((tag, i) => (
                    <span key={tag} className={`text-xs font-bold px-2 py-1 backdrop-blur-sm text-[#0a0a0a] rounded ${i % 2 === 0 ? 'bg-[#00ff88]/90' : 'bg-[#ff0080]/90 text-white'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-[#00ff88] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {event.location}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {event.title}
                </h3>

                <p className="text-slate-400 mb-6 line-clamp-3">
                  {event.description}
                </p>

                <button className="w-full py-3 rounded-xl border border-white/10 text-white font-semibold hover:border-[#00ff88] hover:text-[#00ff88] hover:bg-[#00ff88]/5 transition-all">
                  Get Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;