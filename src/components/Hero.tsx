import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* Using a placeholder stock video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2016/09/21/5469-183786270_medium.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex gap-1 sm:gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            ))}
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-slate-300 mb-4 sm:mb-6 glass-card px-3 sm:px-4 py-1.5 sm:py-2">
            PT. Tutelage Sdn Bhd Indonesia
          </div>
          <h1 className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 mb-4 sm:mb-6 mt-2">
            <img 
              src="https://placehold.co/600x150/1e293b/eab308?text=LIMA+BINTANG+LOGO" 
              alt="Lima Bintang" 
              className="h-10 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
            />
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-500 tracking-tight">Home Care</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Produsen produk household, otomotif, dan perawatan berkualitas premium untuk rumah tangga Indonesia. Bersih lebih bersih, segar lebih lama.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full"
        >
          <a href="#contact" className="group flex items-center justify-center glass-card hover:bg-white/5 text-white font-semibold px-8 py-4 transition-all duration-300">
            Get Started
            <ArrowRight strokeWidth={1.5} className="ml-2 w-5 h-5 text-yellow-500 group-hover:translate-x-1 duration-300" />
          </a>
          <a href="#about" className="flex items-center justify-center glass-card border border-white/20 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-colors duration-300">
            Discover More
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-yellow-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
