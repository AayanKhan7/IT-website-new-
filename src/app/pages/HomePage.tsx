import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Code, Smartphone, Database, ShoppingCart, 
  TrendingUp, Layers, Palette, GitBranch, Factory, 
  Heart, GraduationCap, Building, ShoppingBag, 
  Plane, ChevronLeft, ChevronRight, Star, Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { InfoGrid } from '../components/InfoGrid';
import Hyperspeed from '../components/figma/Hyperspeed';

const heroHyperspeedOptions = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'LongRaceDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 5,
  lanesPerRoad: 2,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 50,
  lightPairsPerRoadWay: 70,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5] as [number, number],
  lightStickHeight: [1.3, 1.7] as [number, number],
  movingAwaySpeed: [60, 80] as [number, number],
  movingCloserSpeed: [-120, -160] as [number, number],
  carLightsLength: [20, 60] as [number, number],
  carLightsRadius: [0.05, 0.14] as [number, number],
  carWidthPercentage: [0.3, 0.5] as [number, number],
  carShiftX: [-0.2, 0.2] as [number, number],
  carFloorSeparation: [0.05, 1] as [number, number],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0x131318,
    brokenLines: 0x131318,
    leftCars: [0x60a5fa, 0x22d3ee, 0x38bdf8],
    rightCars: [0x93c5fd, 0x67e8f9, 0xbfdbfe],
    sticks: 0x7dd3fc
  }
};

