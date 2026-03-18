import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Zap, Heart, ArrowUpRight } from 'lucide-react';
import { Badge } from '../components/ui/badge';

export function AboutPage() {
  const timeline = [
    { year: '2016', event: 'Genesis', description: 'Alpha Groups was founded in a small studio with a big mission: humanizing the digital experience.' },
    { year: '2018', event: 'Scale', description: 'Surpassed 100+ global partnerships, moving from a boutique agency to a strategic powerhouse.' },
    { year: '2020', event: 'Resilience', description: 'Pivot to fully distributed global operations, maintaining 99% client retention during market shifts.' },
    { year: '2023', event: 'Intelligence', description: 'Integrated proprietary AI frameworks into our core development lifecycle.' },
    { year: '2026', event: 'Next Horizon', description: 'Redefining the standard for AI-human collaborative workflows.' },
  ];

  const values = [
    { icon: <Zap strokeWidth={1.5} />, title: 'Innovation', description: 'We don’t follow trends; we build the frameworks that start them.' },
    { icon: <Heart strokeWidth={1.5} />, title: 'Deep Empathy', description: 'Technology is nothing without the human pulse behind the screen.' },
    { icon: <Award strokeWidth={1.5} />, title: 'Precision', description: 'Our "good enough" is the industry’s "exceptional."' },
    { icon: <Users strokeWidth={1.5} />, title: 'Radical Candor', description: 'Honest collaboration is the only way to build lasting products.' },
  ];

  return (
    <div className="bg-[#fafafa] text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      {/* Editorial Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="outline" className="mb-6 rounded-full border-slate-200 px-4 py-1 text-slate-500 font-medium">
                  The Alpha Story
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-8 sm:mb-10 italic">
                  Architects of the <br /> 
                  <span className="text-sky-600 not-italic">Digital Renaissance.</span>
                </h1>
              </motion.div>
            </div>
            <div className="lg:col-span-4">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed font-light"
              >
                Alpha Groups & Co. isn't just a consultancy. We are a collective of thinkers, builders, and dreamers dedicated to solving the complex problems of tomorrow.
              </motion.p>
            </div>
          </div>
        </div>
        
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-sky-50 to-transparent opacity-50" />
      </section>

      {/* Mission & Vision: Split Layout */}
      <section className="py-16 sm:py-20 md:py-24 border-y border-white/10 bg-[#0f1d38]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-px bg-[#1a2b4a] rounded-2xl overflow-hidden">
            <div className="bg-[#0b162c] p-6 sm:p-10 md:py-16 md:pr-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-2xl text-sky-400"><Target size={32} strokeWidth={1.5} /></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 italic text-white">The Mission</h2>
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                    To empower businesses worldwide with bespoke digital ecosystems. We bridge the gap between technical complexity and business intuition, turning "impossible" into "deployed."
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0b162c] p-6 sm:p-10 md:py-16 md:pl-12">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-2xl text-sky-400"><Eye size={32} strokeWidth={1.5} /></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 italic text-white">The Vision</h2>
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                    To be the silent engine behind the world's most innovative brands. We envision a future where technology is invisible, intuitive, and infinitely scalable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Timeline */}
      <section className="py-20 sm:py-24 md:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-14 sm:mb-24 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 italic">A Decade of Defiance.</h2>
            <p className="text-slate-400 text-lg">We’ve spent ten years breaking things and building them better.</p>
          </div>

          <div className="relative">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col md:flex-row gap-8 md:gap-24 py-12 border-t border-white/10 hover:bg-white/[0.02] transition-colors px-4"
              >
                <div className="text-4xl sm:text-5xl font-black text-white/10 group-hover:text-sky-500 transition-colors duration-500 md:w-32">
                  {item.year}
                </div>
                <div className="md:flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    {item.event} <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all text-sky-400" size={20} />
                  </h3>
                  <p className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values: Minimalist Typography Grid */}
      <section className="py-20 sm:py-24 md:py-32 bg-[#0b162c] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl font-bold lg:sticky lg:top-32 italic text-white">What <br />Drives Us.</h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-12 sm:gap-y-20">
              {values.map((value) => (
                <div key={value.title} className="group rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                  <div className="text-sky-400 mb-6 group-hover:scale-110 transition-transform origin-left duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-slate-100">{value.title}</h3>
                  <p className="text-slate-200 leading-relaxed border-l-2 border-slate-600 pl-6 group-hover:border-sky-400 transition-colors">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-20 sm:py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-[2rem] sm:rounded-[3rem] bg-sky-600 p-8 sm:p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 italic leading-tight">Driven by <br />Pure Expertise.</h2>
                <p className="text-base sm:text-xl text-sky-500/10 text-sky-100/80 font-light">
                  Our collective of developers, designers, and strategists don’t just work for us—they build for you.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <button className="bg-white text-sky-600 px-7 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-slate-100 transition-all flex items-center gap-3 group">
                  Meet the Team <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}