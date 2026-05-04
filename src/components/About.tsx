import { motion } from "motion/react";

export default function About() {
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
              Profil Perusahaan
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              PT. Tutelage Sdn Bhd Indonesia
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              PT. Tutelage Sdn Bhd Indonesia adalah perusahaan manufaktur produk household, otomotif, dan cleaning yang berdomisili di Bogor, Jawa Barat. Kami adalah pemilik dan pengelola brand LIMA BINTANG Home Care.
            </p>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Berangkat dari visi untuk menghadirkan produk kebersihan berkualitas premium dengan harga yang kompetitif, kami membangun lini produk lengkap yang mencakup kebutuhan rumah tangga sehari-hari, perawatan kendaraan, hingga produk khusus hewan peliharaan.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Saat ini kami membuka ekspansi distribusi nasional secara selektif dengan sistem 1 Distributor Utama per wilayah — menjamin keeksklusifan dan keuntungan maksimal bagi mitra kami.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-2xl text-white mb-2">Visi Kami</h5>
                <p className="text-sm text-slate-400">Menjadi merek produk kebersihan dan perawatan rumah tangga terpercaya di Indonesia yang dikenal atas kualitas, inovasi, dan konsistensi produk.</p>
              </div>
              <div>
                <h5 className="font-bold text-2xl text-white mb-2">Misi Kami</h5>
                <p className="text-sm text-slate-400">Memproduksi produk berkualitas premium dengan formula terstandarisasi, membangun jaringan distribusi nasional yang kuat, dan menciptakan peluang bisnis yang menguntungkan bagi mitra distributor kami di seluruh Indonesia.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Corporate Office" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 glass-card p-6 lg:p-8 shadow-xl hidden sm:block border-l-4 border-yellow-500">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">PRODUK</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Kualitas Premium</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
