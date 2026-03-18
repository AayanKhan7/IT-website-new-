import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, Sparkles, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  const projects = [
    { id: 1, title: 'TechStart SaaS Platform', category: 'web', tags: ['React', 'Node.js', 'AWS'], description: 'A comprehensive project management SaaS platform serving 10,000+ users.', impact: '250% increase in user productivity' },
    { id: 2, title: 'MediCare Mobile App', category: 'mobile', tags: ['React Native', 'Healthcare', 'HIPAA'], description: 'HIPAA-compliant telemedicine app connecting patients with healthcare providers.', impact: '50,000+ consultations completed' },
    { id: 3, title: 'E-Shop Global Marketplace', category: 'ecommerce', tags: ['Shopify', 'Payment Gateway', 'Analytics'], description: 'Multi-vendor e-commerce platform with advanced inventory management.', impact: '$5M+ in annual revenue' },
    { id: 4, title: 'AutoFlow ERP System', category: 'enterprise', tags: ['Custom ERP', 'Integration', 'Automation'], description: 'Enterprise resource planning system for manufacturing operations.', impact: '40% reduction in operational costs' },
    { id: 5, title: 'EduLearn Platform', category: 'web', tags: ['LMS', 'Video Streaming', 'Gamification'], description: 'Learning management system with interactive course delivery.', impact: '100,000+ active learners' },
    { id: 6, title: 'RetailPro POS', category: 'mobile', tags: ['iPad App', 'Offline Mode', 'Inventory'], description: 'Modern point-of-sale system for retail stores.', impact: 'Deployed in 200+ locations' },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-sky-500/30">
      {/* Dynamic Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden text-white border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,#1e5eff_0%,transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 border-sky-500/30 text-sky-400 bg-sky-500/10 backdrop-blur-sm">
              <Sparkles size={14} className="mr-2" /> 2026 Case Studies
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Portfolio of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Success Stories.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              From disruptive startups to global enterprises, we engineer high-fidelity digital solutions that move the needle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Filter Bar */}
      <section className="sticky top-0 z-50 py-4 sm:py-6 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedFilter === category.id
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20 scale-105'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Grid */}
      <section className="py-16 sm:py-24 bg-[#020617]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="group h-full bg-slate-900/40 border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-slate-900/60 transition-all duration-500 hover:border-sky-500/30 shadow-xl">
                    <CardContent className="p-6 sm:p-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-8">
                        <div className="p-3 rounded-2xl bg-white/5 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-inner">
                          <ExternalLink size={24} strokeWidth={1.5} />
                        </div>
                        <Badge className="bg-sky-500/10 text-sky-400 border-none font-bold uppercase tracking-widest text-[10px]">
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      
                      {/* FIXED: Increased text contrast for readability */}
                      <p className="text-slate-200 leading-relaxed mb-8 font-light flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-bold text-white bg-white/10 px-3 py-1 rounded-md uppercase tracking-wider group-hover:bg-white/20 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-white/10">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 shadow-sm">
                            <Target size={22} />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-black text-sky-400/80 tracking-widest mb-0.5">Project Impact</p>
                            {/* FIXED: Increased text contrast for result metrics */}
                            <p className="text-sm font-bold text-white leading-none tracking-wide">
                              {project.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#020617]">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-slate-900 border border-white/5 rounded-[2rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter italic">
                Be our next <br /> <span className="text-sky-400 not-italic">Success Story.</span>
              </h2>
              <p className="text-base sm:text-xl text-slate-300 mb-10 font-light max-w-xl mx-auto">
                Ready to transform your business requirements into a high-performance digital reality?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 sm:h-16 px-7 sm:px-10 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-base sm:text-lg shadow-xl shadow-sky-500/20 transition-all hover:scale-105">
                  Discuss Your Project
                </Button>
                <Button size="lg" variant="ghost" className="h-12 sm:h-16 px-7 sm:px-10 rounded-full border border-white/10 text-white hover:bg-white/5 text-base sm:text-lg transition-all">
                  View Our Process <ArrowRight className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}