/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import HomePage from "./pages/HomePage";
import ProdukRumah from "./pages/ProdukRumah";
import ProdukAuto from "./pages/ProdukAuto";
import PetCare from "./pages/PetCare";
import GaleriPage from "./pages/GaleriPage";
import DistributorPage from "./pages/DistributorPage";
import PricingPage from "./pages/PricingPage";
import OemPage from "./pages/OemPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen font-sans antialiased text-slate-300 bg-slate-950 selection:bg-blue-500 selection:text-white pb-20 relative overflow-x-hidden">
      <ScrollToTop />
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15, scale: 0.98, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/produk-rumah" element={<ProdukRumah />} />
            <Route path="/produk-auto" element={<ProdukAuto />} />
            <Route path="/pet-care" element={<PetCare />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/distributor" element={<DistributorPage />} />
            <Route path="/harga" element={<PricingPage />} />
            <Route path="/oem" element={<OemPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
