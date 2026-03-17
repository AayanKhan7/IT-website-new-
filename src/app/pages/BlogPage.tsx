import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function BlogPage() {
  const featuredPost = {
    title: 'The Future of Digital Transformation in 2026',
    excerpt: 'Explore how emerging technologies like AI, blockchain, and quantum computing are reshaping the digital landscape and what it means for businesses worldwide.',
    category: 'Technology',
    date: 'March 10, 2026',
    readTime: '8 min read',
    author: 'Sarah Johnson',
  };

  const posts = [
    {
      title: '10 Ways AI is Revolutionizing Business Operations',
      excerpt: 'Discover how artificial intelligence is creating new opportunities for efficiency, innovation, and growth across industries.',
      category: 'AI & Innovation',
      date: 'March 8, 2026',
      readTime: '6 min read',
      author: 'Michael Chen',
    },
    {
      title: 'Building Scalable SaaS Products: A Complete Guide',
      excerpt: 'Learn the essential principles, best practices, and technologies for creating software products that grow with your business.',
      category: 'Development',
      date: 'March 5, 2026',
      readTime: '10 min read',
      author: 'Emily Rodriguez',
    },
    {
      title: 'The Rise of No-Code Platforms in Enterprise',
      excerpt: 'How no-code and low-code platforms are democratizing software development and accelerating digital transformation.',
      category: 'Technology',
      date: 'March 3, 2026',
      readTime: '7 min read',
      author: 'David Kumar',
    },
    {
      title: 'Cybersecurity Best Practices for 2026',
      excerpt: 'Essential security measures every business should implement to protect against evolving cyber threats.',
      category: 'Security',
      date: 'February 28, 2026',
      readTime: '9 min read',
      author: 'Lisa Thompson',
    },
    {
      title: 'User Experience Design Trends You Need to Know',
      excerpt: 'Stay ahead of the curve with these emerging UX design trends that are shaping digital experiences.',
      category: 'Design',
      date: 'February 25, 2026',
      readTime: '5 min read',
      author: 'Alex Martinez',
    },
    {
      title: 'Cloud Migration: A Strategic Approach',
      excerpt: 'A comprehensive guide to planning and executing a successful cloud migration strategy for your enterprise.',
      category: 'Cloud Computing',
      date: 'February 22, 2026',
      readTime: '12 min read',
      author: 'James Wilson',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#08152d] to-[#1a3557] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Blog & Insights</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins' }}>
              Latest{' '}
              <span className="bg-gradient-to-r from-[#00E0FF] to-[#2E6BFF] bg-clip-text text-transparent">
                Insights & Trends
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay informed with expert perspectives on technology, innovation, and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-[#00E0FF]/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-gradient-to-r from-[#1E5EFF] to-[#2E6BFF] text-white">
                      Featured Article
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#08152d] mb-4 group-hover:text-[#1E5EFF] transition-colors" style={{ fontFamily: 'Poppins' }}>
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 bg-gradient-to-br from-[#1E5EFF]/10 to-[#2E6BFF]/10 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold bg-gradient-to-r from-[#1E5EFF] to-[#2E6BFF] bg-clip-text text-transparent mb-2">
                          2026
                        </div>
                        <div className="text-gray-600 font-semibold">Digital Future</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-[#0d1a33]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#08152d] mb-4" style={{ fontFamily: 'Poppins' }}>
              Recent Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest thoughts on technology and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00E0FF]/20 group cursor-pointer">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-gradient-to-r from-[#1E5EFF] to-[#2E6BFF] text-white">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-[#08152d] mb-3 group-hover:text-[#1E5EFF] transition-colors" style={{ fontFamily: 'Poppins' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-[#1E5EFF] font-semibold group-hover:gap-3 transition-all">
                      Read More 
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-[#1E5EFF] to-[#2E6BFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins' }}>
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights, trends, and updates delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#1E5EFF] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
