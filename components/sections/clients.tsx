"use client";

import { motion } from "framer-motion";

const clients = [
  "TechFlow", "Lumina Systems", "Nova Growth", "Aura Dynamics", "Synthetix", 
  "Nexus Labs", "Elevate AI", "Horizon Tech", "Omni Automations"
];

export function Clients() {
  return (
    <section className="py-24 w-full bg-foreground/5 border-y border-foreground/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/60 text-center">
          Trusted By Modern Businesses
        </h3>
      </div>
      
      {/* Marquee Animation */}
      <div className="flex w-[200%] md:w-[150%] lg:w-[120%]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {/* Repeat array twice for seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="px-8 md:px-16 text-3xl md:text-5xl font-black uppercase text-foreground/20 font-heading"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
