import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function GaleriPage() {
  const { t } = useLanguage();
  const images = [
    { src: "/cucipiring.webp", title: t("Produk Rumah Tangga") },
    { src: "/cleanwashliquid.webp", title: t("Deterjen Cair") },
    { src: "/autoshineshampoo.webp", title: t("Shampoo Auto") },
    { src: "/smoothcare.webp", title: t("Pelicin Serbaguna") },
    { src: "/petcareshampoo.webp", title: t("Pet Care") },
    { src: "/glassclearpro.webp", title: t("Pembersih Kaca") },
  ];

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen text-white">
      <section className="relative py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t("Galeri")}</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              {t("Koleksi foto produk, fasilitas produksi, dan aktivitas operasional LIMA BINTANG Home Care.")}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10 bg-slate-900"
            >
              {/* Cinematic Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={img.src} 
                  className="w-full h-full object-cover blur-2xl scale-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                  alt="" 
                  aria-hidden="true" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-yellow-500/10 mix-blend-overlay transition-opacity duration-700 pointer-events-none"></div>
              </div>
              
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-contain p-6 relative z-10 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-6 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <h3 className="text-lg font-bold text-white">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
