import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Search, ChevronDown, MessageCircle, Package, HelpCircle, Phone } from "lucide-react";

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<"Umum" | "Distribusi">("Umum");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqsUmum: FaqItem[] = [
    {
      q: "Apa itu LIMA BINTANG Home Care?",
      a: "LIMA BINTANG Home Care adalah brand produk kebersihan dan perawatan premium yang diproduksi di Bogor, Jawa Barat. Produk meliputi household, laundry, automotive, dan pet care."
    },
    {
      q: "Berapa jumlah produk yang tersedia?",
      a: "Saat ini tersedia 14 produk dalam beberapa kategori utama, siap untuk distribusi nasional."
    },
    {
      q: "Apakah produk aman digunakan?",
      a: "Ya, menggunakan formula terstandarisasi dan aman untuk penggunaan sehari-hari."
    },
    {
      q: "Apa perbedaan harga distributor dan retail?",
      a: "Harga di website adalah harga ex-factory. Distributor bebas menentukan harga jual dengan margin masing-masing."
    },
    {
      q: "Apakah tersedia sample produk?",
      a: "Ya, sample tersedia sebelum kerjasama. Hubungi tim untuk pengiriman."
    }
  ];

  const faqsDistribusi: FaqItem[] = [
    {
      q: "Bagaimana sistem distribusi eksklusif bekerja?",
      a: "1 distributor utama per wilayah. Wilayah dikunci tanpa kompetitor internal."
    },
    {
      q: "Berapa modal awal menjadi distributor?",
      a: "Bervariasi tergantung volume. Konsultasi langsung untuk detail."
    },
    {
      q: "Apa saja keuntungan distributor utama?",
      a: "Hak eksklusif wilayah, prioritas supply, harga khusus, dukungan promosi."
    },
    {
      q: "Apakah tersedia layanan OEM / maklon?",
      a: "Ya, tersedia layanan private label dengan formula dan produksi dari LIMA BINTANG."
    },
    {
      q: "Bagaimana cara menghubungi tim?",
      a: "Hubungi via WhatsApp atau email untuk respon cepat."
    }
  ];

  const currentFaqs = activeCategory === "Umum" ? faqsUmum : faqsDistribusi;

  const filteredFaqs = currentFaqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen text-white font-sans">
      {/* Search / Intro Section */}
      <section className="relative py-16 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Temukan jawaban atas pertanyaan seputar produk, distribusi, dan kerjasama LIMA BINTANG.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-500" />
            </div>
            <input
              type="text"
              className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all shadow-lg"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(null); 
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button
            onClick={() => {
              setActiveCategory("Umum");
              setOpenIndex(null);
            }}
            className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
              activeCategory === "Umum"
                ? "bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/20"
                : "bg-slate-900/50 text-slate-400 border border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <Package className="w-5 h-5" />
            Umum & Produk
          </button>
          <button
            onClick={() => {
              setActiveCategory("Distribusi");
              setOpenIndex(null);
            }}
            className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
              activeCategory === "Distribusi"
                ? "bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/20"
                : "bg-slate-900/50 text-slate-400 border border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            Distribusi & Kerjasama
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredFaqs.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredFaqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                      openIndex === idx
                        ? "bg-slate-800/80 border-yellow-500/50 shadow-lg"
                        : "bg-slate-900/50 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className={`font-semibold text-lg transition-colors ${openIndex === idx ? "text-yellow-500" : "text-white"}`}>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === idx ? "bg-yellow-500/10 rotate-180" : "bg-white/5"}`}>
                        <ChevronDown className={`w-5 h-5 ${openIndex === idx ? "text-yellow-500" : "text-slate-400"}`} />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed border-t border-white/5 mt-2 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-slate-900/50 rounded-2xl border border-white/10"
              >
                <p className="text-slate-400">Pencarian tidak menemukan hasil untuk "{searchQuery}".</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-3xl p-10 text-center relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Masih punya pertanyaan?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami untuk pertanyaan lebih lanjut atau memulai langkah kerjasama bersama LIMA BINTANG.
            </p>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current" />
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
