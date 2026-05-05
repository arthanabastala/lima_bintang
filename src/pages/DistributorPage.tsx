import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  RotateCcw, 
  Rocket, 
  CheckCircle2, 
  Package, 
  Network, 
  BadgeDollarSign,
  MessageCircle,
  MapPin,
  FlaskConical,
  FileSignature,
  AlertTriangle,
  ArrowRight
} from "lucide-react";

export default function DistributorPage() {
  const potentials = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      title: "Digunakan Setiap Hari",
      desc: "Produk kebutuhan rumah tangga seperti sabun, deterjen, dan pembersih digunakan setiap hari. Demand stabil sepanjang tahun dan tidak terpengaruh tren."
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-green-400" />,
      title: "Repeat Order Tinggi",
      desc: "Pelanggan yang puas akan terus membeli ulang, menciptakan cashflow yang konsisten dan dapat diprediksi."
    },
    {
      icon: <Rocket className="w-8 h-8 text-yellow-400" />,
      title: "Perputaran Cepat & Stabil",
      desc: "Produk fast moving dengan rotasi tinggi, cocok untuk bisnis berbasis volume dan pengembangan sub-distributor."
    }
  ];

  const schemas = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-yellow-500" />,
      title: "1 Distributor Utama per Wilayah",
      desc: "Wilayah distribusi dikunci eksklusif, tidak ada kompetitor internal."
    },
    {
      icon: <Package className="w-6 h-6 text-yellow-500" />,
      title: "Prioritas Supply & Support",
      desc: "Distributor utama mendapat prioritas pengiriman dan dukungan pengembangan area."
    },
    {
      icon: <Network className="w-6 h-6 text-yellow-500" />,
      title: "Potensi Sub-Distributor",
      desc: "Kesempatan membangun jaringan distribusi di berbagai kota dalam wilayah."
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6 text-yellow-500" />,
      title: "Bulk Pricing & Special Scheme",
      desc: "Harga khusus distributor dan skema pembelian volume besar yang kompetitif."
    }
  ];

  const steps = [
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Konfirmasi Minat Kerjasama",
      desc: "Hubungi via WhatsApp/email untuk mulai proses."
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Tentukan Wilayah Distribusi",
      desc: "Pilih wilayah yang ingin dikelola dan cek ketersediaan."
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-white" />,
      title: "Pengiriman Sample Produk",
      desc: "Uji kualitas produk sebelum komitmen."
    },
    {
      icon: <FileSignature className="w-6 h-6 text-white" />,
      title: "Finalisasi Kerjasama",
      desc: "Tanda tangan perjanjian, lakukan order awal, dan mulai distribusi."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl -z-10 bg-gradient-to-br from-blue-900/40 to-transparent"></div>
        <div className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12 border border-white/5 bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden">
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-4">
                Kerjasama Distribusi Eksklusif Nasional
              </div>
              <h1 className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                <span>Jadilah Distributor Utama</span>
                <img 
                  src="https://placehold.co/400x100/1e293b/eab308?text=LIMA+BINTANG+LOGO" 
                  alt="Lima Bintang" 
                  className="h-10 md:h-12 lg:h-16 w-auto object-contain"
                />
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Program distribusi eksklusif dengan sistem 1 distributor per wilayah. Bisnis jangka panjang dengan cashflow stabil dan margin kompetitif.
              </p>
              <a 
                href={`https://wa.me/6281210620683?text=Halo%20LIMA%20BINTANG,%20saya%20tertarik%20mendaftar%20sebagai%20Distributor.`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                Gabung Sekarang <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
          <div className="flex-1 w-full relative z-10">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
             >
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1000&q=80" 
                 alt="Business Meeting" 
                 className="w-full h-auto object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent mix-blend-overlay"></div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Market Potential */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mengapa Bisnis Ini Menguntungkan?</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {potentials.map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-slate-900/80 border border-white/10 p-8 rounded-2xl hover:bg-slate-800 hover:border-yellow-500/30 transition-all text-center group"
             >
               <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                 {item.icon}
               </div>
               <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
               <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: Distribution System */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 lg:p-12">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skema Distribusi Eksklusif</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schemas.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-5 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How to Join */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Langkah Bergabung</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-0.5 bg-white/10 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((step, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 className="relative z-10 flex flex-col items-center text-center group"
               >
                 <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center border-4 border-slate-950 mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                   {step.icon}
                 </div>
                 <div className="bg-yellow-500 text-slate-900 font-bold w-8 h-8 rounded-full flex items-center justify-center absolute top-[-10px] right-[calc(50%-44px)] border-4 border-slate-950">
                    {idx + 1}
                 </div>
                 <h4 className="text-xl font-bold text-white mb-3 px-4">{step.title}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed px-2">{step.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action (Urgency Section) */}
      <section id="join" className="py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-gradient-to-br from-slate-900 to-slate-950 border border-yellow-500/30 rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Alert Background effect */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            
            <p className="text-lg md:text-xl text-yellow-100 font-medium leading-relaxed max-w-3xl mx-auto mb-10 p-6 bg-white/5 border border-white/10 rounded-2xl italic">
              "⚠️ Perhatian: Wilayah distribusi terbatas dan langsung dikunci untuk mitra yang lebih siap. Tidak ada sistem booking tanpa komitmen awal. Segera hubungi kami sebelum wilayah Anda diambil."
            </p>
            
            <a 
              href={`https://wa.me/6281210620683?text=Halo%20LIMA%20BINTANG,%20saya%20tertarik%20mendaftar%20sebagai%20Distributor.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-1 text-center max-w-[280px] sm:max-w-none mx-auto leading-tight"
            >
              <span>Hubungi Sekarang / Ajukan Kerjasama</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
