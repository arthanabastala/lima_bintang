import { motion } from "motion/react";
import { Info, CheckCircle2, TrendingDown, Crown, ShieldCheck } from "lucide-react";

export default function PricingPage() {
  const tableData = [
    {
      category: "A. Dishwash Series – Fast Moving",
      items: [
        { name: "DishPro – Sabun Cuci Piring", size: "90ML / pouch", price: "Rp 650 / pouch", notes: "36 pouch / dus" },
        { name: "DishPro – Sabun Cuci Piring", size: "110ML / pouch", price: "Rp 850 / pouch", notes: "30 pouch / dus" }
      ]
    },
    {
      category: "B. Laundry & Household Series",
      items: [
        { name: "CleanWash Liquid – Sabun Cuci Pakaian", size: "1000ML / botol", price: "Rp 18.000 – 22.000", notes: "-" },
        { name: "CleanWash Powder – Deterjen Bubuk", size: "±800–900gr / pcs", price: "Rp 7.000 – 9.000", notes: "-" },
        { name: "Smooth Care – Pewangi & Pelicin", size: "500ML / kemasan", price: "Rp 12.000", notes: "-" },
        { name: "Smooth Care – Pewangi & Pelicin", size: "1000ML / kemasan", price: "Rp 20.000", notes: "-" },
        { name: "LuxPerfume Laundry – Parfum Premium", size: "1 Liter", price: "Rp 25.000 – 35.000", notes: "-" },
        { name: "SuperFloor – Pembersih Lantai", size: "1000ML / botol", price: "Rp 16.000 – 20.000", notes: "-" },
        { name: "PowerDescale – Pembersih Kerak", size: "1000ML / botol", price: "Rp 18.000 – 25.000", notes: "-" },
        { name: "Karbol FreshGuard – Anti Bakteri", size: "1000ML / botol", price: "Rp 14.000 – 18.000", notes: "-" },
        { name: "BodyFresh Liquid Soap", size: "1000ML / botol", price: "Rp 18.000 – 25.000", notes: "-" },
      ]
    },
    {
      category: "C. Automotive Series",
      items: [
        { name: "AutoShine Shampoo", size: "1000ML / botol", price: "Rp 18.000 – 25.000", notes: "-" },
        { name: "TireGloss Pro – Semir Ban", size: "Pcs", price: "Rp 20.000 – 30.000", notes: "-" },
        { name: "GlassClear Pro – Jamur Kaca", size: "Pcs", price: "Rp 25.000 – 35.000", notes: "-" },
        { name: "AutoPerfume Hanging", size: "Pcs", price: "Rp 8.000 – 12.000", notes: "-" }
      ]
    },
    {
      category: "D. Pet Care Series",
      items: [
        { name: "PetCare Shampoo", size: "1000ML / botol", price: "Rp 20.000 – 35.000", notes: "Bebas bahan berbahaya" }
      ]
    }
  ];

  const features = [
    {
      icon: <TrendingDown className="w-8 h-8 text-blue-400" />,
      title: "Flexible Pricing",
      desc: "Prices adjust based on volume order. Higher volume = better pricing."
    },
    {
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      title: "Distributor Scheme",
      desc: "Special pricing and support for official distributors per region."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      title: "OEM / Private Label",
      desc: "Custom branding available using LIMA BINTANG formulation."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Harga & Price List
            </h1>
            <p className="text-xl text-yellow-500 font-medium tracking-wide">
              Daftar Harga Produk LIMA BINTANG
            </p>
          </motion.div>
        </div>

        {/* Notice Banner */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="bg-blue-900/40 border border-blue-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-16 text-center sm:text-left"
        >
          <div className="bg-blue-500/20 p-3 rounded-full shrink-0">
            <Info className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              <strong className="text-white">All prices are ex-factory from Bogor, West Java.</strong> Prices may vary based on order volume and distribution area. Contact us for distributor pricing.
            </p>
          </div>
        </motion.div>

        {/* Pricing Tables */}
        <div className="space-y-12">
          {tableData.map((section, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden shadow-xl"
             >
               <div className="bg-slate-800/80 px-6 py-4 border-b border-white/10">
                 <h3 className="text-lg font-bold text-yellow-500">{section.category}</h3>
               </div>
               
               <div className="">
                 <table className="w-full text-left border-collapse block md:table">
                   <thead className="hidden md:table-header-group">
                     <tr className="bg-slate-900/50 text-slate-400 text-sm uppercase tracking-wider">
                       <th className="px-6 py-4 font-semibold w-[40%]">Product Name</th>
                       <th className="px-6 py-4 font-semibold w-[20%]">Size / Packaging</th>
                       <th className="px-6 py-4 font-semibold w-[20%] text-yellow-100">Ex-Factory Price</th>
                       <th className="px-6 py-4 font-semibold w-[20%]">Notes</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5 block md:table-row-group">
                     {section.items.map((row, rowIdx) => (
                       <tr key={rowIdx} className="hover:bg-white/5 transition-colors block md:table-row border-b border-white/5 md:border-none last:border-0 relative">
                         <td className="px-6 py-3 md:py-4 text-white font-bold md:font-medium block md:table-cell text-base md:text-base bg-white/5 md:bg-transparent">
                           {row.name}
                         </td>
                         <td className="px-6 py-2 md:py-4 text-slate-300 text-sm block md:table-cell flex flex-col md:table-cell">
                           <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5 md:hidden">Size / Packaging</span>
                           {row.size}
                         </td>
                         <td className="px-6 py-2 md:py-4 text-yellow-500 font-bold block md:table-cell whitespace-normal md:whitespace-nowrap flex flex-col md:table-cell">
                           <span className="text-[10px] uppercase tracking-wider text-yellow-100/50 font-bold mb-0.5 md:hidden">Ex-Factory Price</span>
                           {row.price}
                         </td>
                         <td className="px-6 py-2 pb-4 md:py-4 text-slate-400 text-sm block md:table-cell flex flex-col md:table-cell">
                           <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5 md:hidden">Notes</span>
                           {row.notes}
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Highlight Cards */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors shadow-lg text-center"
             >
               <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                 {feature.icon}
               </div>
               <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
               <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
             </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
