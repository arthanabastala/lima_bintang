import { motion } from "motion/react";
import { Utensils, Shirt, Car, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();
  const products = [
    {
      category: "Household Series",
      icon: <Utensils strokeWidth={1.5} className="w-6 h-6" />,
      title: "LIMA BINTANG DishPro",
      description: "Sabun Cuci Piring – Formulasi Jernih & Wangi",
      price: "Mulai Rp 650 / pouch",
      label: "Fast Moving",
      labelColor: "text-blue-400 bg-blue-500/20 border-blue-500/30",
      image: "/cucipiring.webp",
      link: "/produk-rumah"
    },
    {
      category: "Laundry Series",
      icon: <Shirt strokeWidth={1.5} className="w-6 h-6" />,
      title: "LIMA BINTANG CleanWash",
      description: "Sabun Cuci Pakaian Cair & Bubuk",
      price: "Mulai Rp 7.000",
      label: "Best Seller",
      labelColor: "text-yellow-400 bg-yellow-500/20 border-yellow-500/30",
      image: "/cleanwashpowder.webp",
      link: "/produk-rumah"
    },
    {
      category: "Automotive Series",
      icon: <Car strokeWidth={1.5} className="w-6 h-6" />,
      title: "LIMA BINTANG AutoShine",
      description: "Shampoo Mobil & Motor Premium",
      price: "Mulai Rp 18.000 / 1000ML",
      image: "/autoshineshampoo.webp",
      link: "/produk-auto"
    },
    {
      category: "Pet Care Series",
      icon: <PawPrint strokeWidth={1.5} className="w-6 h-6" />,
      title: "LIMA BINTANG PetCare",
      description: "Shampoo Hewan Peliharaan",
      price: "Mulai Rp 20.000 / 1000ML",
      image: "/petcareshampoo.webp",
      link: "/pet-care"
    }
  ];

  return (
    <section id="products" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-3">
              {t("Portofolio Produk")}
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t("Rangkaian Produk Unggulan")}
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <Link 
                to={product.link}
                className="group relative rounded-2xl glass-card flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(234,179,8,0.15)] transition-all duration-500 w-full"
              >
                {/* Product Image Area */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900 border-b border-white/5 group-hover:border-white/10 transition-colors">
                  {/* Cinematic Background */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={product.image} 
                      className="w-full h-full object-cover blur-2xl scale-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                      alt="" 
                      aria-hidden="true" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-yellow-500/10 mix-blend-overlay transition-opacity duration-700 pointer-events-none"></div>
                  </div>
                  
                  {/* Main Product Image */}
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-contain p-6 relative z-10 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700"
                  />
                  
                  {product.label && (
                    <div className={`absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full text-[10px] font-bold border backdrop-blur-md uppercase tracking-wider ${product.labelColor}`}>
                      {product.label}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0 group-hover:text-yellow-500 group-hover:bg-yellow-500/10 transition-colors duration-300">
                    {product.icon}
                  </div>
                  <div>
                    <div className="text-yellow-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {product.title.includes("LIMA BINTANG") ? (
                        <span className="inline-flex items-center flex-wrap gap-x-1.5 gap-y-0.5">
                          <img 
                            src="/logo.webp" 
                            alt="LIMA BINTANG" 
                            className="h-4 sm:h-5 object-contain"
                          />
                          <span>{product.title.replace("LIMA BINTANG ", "")}</span>
                        </span>
                      ) : (
                        product.title
                      )}
                    </h3>
                  </div>
                </div>
                
                
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                <div className="pt-5 border-t border-white/10 mt-auto">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1.5">
                    {t("Harga Mulai")}
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                      {product.price.replace("Mulai ", "")}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
