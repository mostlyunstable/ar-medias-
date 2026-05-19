"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { submitContactForm } from "@/lib/actions/contact";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  async function handleAction(formData: FormData) {
    setLoading(true);
    setStatus(null);
    try {
      const result = await submitContactForm(formData);
      if (result.error) {
        setStatus({ success: false, message: result.error });
      } else {
        setStatus({ success: true, message: result.message });
        // Optional: Reset form here
      }
    } catch (err) {
      setStatus({ success: false, message: "A network error occurred." });
    }
    setLoading(false);
  }

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
          <form action={handleAction} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input required name="name" id="name" type="text" className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input required name="email" id="email" type="email" className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors" placeholder="john@company.com" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium">Company Name (Optional)</label>
              <input name="company" id="company" type="text" className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors" placeholder="Company LLC" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-sm font-medium">Service Interested In</label>
              <select name="service" id="service" defaultValue="" className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors appearance-none">
                <option value="" disabled>Select a service...</option>
                <option value="development">Development Services</option>
                <option value="ai-automation">AI & Automation</option>
                <option value="marketing">Digital Marketing</option>
                <option value="creative">Creative Services</option>
                <option value="advanced-tech">Advanced Tech Services</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea required name="message" id="message" rows={4} className="bg-transparent border-b border-foreground/20 py-3 focus:border-accent outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>

            {status && (
              <div className={`p-4 rounded-lg text-sm font-medium ${status.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                {status.message}
              </div>
            )}

            <button disabled={loading} type="submit" className="mt-6 w-full py-4 bg-foreground text-background rounded-full font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
