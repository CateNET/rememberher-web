"use client";

import { motion } from "framer-motion";

export function Hero() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative flex items-center overflow-hidden min-h-screen"
      style={{ minHeight: "100vh" }}
    >
      {/* Dark premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050814] via-[#0a0f1f] to-[#050814]" />
      
      {/* Subtle moving shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(229, 168, 85, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(229, 168, 85, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(229, 168, 85, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(229, 168, 85, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Subtle light lines */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-px w-1/4 bg-gradient-to-r from-transparent via-[#E5A855]/20 to-transparent" />
        <div className="absolute right-[15%] top-[60%] h-px w-1/3 bg-gradient-to-r from-transparent via-[#E5A855]/15 to-transparent" />
      </div>
      
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:gap-8 lg:py-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-3 text-center lg:text-left"
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              The modern gentleman's
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#E5A855] to-[#C9A961] bg-clip-text text-transparent">
                relationship assistant
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm font-light leading-relaxed text-white/80 sm:text-base lg:text-lg"
            >
              Built to help you remember the moments that matter
            </motion.p>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto max-w-xl text-xs leading-relaxed text-white/60 sm:text-sm lg:mx-0"
          >
            Never forget anniversaries, preferences, or the thoughtful details that show you care. 
            AI-powered insights keep everything organized and accessible.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-stretch w-full sm:w-auto sm:flex-row sm:items-center gap-3 sm:gap-2 pt-2"
          >
            <a
              href="https://apps.apple.com/app/rememberher"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block transition-transform hover:scale-105 w-full sm:w-auto"
              aria-label="Download on the App Store"
            >
              <div className="rounded-xl bg-white/5 p-2.5 sm:p-2 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors w-full">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-1.5 text-white">
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] leading-tight">Download on the</div>
                    <div className="text-xs font-semibold leading-tight">App Store</div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=app.rememberher"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block transition-transform hover:scale-105 w-full sm:w-auto"
              aria-label="Get it on Google Play"
            >
              <div className="rounded-xl bg-white/5 p-2.5 sm:p-2 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors w-full">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-1.5 text-white">
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] leading-tight">Get it on</div>
                    <div className="text-xs font-semibold leading-tight">Google Play</div>
                  </div>
                </div>
              </div>
            </a>
            <button
              onClick={scrollToHowItWorks}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 w-full sm:w-auto"
            >
              Learn more
            </button>
          </motion.div>
        </motion.div>
        
        {/* Right - App Screenshots in Stacked Tilted Style */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: -2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 relative hidden lg:block"
        >
          <div className="relative mx-auto w-full max-w-[240px]">
            {/* Glow behind phones */}
            <div className="absolute -inset-3 rounded-[48px] bg-gradient-to-r from-[#E5A855]/10 via-[#E5A855]/15 to-[#E5A855]/10 blur-2xl" />
            
            {/* Stacked phone mockups */}
            <div className="relative space-y-3">
              {/* Phone 1 - Front */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative rounded-[40px] border-2 border-white/10 bg-gradient-to-b from-[#151928] to-[#0c0f18] p-2.5 shadow-2xl backdrop-blur-sm"
              >
                <div className="aspect-[9/19.5] rounded-[32px] bg-gradient-to-br from-[#1a1f2e] to-[#0f1418] flex items-center justify-center overflow-hidden">
                  <div className="text-white/20 text-2xl">📱</div>
                </div>
              </motion.div>
              
              {/* Phone 2 - Behind, Tilted */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -top-2 left-5 w-full rounded-[40px] border-2 border-white/5 bg-gradient-to-b from-[#151928] to-[#0c0f18] p-2.5 shadow-2xl backdrop-blur-sm -rotate-6 scale-95"
              >
                <div className="aspect-[9/19.5] rounded-[32px] bg-gradient-to-br from-[#1a1f2e] to-[#0f1418] flex items-center justify-center">
                  <div className="text-white/10 text-2xl">📱</div>
                </div>
              </motion.div>
              
              {/* Phone 3 - Furthest, More Tilted */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute -top-5 right-5 w-full rounded-[40px] border-2 border-white/5 bg-gradient-to-b from-[#151928] to-[#0c0f18] p-2.5 shadow-2xl backdrop-blur-sm rotate-6 scale-90"
              >
                <div className="aspect-[9/19.5] rounded-[32px] bg-gradient-to-br from-[#1a1f2e] to-[#0f1418] flex items-center justify-center">
                  <div className="text-white/5 text-2xl">📱</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-3 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-wider">Scroll</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
