import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function GaleriPage() {
  const { t } = useLanguage();
  const images = [
    { src: "/sabuncucipiring.webp", title: t("Produk Rumah Tangga") },
    { src: "/Cleanwash_Liquid.webp", title: t("Deterjen Cair") },
    { src: "/AutoShine_Shampoo.webp", title: t("Shampoo Auto") },
    { src: "/sampocare.webp", title: t("Pelicin Serbaguna") },
    { src: "/PetCare_Shampoo.webp", title: t("Pet Care") },
    { src: "/GlassClearPro.png", title: t("Pembersih Kaca") },
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
              className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-bold text-white">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
