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

    // Safety fallback timer set to 25 seconds so the video never gets cut off early,
    // while still ensuring the user is never stuck if autoplay is blocked.
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("cavalier_loaded", "true");
      document.body.style.overflow = "";
    }, 25000);

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
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          onClick={handleVideoEnded}
          className="fixed inset-0 z-[9999] bg-black overflow-hidden cursor-pointer"
        >
          {/* Immersive Full Screen Video */}
          <video
            src="/preloader.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          {/* Elegant Branding Text on Top of Video */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.65, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none"
          >
            <span className="text-xs uppercase tracking-[0.28em] text-white font-semibold font-sans">
              Cavalier Studio
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
