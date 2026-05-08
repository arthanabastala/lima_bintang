import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShoppingCart, Leaf, Sparkles, Droplets, Briefcase, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function PetCare() {
  const { t } = useLanguage();
  const product = {
    name: "LIMA BINTANG PetCare Shampoo",
    description: t("Shampoo hewan peliharaan dengan formula lembut khusus untuk kucing, anjing, dan hewan lainnya. Membersihkan kotoran dan bau, serta merawat bulu agar lembut dan berkilau."),
    price: "Rp 20.000 – 35.000",
    size: "1000ML",
    image: "/petcareshampoo.webp",
    label: t("Baru")
  };

  const benefits = [
    {
      icon: <Leaf className="w-6 h-6 text-green-400" />,
      title: t("Formula Lembut"),
      desc: t("Tidak mengandung bahan keras yang dapat mengiritasi kulit sensitif hewan peliharaan.")
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      title: t("Bulu Berkilau"),
      desc: t("Membuat bulu lebih lembut, berkilau, dan mudah diatur.")
    },
    {
      icon: <Droplets className="w-6 h-6 text-pink-400" />,
      title: t("Wangi Tahan Lama"),
      desc: t("Aroma segar yang tahan lama untuk hewan kesayangan.")
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      title: t("Tersedia untuk Distributor"),
      desc: t("Pasar perawatan hewan memiliki pertumbuhan tinggi dan peluang distribusi luas.")
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl -z-10 bg-gradient-to-br from-yellow-500/10 to-transparent"></div>
        <div className="text-center max-w-3xl mx-auto p-12 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t("Pet Care Series")}
            </h1>
            <p className="text-xl text-yellow-500 font-medium mb-6 tracking-wide flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" /> {t("Produk Perawatan Hewan Peliharaan")}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t("Formulasi lembut dan aman khusus untuk hewan kesayangan Anda. Bersih, wangi, dan bebas dari bahan berbahaya.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/80 rounded-3xl overflow-hidden group hover:shadow-xl hover:shadow-yellow-500/5 transition-all shadow-md flex flex-col md:flex-row border border-white/10 hover:border-yellow-500/50 hover:bg-slate-900 max-w-4xl w-full"
            >
              {/* Product Image */}
              <div className="md:w-2/5 aspect-square md:aspect-auto overflow-hidden relative bg-white/5 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
                <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0" 
                />
                
                {product.label && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md z-20">
                    {product.label}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-yellow-500" />
                  {t("Pet Care")}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-yellow-500 transition-colors">
                  {product.name.includes("LIMA BINTANG") ? (
                    <span className="flex items-center flex-wrap gap-2">
                      <img 
                        src="/logo.webp" 
                        alt="LIMA BINTANG" 
                        className="h-6 sm:h-8 object-contain"
                      />
                      <span>{product.name.replace("LIMA BINTANG ", "")}</span>
                    </span>
                  ) : (
                    product.name
                  )}
                </h3>
                <p className="text-slate-400 text-base mb-8 flex-1 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="pt-6 border-t border-white/5 mt-auto">
                    <div className="flex flex-wrap sm:flex-nowrap justify-between items-end gap-6 sm:gap-2">
                      <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1.5 focus:outline-none">
                          {t("Kemasan")} {product.size}
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-yellow-500 block leading-none">{product.price}</span>
                        <div className="text-[10px] text-slate-500 mt-2 italic">
                          {t("*Harga ex-factory, belum termasuk ongkos kirim")}
                        </div>
                      </div>
                      <a 
                        href={`https://wa.me/6281210620683?text=Halo%20LIMA%20BINTANG,%20saya%20tertarik%20pesan%20produk%20${encodeURIComponent(product.name)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-3 rounded-full flex items-center justify-center gap-2 font-bold text-sm transition-colors shrink-0 w-full sm:w-auto"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {t("Pesan Sekarang")}
                      </a>
                    </div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("Keunggulan Produk")}</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-slate-900/50 border border-white/5 p-8 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-colors"
             >
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                 {item.icon}
               </div>
               <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
               <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Business Info Section */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1000&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
          <div className="relative z-10 flex items-start gap-5">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">{t("Peluang Bisnis Pet Care")}</h4>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                {t("Pasar produk perawatan hewan di Indonesia terus berkembang pesat. Peluang distribusi sangat terbuka lebar untuk mitra bisnis. Mari berkembang bersama LIMA BINTANG!")}
              </p>
            </div>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/#contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full text-sm transition-colors whitespace-nowrap block shadow-lg shadow-blue-500/20">
              {t("Pelajari Lebih Lanjut")}
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
