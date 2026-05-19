"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

const Scene = dynamic(() => import("./canvas-scene"), { ssr: false });

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Scene />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mt-12 md:mt-0 pointer-events-none">
        <motion.h1
          initial={{ opacity: 1, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight uppercase font-heading"
        >
          Future-Ready IT Solutions <br />
          <span className="text-accent">For Modern Businesses</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-8 text-base md:text-xl max-w-3xl text-foreground/80 leading-relaxed"
        >
          AR Medias helps startups and businesses scale through technology, AI systems, automation, and digital infrastructure. 
          We reduce operational workload, eliminate repetitive tasks, automate business processes, and build scalable digital systems designed for growth, efficiency, and performance.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full justify-center pointer-events-auto"
        >
          <Link href="#contact" className="px-8 py-4 bg-foreground text-background font-medium rounded-full hover:scale-105 transition-transform w-full sm:w-auto">
            Get Started
          </Link>
          <Link href="#portfolio" className="px-8 py-4 border border-foreground/20 font-medium rounded-full hover:bg-foreground/5 transition-colors w-full sm:w-auto">
            View Portfolio
          </Link>
          <Link href="#contact" className="px-8 py-4 border border-foreground/20 font-medium rounded-full hover:bg-foreground/5 transition-colors w-full sm:w-auto">
            Book a Call
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        aria-label="Scroll down"
        className="absolute bottom-10 z-10 w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center animate-bounce pointer-events-none"
      >
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </section>
  );
}
