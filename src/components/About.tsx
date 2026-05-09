import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-3">
              {t("Profil Perusahaan")}
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              PT. Tutelage Sdn Bhd Indonesia
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              {t("PT. Tutelage Sdn Bhd Indonesia adalah perusahaan manufaktur produk household, otomotif, dan cleaning yang berdomisili di Bogor, Jawa Barat. Kami adalah pemilik dan pengelola brand LIMA BINTANG Home Care.")}
            </p>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              {t("Berangkat dari visi untuk menghadirkan produk kebersihan berkualitas premium dengan harga yang kompetitif, kami membangun lini produk lengkap yang mencakup kebutuhan rumah tangga sehari-hari, perawatan kendaraan, hingga produk khusus hewan peliharaan.")}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {t("Saat ini kami membuka ekspansi distribusi nasional secara selektif dengan sistem 1 Distributor Utama per wilayah — menjamin keeksklusifan dan keuntungan maksimal bagi mitra kami.")}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-2xl text-white mb-2">{t("Visi Kami")}</h5>
                <p className="text-sm text-slate-400">{t("Menjadi merek produk kebersihan dan perawatan rumah tangga terpercaya di Indonesia yang dikenal atas kualitas, inovasi, dan konsistensi produk.")}</p>
              </div>
              <div>
                <h5 className="font-bold text-2xl text-white mb-2">{t("Misi Kami")}</h5>
                <p className="text-sm text-slate-400">{t("Memproduksi produk berkualitas premium dengan formula terstandarisasi, membangun jaringan distribusi nasional yang kuat, dan menciptakan peluang bisnis yang menguntungkan bagi mitra distributor kami di seluruh Indonesia.")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex gap-3 sm:gap-4 aspect-square lg:aspect-[4/5]"
          >
            {/* Left Column */}
            <div className="flex flex-col flex-1 gap-3 sm:gap-4 pb-6 sm:pb-8 lg:pb-12">
              <div className="rounded-tl-[3rem] sm:rounded-tl-[4rem] lg:rounded-tl-[70px] overflow-hidden shadow-2xl relative flex-1 group z-0 bg-slate-900 transform-gpu border border-white/5">
                {/* Cinematic Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1584820927498-cafe2c1c8ba8?auto=format&fit=crop&w=600&h=600&q=80" 
                    className="w-full h-full object-cover blur-2xl scale-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                    alt="" 
                    aria-hidden="true" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-yellow-500/10 mix-blend-overlay transition-opacity duration-700 pointer-events-none"></div>
                </div>
                
                <img 
                  src="/cucipiring.webp" 
                  alt="Produk Household" 
                  className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 relative z-10 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="rounded-bl-2xl lg:rounded-bl-3xl overflow-hidden shadow-2xl relative flex-1 group z-0 bg-slate-900 transform-gpu border border-white/5">
                {/* Cinematic Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&h=600&q=80" 
                    className="w-full h-full object-cover blur-2xl scale-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                    alt="" 
                    aria-hidden="true" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-yellow-500/10 mix-blend-overlay transition-opacity duration-700 pointer-events-none"></div>
                </div>
                
                <img 
                  src="/petcareshampoo.webp" 
                  alt="Produk Pet Care" 
                  className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 relative z-10 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col flex-1 gap-3 sm:gap-4 pt-6 sm:pt-8 lg:pt-12">
              <div className="rounded-tr-2xl lg:rounded-tr-3xl overflow-hidden shadow-2xl relative flex-1 group z-0 bg-slate-900 transform-gpu border border-white/5">
                {/* Cinematic Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&h=600&q=80" 
                    className="w-full h-full object-cover blur-2xl scale-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                    alt="" 
                    aria-hidden="true" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-yellow-500/10 mix-blend-overlay transition-opacity duration-700 pointer-events-none"></div>
                </div>
                
                <img 
                  src="/autoshineshampoo.webp" 
                  alt="Produk Auto Care" 
                  className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 relative z-10 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="rounded-br-[3rem] sm:rounded-br-[4rem] lg:rounded-br-[70px] overflow-hidden shadow-2xl relative flex-1 group z-0 bg-slate-900 transform-gpu border border-white/5">
                {/* Cinematic Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&h=600&q=80" 
                    className="w-full h-full object-cover blur-2xl scale-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                    alt="" 
                    aria-hidden="true" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-yellow-500/10 mix-blend-overlay transition-opacity duration-700 pointer-events-none"></div>
                </div>
                
                <img 
                  src="/xclean.webp" 
                  alt="General Cleaning" 
                  className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 relative z-10 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 glass-card p-6 lg:p-8 shadow-xl hidden sm:block border-l-4 border-yellow-500 z-20 bg-slate-900/90 backdrop-blur-md">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">PRODUK</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Kualitas Premium</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
