"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce OS", category: "Websites", description: "Scalable headless commerce platform.", image: "/ecommerce_os.png" },
  { title: "Omni CRM", category: "Apps", description: "Internal management tool for logistics.", image: "/omni_crm.png" },
  { title: "Support Bot X", category: "AI Systems", description: "LLM powered customer support agent.", image: "/support_bot.png" },
  { title: "LeadGen Flow", category: "Automation Projects", description: "Automated scraping & emailing pipeline.", image: "/leadgen_flow.png" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight font-heading mb-6"
          >
            Selected Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg md:text-xl"
          >
            A showcase of websites, applications, automation systems, AI solutions, and digital projects built for modern businesses.
          </motion.p>
        </div>
        <motion.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="px-8 py-4 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-all whitespace-nowrap"
        >
          View All Work
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            key={project.title}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Box */}
            <div className="w-full aspect-[4/3] bg-foreground-[0.02] rounded-2xl overflow-hidden relative mb-6 border border-foreground/[0.05] shadow-sm transition-all duration-500 ease-out group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-1 dark:group-hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none opacity-50" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10 pointer-events-none" />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm border border-foreground/5">
                {project.category}
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-foreground/60 text-lg">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
