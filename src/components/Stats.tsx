import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 50,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
}

export default function Stats() {
  const { t } = useLanguage();
  const stats = [
    { value: 14, suffix: "+", label: t("Lini Produk") },
    { value: 3, suffix: "", label: t("Kategori Unggulan") },
    { value: 1, suffix: "", label: t("Distributor / Wilayah") },
    { value: 0, suffix: "", label: t("Kualitas Premium"), override: "★★★★★" },
  ];

  return (
    <section className="pb-24 bg-slate-50 relative z-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 divide-x-0 md:divide-x divide-slate-200">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center md:px-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                {stat.override ? (
                  <span className="text-yellow-500 text-3xl md:text-4xl">{stat.override}</span>
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
