"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-heading mb-8">
            Let's Build Something <span className="text-accent">Powerful</span> Together
          </h2>
          
          <div className="space-y-8 mt-12">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-2">Email</div>
              <a href="mailto:info@armedias.com" className="text-2xl hover:text-accent transition-colors">info@armedias.com</a>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-2">Phone</div>
              <a href="tel:+917701897557" className="text-2xl hover:text-accent transition-colors">+91 7701897557</a>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-2">Social & Direct</div>
              <div className="flex flex-col gap-3">
                <a href="https://instagram.com/ar_medias" target="_blank" rel="noreferrer" className="text-lg hover:text-accent transition-colors">Instagram: @ar_medias</a>
                <a href="#" className="text-lg hover:text-accent transition-colors">Chat With Us On WhatsApp</a>
                <a href="#" className="text-lg hover:text-accent transition-colors">Book Calendly Call</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-foreground/5 p-8 md:p-12 rounded-3xl"
        >
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Name</label>
                <input type="text" className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Company Name</label>
              <input type="text" className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors" placeholder="Company LLC" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Service Interested In</label>
              <select className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors appearance-none">
                <option value="" disabled selected>Select a service...</option>
                <option value="development">Development Services</option>
                <option value="ai-automation">AI & Automation</option>
                <option value="marketing">Digital Marketing</option>
                <option value="creative">Creative Services</option>
                <option value="advanced-tech">Advanced Tech Services</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Message</label>
              <textarea rows={4} className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="button" className="mt-6 w-full py-4 bg-foreground text-background rounded-full font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
