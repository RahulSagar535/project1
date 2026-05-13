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
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black"
        >
          {/* Full-Screen Video Background */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 h-full w-full overflow-hidden"
          >
            <video
              src="/preloader.mp4"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Moody Cinematic Vignette overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/35" />

          {/* Elegant Branding Text */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.82, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
          >
            <span className="text-xs uppercase tracking-[0.28em] text-white/70 font-semibold font-sans">
              Cavalier Studio
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
