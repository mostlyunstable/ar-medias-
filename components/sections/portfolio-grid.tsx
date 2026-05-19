"use client";

import { memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
};

const TiltCard = memo(function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics for butter-smooth return
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  // Transform values into 3D rotations (Subtle: max 5 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  // GPU-accelerated glow translation coordinates
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["-25%", "25%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["-25%", "25%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Normalize mouse position between -0.5 and 0.5
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      className="group cursor-pointer flex flex-col relative w-full"
    >
      {/* 3D Image Box */}
      <div 
        className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative mb-6 border border-foreground/[0.05] bg-foreground/5 shadow-lg transition-shadow duration-500 group-hover:shadow-2xl"
        style={{ transform: "translateZ(30px)" }}
      >
        <Image 
          src={project.thumbnail} 
          alt={project.title} 
          fill
          priority={index === 0}
          // Bypass Next.js proxy for external URLs — stops ConnectTimeoutError
          // Unsplash already serves optimized WebP via its own CDN
          unoptimized={project.thumbnail.startsWith('http')}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        
        {/* Dynamic Magnetic Glow - GPU Accelerated Translation */}
        <motion.div 
          className="absolute w-[200%] h-[200%] -left-[50%] -top-[50%] z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 50%)`,
            x: glowX,
            y: glowY
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-50" />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-foreground/10 pointer-events-none" />
        
        {/* Floating Badge (Pops out in 3D) */}
        <div 
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-xl px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-foreground/10 text-foreground"
          style={{ transform: "translateZ(50px)" }}
        >
          {project.category}
        </div>
      </div>
      
      {/* Text Content (Also translates in Z-space slightly) */}
      <div style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 group-hover:text-accent transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-foreground/60 text-lg group-hover:text-foreground/80 transition-colors duration-500">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
});

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <div role="list" className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 perspective-[2000px]">
      {projects.map((project, i) => (
        <div role="listitem" key={project.id}>
          <TiltCard project={project} index={i} />
        </div>
      ))}
    </div>
  );
}
