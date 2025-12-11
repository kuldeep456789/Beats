import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormState('success');
      e.currentTarget.reset();
      setTimeout(() => setFormState('idle'), 3000);
    } catch (error) {
      setFormState('error');
      setErrorMessage('Failed to send message. Please try again.');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-[#1a1a2e]/60 backdrop-blur-md border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Want to collaborate? Host an event? Or just say hi?
              Fill out the form or drop us a direct line.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-[#0a0a0a]/50 flex items-center justify-center text-[#00ff88] border border-white/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email us</p>
                  <p className="font-semibold hover:text-[#00ff88] transition-colors">kuldeeppraj2002@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-[#0a0a0a]/50 flex items-center justify-center text-[#00ff88] border border-white/5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call us</p>
                  <p className="font-semibold hover:text-[#00ff88] transition-colors">+91 8235494985</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#0a0a0a]/40 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input required type="text" id="name" name="name" className="w-full bg-[#1a1a2e]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input required type="email" id="email" name="email" className="w-full bg-[#1a1a2e]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors" placeholder="jane@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <select id="subject" name="subject" className="w-full bg-[#1a1a2e]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Event Booking</option>
                  <option>Press</option>
                  <option>Join the Team</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea required id="message" name="message" rows={4} className="w-full bg-[#1a1a2e]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] transition-colors" placeholder="Tell us what's on your mind..."></textarea>
              </div>

              <button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${formState === 'success'
                  ? 'bg-[#00ff88] text-[#0a0a0a]'
                  : 'bg-white text-[#0a0a0a] hover:bg-gradient-to-r hover:from-[#00ff88] hover:to-[#00d4ff]'
                  }`}
              >
                {formState === 'idle' && <>Send Message <Send className="w-5 h-5" /></>}
                {formState === 'submitting' && 'Sending...'}
                {formState === 'success' && 'Message Sent!'}
                {formState === 'error' && 'Failed to Send'}
              </button>
              {errorMessage && (
                <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;