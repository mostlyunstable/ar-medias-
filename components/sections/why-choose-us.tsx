"use client";

import { motion } from "framer-motion";

const reasons = [
  { title: "Scalable Solutions", desc: "Built to support long-term business growth and expansion." },
  { title: "Fast Delivery", desc: "Efficient workflows and rapid project execution." },
  { title: "Innovation-Driven Systems", desc: "Modern technology combined with strategic problem-solving." },
  { title: "Automation-Focused Approach", desc: "Reducing manual operations through smart digital systems." },
  { title: "Long-Term Support", desc: "Continuous optimization, updates, and technical assistance." },
  { title: "Growth-Oriented Solutions", desc: "Focused on performance, scalability, and measurable impact." }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-32 bg-foreground text-background w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tight font-heading mb-20 text-center"
        >
          Why AR Medias
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={reason.title}
              className="border-t border-background/20 pt-6"
            >
              <div className="text-accent text-sm font-mono mb-4">0{i + 1}</div>
              <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-background/70 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
