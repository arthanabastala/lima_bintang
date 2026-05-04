import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, RefreshCcw, Factory } from "lucide-react";

export default function Experience() {
  const metrics = [
    { name: "Konsistensi Produk", value: 95, icon: <CheckCircle2 strokeWidth={1.5} className="w-6 h-6" /> },
    { name: "Kepuasan Pelanggan", value: 92, icon: <ShieldCheck strokeWidth={1.5} className="w-6 h-6" /> },
    { name: "Repeat Order", value: 90, icon: <RefreshCcw strokeWidth={1.5} className="w-6 h-6" /> },
    { name: "Produksi Internal", value: 100, icon: <Factory strokeWidth={1.5} className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-slate-50 relative z-10 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-yellow-600 font-bold uppercase tracking-wider text-sm mb-3">
              Standar Kami
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
              Kualitas, Konsistensi, Kepercayaan
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Setiap produk dirancang dengan standar tinggi untuk memastikan performa maksimal, daya saing di pasar, serta membangun kepercayaan jangka panjang bagi pelanggan dan mitra bisnis.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  {metric.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{metric.value}%</div>
                  <div className="font-medium text-slate-500 text-sm">{metric.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
