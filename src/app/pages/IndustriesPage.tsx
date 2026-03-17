import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Factory, Heart, GraduationCap, Building, ShoppingBag, Plane, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function IndustriesPage() {
  const industries = [
    {
      id: 'manufacturing',
      icon: <Factory strokeWidth={1.5} />,
      name: 'Manufacturing',
      description: 'Streamlining production processes and supply chain management with smart digital solutions.',
      solutions: ['Production Management Systems', 'Supply Chain Optimization', 'Quality Control Automation', 'Inventory Tracking', 'Predictive Maintenance', 'Real-time Analytics'],
      benefits: ['Reduced operational costs by 30%', 'Improved production efficiency', 'Better inventory management', 'Enhanced quality control'],
    },
    {
      id: 'healthcare',
      icon: <Heart strokeWidth={1.5} />,
      name: 'Healthcare',
      description: 'Transforming patient care and healthcare operations with secure, HIPAA-compliant solutions.',
      solutions: ['Electronic Health Records (EHR)', 'Patient Portal Development', 'Telemedicine Platforms', 'Appointment Scheduling', 'Medical Billing Systems', 'Health Data Analytics'],
      benefits: ['Improved patient outcomes', 'Streamlined operations', 'Enhanced data security', 'Better care coordination'],
    },
    {
      id: 'education',
      icon: <GraduationCap strokeWidth={1.5} />,
      name: 'Education',
      description: 'Empowering educational institutions with modern learning management and administration tools.',
      solutions: ['Learning Management Systems', 'Student Information Systems', 'Virtual Classroom Platforms', 'Course Management Tools', 'Assessment & Grading Systems', 'Parent-Teacher Portals'],
      benefits: ['Enhanced learning experience', 'Improved student engagement', 'Efficient administration', 'Better parent communication'],
    },
    {
      id: 'realestate',
      icon: <Building strokeWidth={1.5} />,
      name: 'Real Estate',
      description: 'Revolutionizing property management and real estate transactions with digital platforms.',
      solutions: ['Property Listing Platforms', 'CRM for Real Estate', 'Virtual Tours & 3D Visualization', 'Lease Management Systems', 'Tenant Portals', 'Market Analytics'],
      benefits: ['Faster property transactions', 'Better client management', 'Increased visibility', 'Streamlined operations'],
    },
    {
      id: 'retail',
      icon: <ShoppingBag strokeWidth={1.5} />,
      name: 'Retail & E-commerce',
      description: 'Driving retail success with omnichannel e-commerce and customer engagement solutions.',
      solutions: ['E-commerce Platforms', 'Point of Sale Systems', 'Inventory Management', 'Customer Loyalty Programs', 'Omnichannel Integration', 'Sales Analytics'],
      benefits: ['Increased online sales', 'Better inventory control', 'Enhanced customer experience', 'Data-driven decisions'],
    },
    {
      id: 'travel',
      icon: <Plane strokeWidth={1.5} />,
      name: 'Travel & Hospitality',
      description: 'Enhancing guest experiences and operational efficiency in the travel and hospitality sector.',
      solutions: ['Booking & Reservation Systems', 'Property Management Software', 'Customer Relationship Management', 'Mobile Check-in Solutions', 'Revenue Management', 'Guest Experience Platforms'],
      benefits: ['Improved booking rates', 'Enhanced guest satisfaction', 'Operational efficiency', 'Better revenue management'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-sky-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#020617] text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(30,94,255,0.15),transparent_75%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 border-sky-500/30 text-sky-400 bg-sky-500/10 backdrop-blur-sm">
              <Sparkles size={14} className="mr-2" /> Vertical Expertise
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Expertise Across <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Global Industries
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              We engineer bespoke digital ecosystems designed to solve the specific friction points of your vertical.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Tabs Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="manufacturing" className="w-full">
            <div className="sticky top-24 z-30 mb-16 pb-4 rounded-2xl border border-[#4d638d]/35 bg-[#0d172d]/85 p-2 backdrop-blur-md">
              <TabsList className="h-auto w-full flex-nowrap gap-2 overflow-x-auto bg-transparent p-0 shadow-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {industries.map((industry) => (
                  <TabsTrigger
                    key={industry.id}
                    value={industry.id}
                    className="group min-w-max flex items-center gap-3 px-5 py-3 rounded-xl border border-transparent text-[#dbe7ff] transition-all hover:bg-white/10 hover:text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md data-[state=active]:ring-1 data-[state=active]:ring-slate-200"
                  >
                    <div className="rounded-lg bg-[#1b263d] p-2 text-[#9db1d8] transition-colors group-data-[state=active]:bg-blue-50 group-data-[state=active]:text-blue-600">
                      {industry.icon}
                    </div>
                    <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{industry.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              {industries.map((industry) => (
                <TabsContent key={industry.id} value={industry.id} className="mt-0 focus-visible:outline-none">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="grid lg:grid-cols-12 gap-12"
                  >
                    {/* Industry Intel */}
                    <div className="lg:col-span-5 space-y-10">
                      <div>
                        <div className="w-20 h-20 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/20">
                          {industry.icon}
                        </div>
                        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight italic">
                          {industry.name}
                        </h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed mb-10">
                          {industry.description}
                        </p>
                      </div>

                      <Card className="bg-white border-none shadow-2xl shadow-slate-200/60 rounded-[2.5rem] overflow-hidden">
                        <CardContent className="p-8">
                          <h3 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6 flex items-center gap-2">
                             Quantifiable Benefits
                          </h3>
                          <ul className="space-y-5">
                            {industry.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-4 group">
                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                  <Check size={14} />
                                </div>
                                <span className="text-slate-700 font-medium">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Solutions Grid */}
                    <div className="lg:col-span-7">
                      <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] -z-0" />
                        <h3 className="text-3xl font-bold mb-10 relative z-10 tracking-tight">
                          Tailored Solutions
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                          {industry.solutions.map((solution, index) => (
                            <motion.div
                              key={solution}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-default"
                            >
                              <div className="flex items-center gap-4">
                                <span className="text-xs font-mono text-blue-400/60 group-hover:text-blue-400">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-slate-200 font-medium leading-tight group-hover:text-white transition-colors">
                                  {solution}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <button className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors group">
                                View Case Studies <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Industrial Grade CTA */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter italic">
                Ready to evolve?
              </h2>
              <p className="text-xl text-blue-100 max-w-xl mx-auto mb-10 font-light">
                Consult with our vertical leads to define the roadmap for your industry's digital transformation.
              </p>
              <button className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:-translate-y-1">
                Schedule Strategy Session
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}