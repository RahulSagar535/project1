"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Session check is commented out to allow testing
    // const hasLoadedBefore = sessionStorage.getItem("cavalier_loaded");
    // if (hasLoadedBefore === "true") {
    //   setLoading(false);
    //   return;
    // }

    document.body.style.overflow = "hidden";

    // Attempt to explicitly play the video to bypass strict browser autoplay policies
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay failed or blocked:", err);
        // If the video cannot play, instantly hide the preloader so user isn't stuck
        handleVideoEnded();
      });
    }

    // Safety fallback timer: max 12 seconds.
    const timer = setTimeout(() => {
      handleVideoEnded();
    }, 12000);

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
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          onClick={handleVideoEnded}
          className="fixed inset-0 z-[9999] bg-black overflow-hidden cursor-pointer"
        >
          {/* Immersive Full Screen Video */}
          <video
            ref={videoRef}
            src="/preloader.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            onError={handleVideoEnded}
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          {/* Elegant Branding Text on Top of Video */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.65, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-12 w-full text-center pointer-events-none z-10"
          >
            <span className="text-xs uppercase tracking-[0.28em] text-white font-semibold font-sans drop-shadow-md">
              Cavalier Studio
            </span>
          </motion.div>

          {/* Subtle Skip Hint */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-5 w-full text-center pointer-events-none z-10"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/70 font-sans">
              Tap anywhere to skip
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
