import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update hash when navigating to same page hash
  const getHref = (href: string) => {
    if (href.startsWith('#')) {
      return location.pathname === '/' ? href : `/${href}`;
    }
    return href;
  };

  const navLinks = [
    { name: "BERANDA", href: "#hero" },
    { name: "PROFIL", href: "#about" },
    { 
      name: "PRODUK", 
      dropdown: [
        { name: "PRODUK RUMAH", href: "/produk-rumah" },
        { name: "PRODUK AUTO", href: "/produk-auto" },
        { name: "PET CARE", href: "/pet-care" },
      ]
    },
    { 
      name: "GALERI", 
      dropdown: [
        { name: "GALERI PRODUK", href: "/galeri" },
        { name: "GALERI PRODUKSI", href: "/galeri-produksi" },
      ]
    },
    { name: "DISTRIBUTOR", href: "/distributor" },
    { name: "HARGA", href: "/harga" },
    { name: "OEM/MAKLON", href: "/oem" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-4 shadow-md" : "bg-transparent py-4 sm:py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12 xl:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group shrink-0 lg:mr-8 xl:mr-16">
          <img 
            src="logo.png" 
            alt="Lima Bintang Logo" 
            className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-end xl:justify-center flex-1 gap-x-5 gap-y-2 lg:gap-x-7 xl:gap-x-10">
          {navLinks.map((link, idx) => (
            link.dropdown ? (
              <div key={idx} className="relative group">
                <button className="flex items-center gap-1 text-[11px] xl:text-xs font-bold leading-tight tracking-[0.1em] text-center transition-colors text-white group-hover:text-yellow-500 whitespace-nowrap py-4 -my-4">
                  {link.name}
                  <ChevronDown strokeWidth={1.5} className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex flex-col py-2">
                    {link.dropdown.map((sublink, subIdx) => (
                      <a 
                        key={subIdx} 
                        href={getHref(sublink.href)} 
                        className="px-4 py-2.5 text-xs font-bold tracking-wider text-slate-300 hover:text-yellow-500 hover:bg-white/5 transition-colors text-left"
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a 
                key={idx} 
                href={getHref(link.href)}
                className="text-[11px] xl:text-xs font-bold leading-tight tracking-[0.1em] text-center transition-colors text-white hover:text-yellow-500 whitespace-nowrap"
              >
                {Array.isArray(link.name) ? (
                  <>
                    {link.name[0]}<br />{link.name[1]}
                  </>
                ) : (
                  link.name
                )}
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X strokeWidth={1.5} className="w-6 h-6" /> : <Menu strokeWidth={1.5} className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl shadow-xl py-6 flex flex-col px-6 lg:hidden gap-4 border-t border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            {navLinks.map((link, idx) => (
              link.dropdown ? (
                <div key={idx} className="flex flex-col gap-3 border-b border-white/10 pb-3">
                  <div className="text-sm font-bold text-white uppercase">
                    {Array.isArray(link.name) ? `${link.name[0]} ${link.name[1]}` : link.name}
                  </div>
                  <div className="flex flex-col pl-4 gap-3">
                    {link.dropdown.map((sublink, subIdx) => (
                      <a 
                        key={subIdx}
                        href={getHref(sublink.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-bold text-slate-300 hover:text-yellow-500"
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  key={idx} 
                  href={getHref(link.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold border-b border-white/10 pb-3 text-white hover:text-yellow-500"
                >
                  {Array.isArray(link.name) ? `${link.name[0]} ${link.name[1]}` : link.name}
                </a>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
