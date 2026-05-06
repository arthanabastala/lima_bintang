import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

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
    { name: "PRODUK RUMAH", href: "/produk-rumah" },
    { name: "PRODUK AUTO", href: "/produk-auto" },
    { name: "PET CARE", href: "/pet-care" },
    { name: "GALERI PRODUK", href: "/galeri" },
    { name: "GALERI PRODUKSI", href: "/galeri-produksi" },
    { name: "DISTRIBUTOR", href: "/distributor" },
    { name: "HARGA", href: "/harga" },
    { name: "OEM/MAKLON", href: "/oem" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-3 sm:py-4 shadow-md" : "bg-transparent py-4 sm:py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group shrink-0">
          <img 
            src="/logo.png" 
            alt="Lima Bintang Logo" 
            className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-end flex-wrap flex-1 gap-x-2 lg:gap-x-3 gap-y-2 md:ml-4">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={getHref(link.href)}
              className="text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs font-bold leading-tight tracking-[0.05em] text-center transition-colors text-slate-200 hover:text-yellow-500 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
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
            className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl shadow-xl py-6 flex flex-col px-6 md:hidden gap-4 border-t border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={getHref(link.href)}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold border-b border-white/10 pb-3 text-white hover:text-yellow-500"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
