import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ProdukRumah() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = [
    "All", 
    "Dishwash Series", 
    "Laundry Series", 
    "Floor Care", 
    "Specialty", 
    "Disinfectant", 
    "Personal Care"
  ];

  const allProducts = [
    {
      category: "Dishwash Series",
      name: "LIMA BINTANG DishPro",
      description: t("Sabun Cuci Piring – Formulasi jernih anti lemak, wangi tahan lama, aman untuk kulit tangan."),
      variants: [
        { size: "90ML", price: "Rp 650", package: t("(36 pouch/dus)") },
        { size: "110ML", price: "Rp 850", package: t("(30 pouch/dus)") }
      ],
      label: "Best Seller",
      image: "/sabuncucipiring.webp",
    },
    {
      category: "Laundry Series",
      name: "LIMA BINTANG CleanWash Liquid",
      description: t("Sabun Cuci Pakaian Cair – Formula konsentrat, bersih maksimal, segar di kulit. 1000ML."),
      price: "Rp 18.000 – 22.000 / pouch",
      image: "/Cleanwash_Liquid.webp",
    },
    {
      category: "Laundry Series",
      name: "LIMA BINTANG CleanWash Powder",
      description: t("Deterjen Bubuk – Ampuh membersihkan noda membandel, busa melimpah, aroma segar. ±800–900gr."),
      price: "Rp 7.000 – 9.000 / pcs",
      image: "/Cleanwash_powder.webp",
    },
    {
      category: "Laundry Series",
      name: "LIMA BINTANG Smooth Care",
      description: t("Pewangi & Pelicin Setrika – Pakaian lebih rapi, wangi tahan lama, mudah disetrika."),
      variants: [
        { size: "500ML", price: "Rp 12.000" },
        { size: "1000ML", price: "Rp 20.000" }
      ],
      image: "/sampocare.webp",
    },
    {
      category: "Laundry Series",
      name: "LIMA BINTANG LuxPerfume Laundry",
      description: t("Parfum Laundry Premium – Harum mewah tahan lama. Per liter."),
      price: "Rp 25.000 – 35.000 / liter",
      image: "/LuxParfume_Laundry.webp",
    },
    {
      category: "Floor Care",
      name: "LIMA BINTANG SuperFloor",
      description: t("Pembersih Lantai Konsentrat – Disinfektan, membersihkan dan mewangikan lantai. 1000ML."),
      price: "Rp 16.000 – 20.000 / pouch",
      image: "/SuperFloor.webp",
    },
    {
      category: "Specialty",
      name: "LIMA BINTANG X-Clean",
      description: t("Pembersih Kerak Serbaguna – Untuk kamar mandi, wastafel, dapur. 1000ML."),
      price: "Rp 18.000 – 25.000 / botol",
      image: "/X-Clean.webp",
    },
    {
      category: "Disinfectant",
      name: "LIMA BINTANG Karbol FreshGuard",
      description: t("Karbol Wangi Anti Bakteri – Membunuh kuman dan bakteri. 1000ML."),
      price: "Rp 14.000 – 18.000 / pouch",
      image: "/SuperFloor.webp",
    },
    {
      category: "Personal Care",
      name: "LIMA BINTANG BodyFresh Liquid Soap",
      description: t("Sabun Mandi Cair – Membersihkan dan melembapkan kulit. 1000ML."),
      price: "Rp 18.000 – 25.000 / pouch",
      image: "/BodyFresh_Liquid_Soap.webp",
    }
  ];

  const filteredProducts = activeFilter === "All" 
    ? allProducts 
    : allProducts.filter(product => product.category === activeFilter);

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
              {t("PRODUK RUMAH")}
            </h1>
            <p className="text-xl text-yellow-500 font-medium mb-6 tracking-wide">
              {t("Rangkaian Produk Kebersihan Lengkap")}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t("Tersedia berbagai produk kebersihan rumah tangga dengan kualitas terstandarisasi, efektif digunakan, dan harga terjangkau untuk kebutuhan sehari-hari maupun bisnis distribusi.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Menu */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filterCategories.map((category, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm border ${
                activeFilter === category 
                  ? "bg-yellow-500 text-slate-900 border-yellow-500 shadow-yellow-500/20 translate-y-[-2px] shadow-md" 
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, productIndex) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={product.name}
              className="bg-slate-900/80 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-yellow-500/5 transition-all shadow-md flex flex-col border border-white/10 hover:border-yellow-500/50 hover:bg-slate-900 relative"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] overflow-hidden relative bg-white/5 flex items-center justify-center border-b border-white/5">
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
                
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-slate-300 border border-white/10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm z-20">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-yellow-500 transition-colors">
                  {product.name.includes("LIMA BINTANG") ? (
                    <span className="flex items-center flex-wrap gap-1.5">
                      <img 
                        src="/logo.webp" 
                        alt="LIMA BINTANG" 
                        className="h-5 sm:h-6 object-contain"
                      />
                      <span>{product.name.replace("LIMA BINTANG ", "")}</span>
                    </span>
                  ) : (
                    product.name
                  )}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="pt-5 border-t border-white/5 mt-auto">
                  {product.variants ? (
                    <div className="space-y-3">
                      {product.variants.map((variant, vIdx) => (
                        <div key={vIdx} className="flex justify-between items-center text-sm">
                          <span className="text-slate-300 font-medium">{variant.size}</span>
                          <div className="text-right">
                            <span className="text-yellow-500 font-bold block">{variant.price}</span>
                            {variant.package && (
                              <span className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider block mt-0.5">{variant.package}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-between items-end gap-2">
                      <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1 focus:outline-none">
                          {t("Harga Mulai")}
                        </div>
                        <span className="text-lg font-bold text-yellow-500 block leading-none">{product.price}</span>
                      </div>
                    </div>
                  )}

                  <a 
                    href={`https://wa.me/6281210620683?text=Halo%20LIMA%20BINTANG,%20saya%20tertarik%20pesan%20produk%20${encodeURIComponent(product.name)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full mt-5 py-3 bg-transparent border border-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex justify-center items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {t("Pesan Sekarang")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
