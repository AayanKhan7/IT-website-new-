import { Link } from 'react-router';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function Footer() {
  const services = [
    'Web Designing',
    'Mobile App Development',
    'CRM & ERP Development',
    'E-commerce Development',
    'Digital Marketing',
    'Product Engineering',
  ];

  const products = [
    'Enterprise Solutions',
    'Custom Software',
    'SaaS Products',
    'Mobile Applications',
  ];

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#020a18] px-4 pb-4 pt-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#2f405f] bg-[#061225]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(61,115,207,0.18),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(61,115,207,0.14),transparent_45%)]"></div>
        <div className="absolute inset-0 opacity-35 bg-[repeating-radial-gradient(circle_at_0%_100%,rgba(154,183,236,0.2)_0px,rgba(154,183,236,0.2)_1px,transparent_1px,transparent_12px)]"></div>

        <div className="relative px-6 pb-6 pt-10 sm:px-10 sm:pt-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_0.85fr_0.85fr_1.15fr]">
            <div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#5e7db1]/40 bg-[#1f2a42] text-[#8ab7ff]">
                <Sparkles size={21} />
              </div>
              <h3 className="max-w-xs text-3xl font-semibold leading-tight text-white" style={{ fontFamily: 'Poppins' }}>
                Join the next-generation digital growth platform
              </h3>
              <Button className="mt-6 rounded-full border border-[#6e89b7] bg-transparent px-6 text-white hover:bg-[#142643]">
                Connect With Us
              </Button>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wide text-white/90" style={{ fontFamily: 'Poppins' }}>
                Explore
              </h4>
              <ul className="space-y-2.5">
                {services.slice(0, 4).map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-sm text-[#b9cae8] transition-colors hover:text-white">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wide text-white/90" style={{ fontFamily: 'Poppins' }}>
                About
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-[#b9cae8] transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
                {products.slice(0, 1).map((product) => (
                  <li key={product}>
                    <Link to="/products" className="text-sm text-[#b9cae8] transition-colors hover:text-white">
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wide text-white/90" style={{ fontFamily: 'Poppins' }}>
                Subscribe
              </h4>
              <p className="mb-4 text-sm text-[#9db2d8]">
                Drop your email below and get the latest updates delivered monthly.
              </p>
              <div className="flex items-center gap-2 rounded-full border border-[#50668f] bg-[#1e2d46] p-1.5">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-9 border-0 bg-transparent text-white placeholder:text-[#88a2cd] focus-visible:ring-0"
                />
                <Button className="h-8 w-8 rounded-full bg-gradient-to-r from-[#4d7fd8] to-[#3d73cf] p-0 text-white hover:brightness-110">
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-[#93a9d3] sm:flex-row">
            <p>© 2026 Alpha Groups & Co. Pvt. Ltd.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-white">Privacy</a>
              <span>/</span>
              <a href="#" className="transition-colors hover:text-white">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
