"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-heading">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-accent mt-8" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-foreground/80 text-lg md:text-xl leading-relaxed"
        >
          <p>
            <strong className="text-foreground font-semibold">AR Medias</strong> is a modern IT solutions and digital growth company focused on building scalable digital ecosystems for startups, brands, creators, and businesses.
          </p>
          <p>
            We combine software development, AI systems, automation, and digital growth strategies to help businesses operate smarter, scale faster, and build stronger digital infrastructure.
          </p>
          <p>
            Our goal is to reduce manual work, eliminate repetitive operations, improve efficiency, and create systems that support long-term business growth.
          </p>
          <p>
            From websites and applications to AI-powered automation systems, AR Medias provides complete digital solutions under one roof.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
