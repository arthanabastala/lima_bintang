import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function GaleriProduksiPage() {
  const { t } = useLanguage();
  const images = [
    { src: "/galeri4.webp", title: t("Proses Produksi") },
    { src: "/galeri5.webp", title: t("Mesin Kemasan") },
    // { src: "/galeri6.webp", title: t("Fasilitas Pabrik") },
    { src: "/galeri7.webp", title: t("Quality Control") },
    { src: "/galeri8.webp", title: t("Sistem Otomasi") },
    { src: "/galeri6.webp", title: t("Gudang Penyimpanan") },
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

      {/* Section 2: Video */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 flex items-center justify-center p-4"
        >
          {/* Placeholder for embedded video */}
          <div className="text-center">
            <p className="text-slate-400 mb-2">{t("[Area untuk Video / Embed URL]")}</p>
            <p className="text-slate-500 text-sm italic">{t("Silakan unggah atau embed video produksi pouch di sini")}</p>
          </div>
        </motion.div>
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
