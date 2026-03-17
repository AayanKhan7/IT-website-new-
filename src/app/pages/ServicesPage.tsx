import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Code, Smartphone, Database, ShoppingCart, 
  TrendingUp, Layers, Palette, GitBranch, 
  Check, ArrowRight, Sparkles 
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useRef } from 'react';

export function ServicesPage() {
  const containerRef = useRef(null);
  
  const services = [
    {
      icon: <Code />,
      title: 'Web Engineering',
      tagline: 'High-Performance Ecosystems',
      description: 'We don’t just build websites; we engineer digital storefronts that handle scale, speed, and complex user journeys without breaking a sweat.',
      features: ['Custom React/Next.js Architecture', 'Serverless Scaling', 'Performance Audits', 'SEO Semantic Structure'],
      color: 'from-sky-400 to-blue-600'
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Innovation',
      tagline: 'Native Feel, Global Reach',
      description: 'Crafting intuitive mobile experiences for iOS and Android that feel like a natural extension of the user’s hand.',
      features: ['Cross-Platform Mastery', 'Biometric Integration', 'Real-time Sync', 'Gestural UI Design'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: <Database />,
      title: 'Enterprise ERP/CRM',
      tagline: 'Intelligence at Scale',
      description: 'Centralize your business logic. We build custom internal tools that automate the mundane so your team can focus on the extraordinary.',
      features: ['Automated Workflows', 'Legacy Migration', 'Custom Dashboarding', 'Role-Based Security'],
      color: 'from-emerald-400 to-teal-600'
    },
    {
      icon: <Layers />,
      title: 'Product Engineering',
      tagline: 'Concept to Market',
      description: 'Taking your MVP from a napkin sketch to a production-ready product with agile precision and strategic oversight.',
      features: ['Rapid Prototyping', 'CI/CD Pipelines', 'QA Automation', 'Market-Fit Analysis'],
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: <Palette />,
      title: 'UX/UI Strategy',
      tagline: 'Human-Centered Logic',
      description: 'Design is not just how it looks, but how it works. We map out psychological triggers and frictionless flows.',
      features: ['Behavioral Mapping', 'Interactive Prototypes', 'Design Systems', 'A/B Test Design'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: <TrendingUp />,
      title: 'Growth Marketing',
      tagline: 'Data-Driven Visibility',
      description: 'Strategic placement and content funnels designed to capture attention and convert it into long-term loyalty.',
      features: ['Search Dominance', 'Content Authority', 'Conversion Funnels', 'Growth Hacking'],
      color: 'from-cyan-400 to-sky-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-sky-500/30" ref={containerRef}>
      {/* Dynamic Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/10 blur-[120px] rounded-full" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 border-sky-500/30 text-sky-400 bg-sky-500/5 px-4 py-1">
              <Sparkles size={14} className="mr-2" /> Our Capabilities
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
              Solutions Built For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                The Next Decade.
              </span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
              We eliminate the friction between your business goals and technological reality through high-fidelity engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Services Bento-Style / Stacked List */}
      <section className="py-24 px-6">
        <div className="container mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>
                <div className="space-y-2">
                  <span className="text-sky-500 font-mono tracking-widest text-sm uppercase">{service.tagline}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{service.title}</h2>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  {service.description}
                </p>
                <div className="pt-4">
                  <Button variant="ghost" className="group text-sky-400 hover:text-sky-300 p-0 font-bold text-lg">
                    View Case Studies <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                  </Button>
                </div>
              </div>

              {/* Feature Box Side */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000`} />
                  <Card className="relative bg-slate-900/50 border-slate-800 backdrop-blur-xl rounded-[2rem] overflow-hidden">
                    <CardContent className="p-10">
                      <h3 className="text-white text-xl font-bold mb-8 flex items-center">
                        Technical Scope <div className="ml-4 h-px flex-1 bg-slate-800" />
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-4 group/item">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} p-[1px]`}>
                              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                                <Check size={16} className="text-sky-400" />
                              </div>
                            </div>
                            <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Decorative Tech Grid background */}
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                         <Code size={120} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ultra-Modern CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="relative rounded-[4rem] bg-gradient-to-br from-slate-900 to-black border border-slate-800 p-12 md:p-24 overflow-hidden text-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                Ready to initiate <br /> 
                <span className="italic text-slate-500">the next phase?</span>
              </h2>
              <p className="text-slate-400 text-xl max-w-xl mx-auto">
                Consult with our engineering leads to map out your digital roadmap for 2026.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <Button size="lg" className="h-16 px-10 rounded-full bg-sky-600 hover:bg-sky-500 text-lg font-bold shadow-xl shadow-sky-600/20">
                  Contact Us Today
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 rounded-full border-slate-700 text-white hover:bg-white/5 text-lg">
                  Explore Tech Stack
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}