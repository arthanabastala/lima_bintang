import { motion } from "motion/react";
import { ShoppingCart, Car, Sparkles } from "lucide-react";

export default function ProdukAuto() {
  const products = [
    {
      category: "Automotive Series",
      name: "AutoShine Shampoo",
      description: "Shampoo Mobil & Motor – Formula pH balanced, membersihkan tanpa merusak cat, hasil bersih mengkilap. 1000ML.",
      price: "Rp 18.000 – 25.000 / botol",
      label: "Terlaris",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      category: "Automotive Series",
      name: "TireGloss Pro",
      description: "Semir Ban – Kilap hitam pekat, tahan cuaca, melindungi karet dari keretakan.",
      price: "Rp 20.000 – 30.000 / pcs",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      category: "Automotive Series",
      name: "GlassClear Pro",
      description: "Pembersih Jamur Kaca Mobil – Menghilangkan jamur & water spot, hasil jernih maksimal.",
      price: "Rp 25.000 – 35.000 / pcs",
      image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      category: "Automotive Series",
      name: "AutoPerfume Hanging",
      description: "Parfum Gantung Mobil – Aroma tahan lama dengan desain elegan untuk kabin kendaraan.",
      price: "Rp 8.000 – 12.000 / pcs",
      image: "https://images.unsplash.com/photo-1550505095-2ccdd20f31df?auto=format&fit=crop&w=600&h=600&q=80",
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
              Automotive & Specialty Series
            </h1>
            <p className="text-xl text-yellow-500 font-medium mb-6 tracking-wide">
              Produk Perawatan Kendaraan
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Formulasi khusus untuk menjaga kendaraan Anda tetap bersih, mengkilap, dan terawat. Premium untuk mobil dan motor Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
                
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-slate-300 border border-white/10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm z-20 flex items-center gap-1.5">
                  <Car className="w-3 h-3 text-yellow-500" />
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-yellow-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="pt-5 border-t border-white/5 mt-auto">
                    <div className="flex justify-between items-end gap-2">
                      <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1 focus:outline-none">
                          Harga Mulai
                        </div>
                        <span className="text-lg font-bold text-yellow-500 block leading-none">{product.price}</span>
                      </div>
                      <a 
                        href={`https://wa.me/6281210620683?text=Halo%20LIMA%20BINTANG,%20saya%20tertarik%20pesan%20produk%20${encodeURIComponent(product.name)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="bg-white/5 hover:bg-yellow-500 hover:text-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </a>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Note Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-slate-900/50 border border-yellow-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-500/5"></div>
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Available for Wholesale & Distributor</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                Prices are ex-factory. MOQ and special discounts available for bulk orders. Contact us for distributor pricing.
              </p>
            </div>
          </div>
          <div className="relative z-10 shrink-0">
            <a href="/#contact" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-full text-sm transition-colors whitespace-nowrap block">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
