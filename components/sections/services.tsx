"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    title: "Development Services",
    items: [
      "Website Development", "Custom Web Applications", "Mobile App Development", 
      "Android App Development", "iOS App Development", "E-Commerce Development", 
      "SaaS Development", "Dashboard & CRM Development", "API Integration", 
      "UI/UX Designing", "Software Solutions"
    ]
  },
  {
    title: "AI & Automation Services",
    items: [
      "AI Automation", "Business Automation", "Workflow Automation", 
      "AI Chatbot Development", "AI Agent Development", "AI Systems Integration", 
      "Custom AI Solutions", "Marketing Automation", "Lead Generation Automation", 
      "Email Automation", "CRM Automation"
    ]
  },
  {
    title: "Digital Marketing Services",
    items: [
      "SEO", "SEM", "Social Media Marketing", "Meta Ads", "Google Ads", 
      "Instagram Growth", "Branding", "Content Marketing", "Funnel Building", 
      "Performance Marketing", "Lead Generation"
    ]
  },
  {
    title: "Creative Services",
    items: [
      "Graphic Designing", "Logo Designing", "Brand Identity", "Video Editing", 
      "Motion Graphics", "Social Media Creatives", "Thumbnail Designing"
    ]
  },
  {
    title: "Advanced Tech Services",
    items: [
      "Game Development", "Multiplayer Game Systems", "AI-Powered Platforms", 
      "Cybersecurity Solutions", "Data Analytics Solutions", "Custom Business Software"
    ]
  }
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tight font-heading mb-6"
        >
          Our Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/70 text-lg md:text-xl"
        >
          Scalable digital solutions designed for modern businesses, startups, and growing brands.
        </motion.p>
      </div>

      <div className="flex flex-col gap-4">
        {services.map((service, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={service.title} 
              className="border-b border-foreground/10"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-2xl md:text-4xl font-semibold uppercase group-hover:text-accent transition-colors">
                  {service.title}
                </span>
                <span className="p-4 rounded-full bg-foreground/5 group-hover:bg-accent group-hover:text-black transition-colors">
                  {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
