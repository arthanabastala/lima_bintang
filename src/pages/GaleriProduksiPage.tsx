import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GaleriProduksiPage() {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const images = [
    { src: "/galeri4.webp", title: t("Proses Produksi") },
    { src: "/galeri5.webp", title: t("Mesin Kemasan") },
    { src: "/galeri6.webp", title: t("Fasilitas Pabrik") },
    { src: "/galeri7.webp", title: t("Quality Control") },
    { src: "/galeri8.webp", title: t("Sistem Otomasi") },
    { src: "/galeri9.png", title: t("Gudang Penyimpanan") },
  ];

  const videos = [
    { src: "", title: t("Video Proses Produksi 1"), desc: t("/1.mp4") },
    { src: "", title: t("Video Proses Produksi 2"), desc: t("/2.mp4") },
    { src: "", title: t("Video Proses Produksi 3"), desc: t("/3.mp4") },
    { src: "", title: t("Video Proses Produksi 4"), desc: t("/4.mp4") },
  ];

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen text-white">
      {/* Section 1: Header */}
      <section className="relative py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t("Pembuatan Standing Pouch")}</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              {t("Proses produksi kemasan berkualitas di pabrik kami")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Video Slider (Portrait) */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
           <h2 className="text-3xl font-bold text-white mb-4">{t("Video Produksi (Pouch)")}</h2>
           <p className="text-slate-400">{t("Geser untuk melihat video proses selanjutnya")}</p>
        </motion.div>
        
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-12 h-12 bg-white/10 hover:bg-yellow-500 hover:text-slate-900 border border-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 lg:opacity-100 shadow-xl"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-12 h-12 bg-white/10 hover:bg-yellow-500 hover:text-slate-900 border border-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 lg:opacity-100 shadow-xl"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
          >
            {videos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative w-[80vw] sm:w-[320px] shrink-0 aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 flex flex-col items-center justify-center snap-center group"
            >
              {vid.src ? (
                <video 
                  src={vid.src} 
                  controls 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  {/* This is a placeholder for actual portrait video / iframe */}
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-yellow-500 border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{vid.title}</h3>
                  <p className="text-xs text-slate-400">{vid.desc}</p>
                  <p className="absolute bottom-6 text-[10px] uppercase tracking-widest text-slate-500">{t("Format Portrait 9:16")}</p>
                </div>
              )}
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Section 3: Photo Gallery */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">{t("Galeri Foto Pabrik")}</h2>
          <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group border border-white/10 shadow-lg"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-bold text-white shadow-sm">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Article Content */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 lg:p-12 shadow-xl prose prose-invert prose-slate max-w-none"
        >
          <h2 className="text-3xl font-bold text-white mb-6">{t("Artikel Produksi Pouch")}</h2>
          <div className="text-slate-300 leading-relaxed space-y-6">
            <p>
              {t("Proses pembuatan standing pouch di LIMA BINTANG Home Care dilakukan dengan presisi dan standar kualitas tinggi. Kami menggunakan sistem otomatisasi untuk memastikan keamanan produk dan higienitas kemasan. Standar kontrol kualitas (Quality Control) kami dirancang untuk mencegah kebocoran, memastikan segel kuat, dan kualitas cetakan kemasan yang konsisten.")}
            </p>
            <p>
              {t("Keunggulan fasilitas pabrik kami memberikan fleksibilitas bagi para pelaku industri dan maklon untuk memproduksi produk kebersihan dan perawatan rumah dengan brand mereka sendiri.")}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
