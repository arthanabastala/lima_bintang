import { motion } from "motion/react";
import { MessageCircle, Mail, MapPin, Building2, Phone, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const whatsappNumber = "6281210620683";
  const emailAddress = "sandywu@tutelagesdnbhdindo.com";

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-16 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-6">
            <Phone className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t("Hubungi Kami")}
          </h1>
          <p className="text-xl text-yellow-500 font-medium mb-6 tracking-wide">
            {t("Kami Siap Melayani Anda")}
          </p>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t("Punya pertanyaan, ingin menjadi distributor, atau tertarik layanan maklon? Hubungi kami sekarang. Respons cepat dijamin.")}
          </p>
        </motion.div>
      </section>

      {/* Primary Contact Options */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* WhatsApp Card - Highly Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-[#25D366]/20 to-slate-900 border border-[#25D366]/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#25D366]/10 rounded-full blur-3xl"></div>
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#25D366]/30">
              <MessageCircle className="w-8 h-8 text-white fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{t("Chat via WhatsApp")}</h3>
            <p className="text-slate-300 mb-8 flex-1">
              {t("Cara tercepat untuk terhubung dengan tim kami. Tersedia setiap hari.")}
            </p>
            <div className="space-y-3 mt-auto">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Halo%20LIMA%20BINTANG,%20saya%20ingin%20bertanya%20mengenai%20produk%20Anda.`}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20b858] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#25D366]/20"
              >
                {t("Chat WhatsApp Sekarang")}
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Halo%20LIMA%20BINTANG,%20saya%20tertarik%20mendaftar%20sebagai%20Distributor.`}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-white/10 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {t("Daftar Distributor")}
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Halo%20LIMA%20BINTANG,%20saya%20tertarik%20dengan%20Layanan%20Maklon/OEM.`}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-white/10 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {t("Tanya Layanan Maklon")}
              </a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900/80 border border-blue-500/30 rounded-3xl p-8 hover:border-blue-500/50 transition-colors flex flex-col"
          >
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{t("Kirim Email")}</h3>
            <p className="text-slate-400 mb-8 flex-1">
              {t("Untuk pertanyaan detail, penawaran formal, atau kerjasama bisnis.")}
            </p>
            <div className="space-y-3 mt-auto">
              <a 
                href={`mailto:${emailAddress}?subject=Tanya%20Produk%20LIMA%20BINTANG`}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-500/20"
              >
                {t("Kirim Email")}
              </a>
              <a 
                href={`mailto:${emailAddress}?subject=Permohonan%20Distributor%20LIMA%20BINTANG`}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-white/10 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {t("Email Permohonan Distributor")}
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-900/80 border border-yellow-500/30 rounded-3xl p-8 hover:border-yellow-500/50 transition-colors flex flex-col"
          >
            <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{t("Kunjungi / Lokasi Pabrik")}</h3>
            <p className="text-slate-400 mb-8 flex-1">
              Cipelang Cijeruk, Bogor, Jawa Barat
            </p>
            <div className="mt-auto h-32 bg-slate-800 rounded-xl overflow-hidden relative border border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80')] opacity-30 bg-cover bg-center"></div>
              <MapPin className="w-8 h-8 text-yellow-500 relative z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info & Location Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
             >
               <h2 className="text-3xl font-bold text-white mb-8">{t("Informasi Perusahaan")}</h2>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                     <Building2 className="w-6 h-6 text-yellow-500" />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">{t("Nama Perusahaan")}</p>
                     <p className="text-white font-semibold text-lg">PT. Tutelage Sdn Bhd Indonesia</p>
                     <p className="text-slate-400">{t("(Pemilik Brand LIMA BINTANG Home Care)")}</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                     <MapPin className="w-6 h-6 text-yellow-500" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">{t("Alamat")}</p>
                     <p className="text-white font-semibold text-base sm:text-lg break-words">Cipelang Cijeruk 16740</p>
                     <p className="text-slate-400 break-words">Bogor, Jawa Barat, Indonesia</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                     <Phone className="w-6 h-6 text-yellow-500" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">{t("WhatsApp / Telepon")}</p>
                     <p className="text-white font-semibold text-base sm:text-lg break-words">+62 812-1062-0683</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                     <Mail className="w-6 h-6 text-yellow-500" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">{t("Email")}</p>
                     <p className="text-white font-semibold text-base sm:text-lg break-words lg:break-normal line-clamp-2 md:line-clamp-none" style={{ wordBreak: 'break-word' }}>sandywu@tutelagesdnbhdindo.com</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                     <Globe className="w-6 h-6 text-yellow-500" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">{t("Website")}</p>
                     <p className="text-white font-semibold text-base sm:text-lg break-words">tutelagesdnbhdindo.com</p>
                   </div>
                 </div>
               </div>
             </motion.div>
          </div>
          
          {/* Location Highlight */}
          <div>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-yellow-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">{t("Lokasi Pabrik")}</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {t("Pabrik produksi kami berlokasi di Bogor, Jawa Barat — strategis untuk distribusi ke seluruh wilayah Indonesia.")}
                </p>
                <div className="space-y-4 text-white">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500" />
                    <span className="font-medium text-lg">{t("Distribusi Nasional")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500" />
                    <span className="font-medium text-lg">{t("Produksi Massal Siap")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500" />
                    <span className="font-medium text-lg">{t("Ex-Factory Pricing")}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-gradient-to-br from-blue-900/60 to-slate-900 border border-blue-500/40 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t("Mulai Kerjasama Sekarang")}</h2>
            
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-10">
              {t("Hubungi tim kami untuk mendapatkan penawaran terbaik sebagai distributor atau layanan maklon.")}
            </p>
            
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1"
            >
              {t("Hubungi Kami Sekarang")}
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
