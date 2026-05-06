import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-md border-t border-white/5 text-white py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
             <Link to="/" className="flex items-center mb-4 group">
              <img 
                src="/logo.webp" 
                alt="Lima Bintang Logo" 
                className="h-8 max-w-[200px] object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-400 text-sm max-w-sm">
              {t("Produsen produk household, otomotif, dan perawatan berkualitas premium untuk rumah tangga Indonesia.")}
            </p>
          </div>
          <div>
            <h5 className="font-bold text-[10px] tracking-widest uppercase mb-4 text-slate-500">{t("Company")}</h5>
            <ul className="space-y-2">
              <li><Link to="/#about" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">{t("Profil Perusahaan")}</Link></li>
              <li><Link to="/#services" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">{t("Mengapa Kami.")}</Link></li>
              <li><Link to="/#products" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">{t("Portofolio Produk")}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[10px] tracking-widest uppercase mb-4 text-slate-500">{t("Bantuan")}</h5>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">FAQ</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors font-medium">{t("Kontak")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} PT. Tutelage Sdn Bhd Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
