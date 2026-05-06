import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
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
    { name: t("BERANDA"), href: "#hero" },
    { name: t("PROFIL"), href: "#about" },
    { name: t("PRODUK RUMAH"), href: "/produk-rumah" },
    { name: t("PRODUK AUTO"), href: "/produk-auto" },
    { name: t("PET CARE"), href: "/pet-care" },
    { name: t("GALERI PRODUK"), href: "/galeri" },
    { name: t("GALERI PRODUKSI"), href: "/galeri-produksi" },
    { name: t("DISTRIBUTOR"), href: "/distributor" },
    { name: t("HARGA"), href: "/harga" },
    { name: t("OEM/MAKLON"), href: "/oem" },
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
          
          <button 
            onClick={() => setLanguage(lang => lang === "ID" ? "EN" : "ID")}
            className="flex items-center gap-1 xl:gap-1.5 ml-2 lg:ml-4 text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs font-bold tracking-wider text-white hover:text-yellow-500 transition-colors bg-white/5 hover:bg-white/10 px-2 lg:px-3 py-1.5 lg:py-2 rounded-full border border-white/10"
          >
            <Globe className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
            <span>{language}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle & Language */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={() => setLanguage(lang => lang === "ID" ? "EN" : "ID")}
            className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-white hover:text-yellow-500 transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-full border border-white/10"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language}</span>
          </button>
          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X strokeWidth={1.5} className="w-6 h-6" /> : <Menu strokeWidth={1.5} className="w-6 h-6" />}
          </button>
        </div>
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
