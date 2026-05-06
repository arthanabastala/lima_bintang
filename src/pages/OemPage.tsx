import { motion } from "motion/react";
import { 
  Building2, 
  FlaskConical, 
  PackageSearch, 
  Settings, 
  ShieldCheck, 
  Truck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function OemPage() {
  const { t } = useLanguage();
  const provides = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-400" />,
      title: "Certified Production Facility",
      desc: "High-standard manufacturing facility with quality control system."
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-yellow-400" />,
      title: "Standardized Formulas",
      desc: "Proven and tested product formulations."
    },
    {
      icon: <PackageSearch className="w-8 h-8 text-blue-400" />,
      title: "Packaging & Label Support",
      desc: "Consultation for packaging, viscosity, aroma, and design brief."
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-400" />,
      title: "Custom Production",
      desc: "Production tailored to client specifications."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
      title: "Quality Control",
      desc: "Strict QC in every production batch."
    },
    {
      icon: <Truck className="w-8 h-8 text-yellow-400" />,
      title: "Nationwide Delivery",
      desc: "Shipping available across Indonesia."
    }
  ];

  const categories = [
    "Dishwashing Products (liquid, pouch, bottle)",
    "Laundry Products (liquid & powder detergent)",
    "Floor & Disinfectant Cleaners",
    "Fabric Softener & Laundry Perfume",
    "Body Care Products (liquid soap)",
    "Automotive Care Products (car shampoo, tire polish, glass cleaner)",
    "Pet Care Products (pet shampoo)"
  ];

  const steps = [
    {
      title: "Konsultasi Awal",
      desc: "Discuss product type, formula, packaging, volume, and target market."
    },
    {
      title: "Pengembangan Formula",
      desc: "Adjust formula based on client needs (viscosity, aroma, pH, color, etc)."
    },
    {
      title: "Sample Approval",
      desc: "Sample is sent for testing and approval. Revisions available if needed."
    },
    {
      title: "Produksi Massal",
      desc: "Mass production begins with strict quality control at every stage."
    },
    {
      title: "Pengiriman",
      desc: "Products are packaged with client's brand and shipped to destination."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl -z-10 bg-gradient-to-br from-blue-900/40 to-transparent"></div>
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden shadow-xl">
          <div className="flex-1 p-8 lg:p-12 z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-yellow-500 font-bold uppercase tracking-widest mb-4 text-sm">
                OEM / Private Label / Maklon
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                {t("Layanan Maklon &")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Private Label</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                {t("Wujudkan brand produk kebersihan Anda sendiri menggunakan fasilitas produksi dan formula terbukti dari LIMA BINTANG.")}
              </p>
              <a 
                href={`https://wa.me/6281210620683?text=Halo%20LIMA%20BINTANG,%20saya%20ingin%20Konsultasi%20Gratis%20tentang%20Maklon/OEM.`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                {t("Konsultasi Gratis")} <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
          <div className="flex-1 w-full h-[400px] lg:h-auto relative z-10">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full w-full"
             >
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" 
                 alt="Factory Production" 
                 className="w-full h-full object-cover lg:rounded-l-3xl shadow-2xl"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay"></div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: About Service */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="bg-slate-900/50 border border-white/5 rounded-3xl p-10 lg:p-16 shadow-lg"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">{t("Produksi dengan Brand Anda Sendiri")}</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full mb-10"></div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8 text-center">
              {t("Layanan OEM (Original Equipment Manufacturer) dan Private Label kami memungkinkan Anda untuk menciptakan produk kebersihan rumah tangga, otomotif, atau perawatan hewan di bawah brand Anda sendiri tanpa perlu membangun pabrik atau fasilitas produksi.")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <p className="text-white font-medium">Full production facility provided</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <p className="text-white font-medium">Standardized and tested formulas</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <p className="text-white font-medium">Technical support from formulation to packaging</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <p className="text-white font-medium">Client focuses on branding, marketing, and distribution</p>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <p className="text-white font-medium">Available for all LIMA BINTANG product categories</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: What We Provide */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("Apa yang Kami Sediakan?")}</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {provides.map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-slate-900/80 border border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-yellow-500/30 hover:bg-slate-800 transition-all group"
             >
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0">
                 {item.icon}
               </div>
               <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
               <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Product Categories for OEM */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-3xl p-10 lg:p-16 relative overflow-hidden text-white shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
          <div className="relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("Kategori Produk Maklon")}</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {categories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0" />
                  <p className="font-semibold text-white">{category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Process Timeline */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("Proses Maklon LIMA BINTANG")}</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-900/50 before:via-blue-500 before:to-blue-900/50">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md">
                {idx + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/80 border border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-800 transition-all">
                <h4 className="font-bold text-xl text-white mb-2">{t(step.title)}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-gradient-to-br from-slate-900 to-slate-950 border border-yellow-500/30 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t("Bangun Brand Anda Sekarang")}</h2>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
              {t("Mulai merek produk kebersihan Anda sendiri dengan dukungan manufaktur terpercaya dari LIMA BINTANG. Kualitas terjamin, harga kompetitif.")}
            </p>
            
            <a 
              href={`https://wa.me/6281210620683?text=Halo%20LIMA%20BINTANG,%20saya%20tertarik%20dengan%20Layanan%20Maklon/OEM.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-xl shadow-red-600/20 hover:shadow-red-500/40 hover:-translate-y-1 text-center max-w-[280px] sm:max-w-none mx-auto leading-tight"
            >
              <span>{t("Ajukan Maklon Sekarang / Konsultasi Gratis")}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
