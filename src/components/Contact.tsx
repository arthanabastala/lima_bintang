import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pertanyaan Website dari ${firstName} ${lastName}`);
    const body = encodeURIComponent(`Nama: ${firstName} ${lastName}\nEmail: ${email}\n\nPesan:\n${message}`);
    window.location.href = `mailto:sandywu@tutelagesdnbhdindo.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Very strong CTA Headline above contact */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {t("Mulai Kerjasama Dengan Kami")}
            </h2>
            <p className="text-slate-400 text-xl font-light">
              {t("Mari diskusikan bagaimana produk kami dapat memenuhi kebutuhan bisnis dan rumah tangga Anda.")}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">{t("Hubungi Kami")}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-yellow-500 shrink-0 mr-6 hover:bg-yellow-500/10 transition-colors">
                  <Mail strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</h4>
                  <a href="mailto:sandywu@tutelagesdnbhdindo.com" className="text-base sm:text-lg text-white font-medium hover:text-yellow-500 transition-colors break-words lg:break-normal line-clamp-2 md:line-clamp-none" style={{ wordBreak: 'break-word' }}>
                    sandywu@tutelagesdnbhdindo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-yellow-500 shrink-0 mr-6 hover:bg-yellow-500/10 transition-colors">
                  <Phone strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{t("WhatsApp")}</h4>
                  <a href="https://wa.me/6281210620683" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white font-medium hover:text-yellow-500 transition-colors">
                    +62 812-1062-0683
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-yellow-500 shrink-0 mr-6 hover:bg-yellow-500/10 transition-colors">
                  <MapPin strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{t("Pabrik & Kantor")}</h4>
                  <a href="https://share.google/jpGGJ9qd5jFEwerFo" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white font-medium hover:text-yellow-500 transition-colors block leading-relaxed pr-4">
                    PT. Tutelage Sdn Bhd Indonesia<br />
                    Cipelang Cijeruk 16740<br />
                    Bogor, Jawa Barat, Indonesia
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">{t("Nama Depan")}</label>
                  <input 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors relative z-10"
                    placeholder={t("Budi")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">{t("Nama Belakang")}</label>
                  <input 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors relative z-10"
                    placeholder={t("Santoso")}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-400 mb-2">{t("Email Bisnis")}</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors relative z-10"
                  placeholder={t("budi@perusahaan.com")}
                />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-400 mb-2">{t("Pesan")}</label>
                <textarea 
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors resize-none relative z-10"
                  placeholder={t("Beritahu kami tentang kebutuhan Anda...")}
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-yellow-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center group hover:bg-yellow-500 transition-colors relative z-10"
              >
                {t("Kirim Pesan")}
                <ArrowRight strokeWidth={1.5} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
