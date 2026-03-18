import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ShieldCheck, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

export function ContactPage() {
  const contactInfo = [
    { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, title: 'Email Us', content: 'info@alphagroups.com', subContent: '24/7 Support Response' },
    { icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, title: 'Call Us', content: '+1 (555) 123-4567', subContent: 'Mon-Fri, 9am - 6pm EST' },
    { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, title: 'Visit Us', content: 'Tech City HQ', subContent: '123 Business Avenue, TC' },
    { icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />, title: 'Live Chat', content: 'Available Now', subContent: 'Average wait: < 2 mins' },
  ];

  const offices = [
    { city: 'San Francisco', address: '123 Market St, Suite 500, CA', phone: '+1 (555) 123-4567' },
    { city: 'New York', address: '456 Fifth Ave, Floor 20, NY', phone: '+1 (555) 234-5678' },
    { city: 'London', address: '789 Oxford St, London, UK', phone: '+44 20 1234 5678' },
  ];

  const faqs = [
    { q: 'Typical project timeline?', a: 'Most transformations range from 2-6 months depending on technical complexity.' },
    { q: 'Ongoing support?', a: 'We provide 24/7 maintenance and iterative support packages for all enterprise clients.' },
    { q: 'Industry expertise?', a: 'Specializing in Healthcare, Fintech, Manufacturing, and scalable E-commerce.' },
    { q: 'Legacy integration?', a: 'We excel at modernizing legacy systems and bridging them with modern AI workflows.' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-sky-500/30 overflow-x-hidden">
      {/* Dynamic Hero - Responsive Padding */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020617] text-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,#1e5eff_0%,transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 md:mb-6 px-4 py-1 border-sky-500/30 text-sky-400 bg-sky-500/10 backdrop-blur-sm">
              Connect with Experts
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
              Let's Start a <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Strategic Partnership
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Ready to evolve your digital infrastructure? Reach out to our technical architects for a comprehensive project audit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid - Responsive Grid Columns */}
      <section className="relative z-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 -mt-2 sm:-mt-8 md:-mt-12">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-[#ffffff] border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl md:rounded-[2rem] hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-6 md:p-8 text-center min-h-[128px] sm:min-h-[150px] md:min-h-[170px] flex flex-col justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 md:mb-6">
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1 md:mb-2 text-base md:text-lg leading-tight">{info.title}</h3>
                    <p className="text-slate-700 font-medium mb-1 text-sm md:text-base break-words">{info.content}</p>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{info.subContent}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interaction Area - Responsive Layout Swap */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Form Column - Width Adjustments */}
            <motion.div 
              className="w-full lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#ffffff] p-6 sm:p-10 md:p-16 rounded-3xl md:rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 md:mb-8 tracking-tight italic">Initiate Project</h2>
                <form className="space-y-4 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-slate-500 ml-1">Full Name</label>
                      <Input placeholder="John Doe" className="h-12 md:h-14 rounded-xl md:rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-slate-500 ml-1">Work Email</label>
                      <Input type="email" placeholder="john@company.com" className="h-12 md:h-14 rounded-xl md:rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-500 ml-1">Subject</label>
                    <Input placeholder="Project Scope" className="h-12 md:h-14 rounded-xl md:rounded-2xl border-slate-100 bg-slate-50 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-500 ml-1">Message</label>
                    <Textarea placeholder="Describe your requirements..." className="min-h-[120px] md:min-h-[180px] rounded-xl md:rounded-[2rem] border-slate-100 bg-slate-50 focus:bg-white transition-all resize-none p-4 md:p-6" />
                  </div>
                  <Button className="w-full h-12 md:h-16 rounded-full bg-slate-900 hover:bg-sky-600 text-white font-bold text-sm md:text-lg shadow-xl transition-all">
                    Send Proposal Request <Send className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] md:text-sm">
                    <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                    <span>Secure SSL encrypted data transmission</span>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Context/Map Column - Stacked on Mobile */}
            <motion.div 
              className="w-full lg:col-span-5 space-y-6 md:space-y-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Responsive Height Map */}
              <div className="bg-slate-900 rounded-3xl md:rounded-[3rem] overflow-hidden relative group h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.4194,37.7749,12/800x600?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">Global HQ</h3>
                    <p className="text-sm md:text-base text-slate-400">Silicon Valley, CA</p>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-500 flex items-center justify-center shadow-lg shrink-0">
                    <Globe size={20} className="md:w-6 md:h-6" />
                  </div>
                </div>
              </div>

              {/* Hubs - Responsive Padding */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 px-2 flex items-center gap-3 italic">
                  Regional Hubs <div className="h-px flex-1 bg-slate-200" />
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-[#ffffff] border border-slate-100 hover:border-sky-200 transition-colors group">
                      <div className="flex justify-between items-center gap-4">
                        <div className="min-w-0">
                          <h4 className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors truncate">{office.city}</h4>
                          <p className="text-xs md:text-sm text-slate-500 mt-1 truncate">{office.address}</p>
                          <p className="text-xs md:text-sm font-medium text-slate-400 mt-1">{office.phone}</p>
                        </div>
                        <ArrowRight className="text-slate-200 group-hover:text-sky-500 shrink-0" size={18} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ - Mobile Optimized Grid */}
      <section className="py-16 md:py-32 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <Badge className="bg-sky-100 text-sky-600 border-none mb-4 uppercase tracking-widest text-[10px]">Support & FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 italic leading-tight">Common Knowledge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-[#ffffff] border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="flex gap-4 md:gap-6">
                  <span className="text-xl md:text-2xl font-black text-slate-100 group-hover:text-sky-100 transition-colors shrink-0">0{idx + 1}</span>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 md:mb-3">{faq.q}</h4>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}