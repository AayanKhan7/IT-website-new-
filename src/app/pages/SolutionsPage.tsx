import { motion } from 'motion/react';
import { Briefcase, Rocket, Building2, Users, Check, ArrowRight, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export function SolutionsPage() {
  const solutions = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Startup Launchpad',
      tagline: 'Scale from Zero to One',
      description: 'A high-velocity package designed to get your MVP to market with enterprise-grade stability.',
      features: ['MVP Engineering', 'Brand Identity', 'Cloud Infrastructure', 'Growth Analytics'],
      price: '$15,000',
      duration: '12 Weeks',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Enterprise Core',
      tagline: 'Digital-First Transformation',
      description: 'Modernizing the legacy backbone of established businesses through automation and AI.',
      features: ['ERP/CRM Modernization', 'Legacy Migration', 'Process Automation', 'Compliance Suite'],
      price: 'Custom',
      duration: '6-12 Months',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Talent Network',
      tagline: 'On-Demand Intelligence',
      description: 'Embed senior-level engineering talent directly into your existing development workflows.',
      features: ['Dedicated Engineers', 'Agile Integration', 'QA Automation', 'Tech Leadership'],
      price: '$5,000/mo',
      duration: 'Flexible',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Strategic Advisory',
      tagline: 'Technology Roadmap',
      description: 'C-level technical guidance to help you navigate architecture and vendor selection.',
      features: ['Tech Assessment', 'System Architecture', 'Vendor Audit', 'Cost Optimization'],
      price: '$200/hr',
      duration: 'Retainer',
      gradient: 'from-slate-700 to-slate-900'
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Deep dive into your technical debt and business goals.', icon: <Zap size={20}/> },
    { step: '02', title: 'Blueprint', desc: 'Architecting the solution before writing a single line of code.', icon: <Shield size={20}/> },
    { step: '03', title: 'Sprints', desc: 'Rapid, agile development with bi-weekly deployments.', icon: <Rocket size={20}/> },
    { step: '04', title: 'Evolution', desc: 'Continuous scaling and post-launch optimization.', icon: <Users size={20}/> },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-cyan-100">
      {/* Dynamic Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#020617] text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/5">
              Strategic Ecosystems
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Business Outcomes.
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light">
              Beyond simple services. We build the operational frameworks that power modern market leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Interactive Grid */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group relative overflow-hidden h-full bg-white border-slate-200 hover:border-cyan-500/50 transition-all duration-500 rounded-[2.5rem] shadow-sm hover:shadow-2xl">
                  <CardContent className="p-6 sm:p-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-xl flex-shrink-0 group-hover:rotate-6 transition-transform`}>
                        {item.icon}
                      </div>
                      <div className="space-y-4">
                        <span className="text-cyan-600 font-mono text-xs uppercase tracking-widest font-bold">
                          {item.tagline}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#e8efff] leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-10">
                      {item.features.map((f) => (
                        <div key={f} className="flex items-center gap-3 text-slate-600">
                          <div className="h-5 w-5 rounded-full bg-cyan-50 flex items-center justify-center">
                            <Check size={12} className="text-cyan-600" />
                          </div>
                          <span className="text-sm font-medium">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-6 items-center justify-between">
                      <div className="flex gap-8">
                        <div>
                          <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold mb-1">Pricing</p>
                          <p className="text-xl font-bold text-slate-900">{item.price}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold mb-1">Duration</p>
                          <p className="text-xl font-bold text-slate-900">{item.duration}</p>
                        </div>
                      </div>
                      <Button className="rounded-full bg-slate-900 hover:bg-cyan-600 h-12 sm:h-14 px-6 sm:px-8 group transition-all">
                        Select Solution <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Connected Process */}
      <section className="py-20 sm:py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Execution DNA</h2>
            <p className="text-slate-400 max-w-xl mx-auto">A standardized delivery pipeline ensuring zero deviation from your vision.</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 relative z-10">
              {processSteps.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-950/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm group hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl font-black text-slate-800 group-hover:text-cyan-500/20 transition-colors">{item.step}</span>
                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact CTA */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[2rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-24 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Ready to initiate?</h2>
              <p className="text-base sm:text-xl text-cyan-100 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                Connect with our technical architects to define the perfect package for your specific project scale.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-cyan-700 hover:bg-slate-100 h-12 sm:h-16 px-7 sm:px-10 rounded-full text-base sm:text-lg font-bold">
                  Book Strategy Session
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 sm:h-16 px-7 sm:px-10 rounded-full text-base sm:text-lg">
                  Explore Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}