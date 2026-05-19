"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "AR Medias completely transformed our backend operations. The automation systems they built reduced our manual workload by 70%.",
    author: "Sarah J.",
    company: "TechFlow"
  },
  {
    text: "The website they developed is not only visually stunning but incredibly fast. Our conversion rates have doubled since launch.",
    author: "Michael T.",
    company: "Lumina Systems"
  },
  {
    text: "True professionals. They understood our need for a scalable SaaS architecture and delivered beyond our expectations.",
    author: "David L.",
    company: "Nova Growth"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tight font-heading mb-6"
        >
          Client Feedback
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/70 text-lg max-w-2xl mx-auto"
        >
          Trusted by startups, businesses, and modern brands across multiple industries.
        </motion.p>
      </div>

      <ul className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar" role="list">
        {testimonials.map((item, i) => (
          <li
            key={i}
            role="listitem"
            className="min-w-[85vw] md:min-w-[400px] snap-center bg-foreground/5 p-10 rounded-3xl"
          >
            <svg aria-hidden="true" className="w-10 h-10 text-accent mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10.003 6C4.488 6 0 10.488 0 16.003v10h10v-10H5.53C5.787 11.87 9.176 8.5 13.337 8.5V6h-3.334zm18.663 0C23.15 6 18.663 10.488 18.663 16.003v10h10v-10h-4.47c.257-4.133 3.646-7.5 7.807-7.5V6h-3.334z"/>
            </svg>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground/90">
              "{item.text}"
            </p>
            <div>
              <div className="font-semibold">{item.author}</div>
              <div className="text-foreground/50 text-sm mt-1">{item.company}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