export function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    { icon: <Code />, title: 'Web Designing', description: 'Creating stunning, responsive websites that captivate and convert visitors.' },
    { icon: <Smartphone />, title: 'Mobile Apps', description: 'Native and cross-platform applications delivering seamless user experiences.' },
    { icon: <Database />, title: 'CRM & ERP', description: 'Custom enterprise solutions to streamline operations and boost productivity.' },
    { icon: <ShoppingCart />, title: 'E-commerce', description: 'Powerful online stores with secure payment and inventory management.' },
    { icon: <TrendingUp />, title: 'Digital Marketing', description: 'Data-driven strategies to increase online presence and drive growth.' },
    { icon: <Layers />, title: 'Product Engineering', description: 'End-to-end development from concept to market-ready launch.' },
    { icon: <Palette />, title: 'UI/UX Design', description: 'User-centered designs combining aesthetics with intuitive flow.' },
    { icon: <GitBranch />, title: 'API Integration', description: 'Seamless connectivity between third-party services and custom APIs.' },
  ];

  const serviceAccents = [
    { label: 'Build', iconClass: 'text-cyan-700', chipClass: 'bg-cyan-50 text-cyan-800 border-cyan-200', lineClass: 'from-cyan-400/0 via-cyan-500/70 to-cyan-600' },
    { label: 'Scale', iconClass: 'text-emerald-700', chipClass: 'bg-emerald-50 text-emerald-800 border-emerald-200', lineClass: 'from-emerald-400/0 via-emerald-500/70 to-emerald-600' },
    { label: 'Operate', iconClass: 'text-indigo-700', chipClass: 'bg-indigo-50 text-indigo-800 border-indigo-200', lineClass: 'from-indigo-400/0 via-indigo-500/70 to-indigo-600' },
    { label: 'Commerce', iconClass: 'text-blue-700', chipClass: 'bg-blue-50 text-blue-800 border-blue-200', lineClass: 'from-blue-400/0 via-blue-500/70 to-blue-600' },
    { label: 'Growth', iconClass: 'text-orange-700', chipClass: 'bg-orange-50 text-orange-800 border-orange-200', lineClass: 'from-orange-400/0 via-orange-500/70 to-orange-600' },
    { label: 'Ship', iconClass: 'text-teal-700', chipClass: 'bg-teal-50 text-teal-800 border-teal-200', lineClass: 'from-teal-400/0 via-teal-500/70 to-teal-600' },
    { label: 'Design', iconClass: 'text-pink-700', chipClass: 'bg-pink-50 text-pink-800 border-pink-200', lineClass: 'from-pink-400/0 via-pink-500/70 to-pink-600' },
    { label: 'Connect', iconClass: 'text-violet-700', chipClass: 'bg-violet-50 text-violet-800 border-violet-200', lineClass: 'from-violet-400/0 via-violet-500/70 to-violet-600' },
  ];

  const industries = [
    { icon: <Factory />, name: 'Manufacturing' },
    { icon: <Heart />, name: 'Healthcare' },
    { icon: <GraduationCap />, name: 'Education' },
    { icon: <Building />, name: 'Real Estate' },
    { icon: <ShoppingBag />, name: 'Retail' },
    { icon: <Plane />, name: 'Travel' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechStart Inc.', content: 'Alpha Groups transformed our digital presence completely. Their expertise in technology is unmatched.', rating: 5 },
    { name: 'Michael Chen', role: 'Founder, E-Shop Global', content: 'The e-commerce platform they built increased our sales by 250% in 6 months. Exceptional work!', rating: 5 },
    { name: 'Emily Rodriguez', role: 'VP, MediCare Solutions', content: 'Their custom CRM solution streamlined our operations and saved us countless hours.', rating: 5 },
  ];

  const blogPosts = [
    { title: 'The Future of AI in 2026', excerpt: 'Emerging trends shaping how businesses adapt to the digital-first world.', category: 'Technology', date: 'Mar 10, 2026' },
    { title: 'AI & Business Operations', excerpt: 'How artificial intelligence is creating new opportunities for growth.', category: 'Innovation', date: 'Mar 08, 2026' },
    { title: 'Scalable SaaS Guide', excerpt: 'Principles for creating software products that grow with your business.', category: 'Development', date: 'Mar 05, 2026' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-sky-500/30">
      {/* Hero Section */}
      <section className="relative -mt-20 min-h-[92vh] md:min-h-screen flex items-center overflow-hidden bg-[#020617] text-white">
        <div className="absolute inset-0 z-0 opacity-90">
          <Hyperspeed effectOptions={heroHyperspeedOptions} />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#020617]/10 via-[#020617]/34 to-[#020617]/56"></div>
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.28),transparent_65%)]"></div>
        
        <div className="relative z-10 container mx-auto px-6 pt-28 md:pt-32 pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 border-sky-500/50 text-sky-400 bg-sky-500/10 backdrop-blur-sm">
              <Sparkles size={14} className="mr-2" /> The New Era of Automation
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-7 leading-[1.08] text-white [text-shadow:0_2px_28px_rgba(2,6,23,0.55)]">
              Transform Business <br /> <span className="text-sky-300">Through Intellect</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed [text-shadow:0_1px_12px_rgba(2,6,23,0.45)]">
              Scale your operations with bespoke AI agents and enterprise-grade automation tailored for the modern economy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button size="lg" className="h-14 px-10 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/20 transition-all">
                Get Started Free
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-10 rounded-full border border-slate-700 text-white hover:bg-white/5">
                Watch Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Grid Section */}
      <div className="relative z-10 mt-0">
        <InfoGrid />
      </div>

      {/* Services Grid */}
      <section className="relative py-32 overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)]">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-cyan-200/45 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end mb-16 md:mb-20">
            <div className="max-w-3xl">
              <h2 className="text-cyan-700 font-semibold tracking-[0.24em] uppercase text-xs sm:text-sm mb-5">What We Build</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
                Crafted Capabilities,
                <span className="block text-slate-600">Not Cookie-Cutter Services</span>
              </h3>
            </div>
            <p className="text-slate-600 text-lg max-w-md leading-relaxed lg:justify-self-end">
              Every offer is delivered as a measurable business outcome, not a generic package. Pick what moves your roadmap now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 xl:gap-7">
            {services.map((service, index) => {
              const accent = serviceAccents[index % serviceAccents.length];
              const isWideCard = index === 1 || index === 5;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className={`${isWideCard ? 'xl:col-span-6' : 'xl:col-span-3'}`}
                >
                  <article className="group relative h-full rounded-[2rem] border border-slate-200/80 bg-white/85 backdrop-blur-sm p-7 md:p-8 shadow-[0_10px_35px_-22px_rgba(15,23,42,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_-22px_rgba(3,105,161,0.42)]">
                    <div className="flex items-start justify-between gap-5 mb-8">
                      <div className={`w-14 h-14 rounded-2xl border border-black/5 bg-white flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105 ${accent.iconClass}`}>
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${accent.chipClass}`}>
                          {accent.label}
                        </span>
                        <p className="text-slate-300 font-black text-2xl mt-2">0{index + 1}</p>
                      </div>
                    </div>

                    <h4 className="text-2xl font-black text-slate-900 mb-3 leading-tight">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-[1.02rem] max-w-[42ch]">{service.description}</p>

                    <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Outcome-led Delivery</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <div className={`pointer-events-none absolute left-8 right-8 bottom-0 h-[3px] rounded-full bg-gradient-to-r opacity-80 ${accent.lineClass}`} />
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/5 blur-[120px] -z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Targeted Industry Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, i) => (
              <motion.div 
                key={ind.name}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-sky-500/50 transition-colors"
              >
                <div className="text-sky-400">{ind.icon}</div>
                <span className="font-medium text-sm tracking-wide">{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Gen Banner */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to evolve?</h2>
              <p className="text-xl text-sky-100/80 mb-10">Experience the future of business automation with a free 30-minute strategic audit.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-[#ffffff] text-sky-700 hover:bg-slate-100 h-14 px-8 rounded-full text-lg font-bold">Start Your Project</Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 rounded-full text-lg">Schedule a Call</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#ffffff]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-sky-500 mb-6">Social Proof</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-20">Voices of Success</h3>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto_1fr] items-center gap-12">
            <button onClick={() => setCurrentTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)} className="hidden md:flex w-16 h-16 rounded-full border border-slate-200 items-center justify-center hover:bg-slate-50 transition-all">
              <ChevronLeft size={24} />
            </button>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border border-slate-100"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed mb-10">"{testimonials[currentTestimonial].content}"</p>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sky-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={() => setCurrentTestimonial(p => (p + 1) % testimonials.length)} className="hidden md:flex w-16 h-16 rounded-full border border-slate-200 items-center justify-center hover:bg-slate-50 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Latest Insights</h2>
            <Link to="/blog" className="text-sky-600 font-bold flex items-center gap-2 group">
              View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.title} className="group bg-[#ffffff] rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-500">
                <div className="p-8">
                  <Badge className="bg-sky-50 text-sky-600 border-none mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">{post.category}</Badge>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-sky-600 transition-colors">{post.title}</h4>
                  <p className="text-slate-500 mb-8">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 text-sm font-medium text-slate-400">
                    <span>{post.date}</span>
                    <span className="text-sky-600 group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-slate-900 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-3">Let's Build Something Amazing</h3>
              <p className="text-slate-400 text-lg">The bridge between your idea and reality starts with a hello.</p>
            </div>
            <Button size="lg" className="h-16 px-12 rounded-full bg-sky-600 hover:bg-sky-500 shadow-2xl shadow-sky-500/20 text-lg">
              Get in Touch <ArrowRight className="ml-3" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}