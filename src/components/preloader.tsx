"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage so it only plays once per session for seamless browsing
    const hasLoadedBefore = sessionStorage.getItem("cavalier_loaded");
    if (hasLoadedBefore === "true") {
      setLoading(false);
      return;
    }

    // Disable scroll on mount
    document.body.style.overflow = "hidden";

    // Fallback timer to ensure the preloader disappears after a safe duration (e.g., 4.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("cavalier_loaded", "true");
      document.body.style.overflow = "";
    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleVideoEnded = () => {
    setLoading(false);
    sessionStorage.setItem("cavalier_loaded", "true");
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
        >
          <div className="relative h-full w-full flex flex-col items-center justify-center p-6 md:p-12">
            {/* Cinema Ambient Back-Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.6)_0%,#050505_100%)]" />
            
            {/* Video Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-full max-h-[82vh] w-full max-w-[92vw] overflow-hidden rounded-2xl border border-white/8 bg-black/50 shadow-2xl backdrop-blur-md flex items-center justify-center"
            >
              <video
                src="/preloader.mp4"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
                className="h-full w-full object-contain"
              />
            </motion.div>
            
            {/* Elegant Branding Text */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-8 text-center"
            >
              <span className="text-xs uppercase tracking-[0.24em] text-white/55 font-semibold font-sans">
                Cavalier Studio
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
