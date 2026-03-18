import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const useHeroStyle = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Industries', path: '/industries' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useHeroStyle
          ? 'bg-[#060d1c]/72 backdrop-blur-xl border-b border-white/10'
          : isScrolled
            ? 'bg-[#0b162c]/95 backdrop-blur-xl border-b border-[#5b76a8]/30 shadow-[0_8px_30px_rgba(2,8,20,0.5)]'
            : 'bg-[#0b162c]/88 backdrop-blur-xl border-b border-[#5b76a8]/30'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3">
            <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#2f5fb8] to-[#3d73cf] flex items-center justify-center ring-1 ring-white/20 transition-all duration-300 ${
              useHeroStyle ? 'shadow-[0_0_18px_rgba(73,106,164,0.28)]' : ''
            } group-hover:scale-[1.04] group-hover:shadow-[0_8px_24px_rgba(61,115,207,0.35)]`}>
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#7fb4ff] ring-2 ring-[#0b162c]"></span>
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="hidden min-[360px]:flex flex-col">
              <span className={`font-bold tracking-tight text-sm sm:text-base ${useHeroStyle ? 'text-white' : 'text-[#e8efff]'}`} style={{ fontFamily: 'Poppins' }}>
                Alpha Groups & Co.
              </span>
              <span className={`text-xs ${useHeroStyle ? 'text-white/70' : 'text-[#9ab0db]'}`}>From Ideas to Impact</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2 py-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  useHeroStyle
                    ? location.pathname === item.path
                      ? 'text-white bg-white/12 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                    : location.pathname === item.path
                      ? 'text-[#cfe4ff] bg-[#16305c] shadow-[inset_0_0_0_1px_rgba(127,180,255,0.35)]'
                      : 'text-[#d3e2ff] hover:text-[#dff0ff] hover:bg-[#112142]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className={`transition-all duration-300 ${
                useHeroStyle
                  ? 'rounded-full bg-transparent border border-white/50 text-white hover:bg-white hover:text-[#08152d]'
                  : 'rounded-full bg-gradient-to-r from-[#2f5fb8] to-[#3d73cf] px-6 text-white shadow-[0_10px_26px_rgba(61,115,207,0.28)] hover:brightness-105'
              }`}
            >
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl border transition-colors ${
              useHeroStyle
                ? 'text-white border-white/25 hover:bg-white/10'
                : 'text-[#d3e2ff] border-[#5b76a8]/35 hover:bg-[#112142]'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className={`lg:hidden mt-2 max-h-[75vh] overflow-y-auto py-3 rounded-2xl border ${useHeroStyle ? 'border-white/15 bg-[#050914]/95' : 'border-[#5b76a8]/30 bg-[#0a1630]'} shadow-[0_16px_36px_rgba(2,8,20,0.45)]`}>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mx-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    useHeroStyle
                      ? location.pathname === item.path
                        ? 'text-white bg-white/10'
                        : 'text-white/75 hover:text-white hover:bg-white/10'
                      : location.pathname === item.path
                        ? 'text-[#7db6ff] bg-[#112142]'
                        : 'text-[#d3e2ff] hover:text-[#7db6ff] hover:bg-[#112142]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className={`mt-3 mx-2 rounded-xl ${
                  useHeroStyle
                    ? 'bg-transparent border border-white/50 text-white hover:bg-white hover:text-[#08152d]'
                    : 'bg-gradient-to-r from-[#2f5fb8] to-[#3d73cf] text-white'
                }`}
              >
                Get Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
