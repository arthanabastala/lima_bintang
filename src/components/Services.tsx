import { motion } from "motion/react";
import { Factory, Award, RefreshCcw, Package, Handshake, Tags } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Factory strokeWidth={1.5} className="w-8 h-8" />,
      title: t("Diproduksi Sendiri"),
      desc: t("Semua produk LIMA BINTANG diproduksi langsung di pabrik kami di Bogor, Jawa Barat. Kualitas terkontrol dari bahan baku hingga kemasan akhir.")
    },
    {
      icon: <Award strokeWidth={1.5} className="w-8 h-8" />,
      title: t("Kualitas Premium"),
      desc: t("Formula terstandarisasi menggunakan bahan berkualitas tinggi, menghasilkan produk yang efektif, aman, dan beraroma segar tahan lama.")
    },
    {
      icon: <RefreshCcw strokeWidth={1.5} className="w-8 h-8" />,
      title: t("Repeat Order Tinggi"),
      desc: t("Produk kebutuhan sehari-hari dengan perputaran cepat — ideal sebagai bisnis distribusi dengan cashflow yang stabil dan konsisten.")
    },
    {
      icon: <Package strokeWidth={1.5} className="w-8 h-8" />,
      title: t("Lini Produk Lengkap"),
      desc: t("Dari sabun cuci piring, deterjen, pembersih lantai, hingga shampoo mobil dan perawatan hewan — satu brand, solusi lengkap.")
    },
    {
      icon: <Handshake strokeWidth={1.5} className="w-8 h-8" />,
      title: t("Kerjasama Eksklusif"),
      desc: t("Sistem 1 Distributor Utama per wilayah memberikan keunggulan kompetitif nyata bagi mitra kami. Wilayah Anda, peluang Anda.")
    },
    {
      icon: <Tags strokeWidth={1.5} className="w-8 h-8" />,
      title: t("OEM / Private Label"),
      desc: t("Tersedia layanan maklon dan private label. Jadikan produk kami sebagai brand Anda sendiri dengan formula yang telah terbukti.")
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-3">
              {t("Mengapa Kami.")}
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("Pilihan Cerdas untuk Bisnis & Rumah Tangga Anda")}
            </h2>
            <p className="text-slate-400 text-lg">
              {t("Produsen produk kebersihan dan perawatan yang berkomitmen menghadirkan kualitas bintang lima untuk setiap rumah tangga Indonesia.")}
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card group p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50"
            >
              <div className="w-16 h-16 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
