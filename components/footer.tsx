"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-foreground text-background py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 bg-background rotate-45" />
            <span className="font-bold tracking-widest uppercase text-xl font-heading">AR Medias</span>
          </div>
          <p className="text-background/70 text-sm mb-6 leading-relaxed">
            Scalable digital ecosystems for startups, brands, creators, and businesses. Future-ready IT solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-background/70 text-sm">
            <li><Link href="#home" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="#portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
            <li><Link href="#why-choose-us" className="hover:text-accent transition-colors">Why Choose Us</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold uppercase tracking-wider mb-6 text-sm">Services</h4>
          <ul className="flex flex-col gap-3 text-background/70 text-sm">
            <li><Link href="#services" className="hover:text-accent transition-colors">Development</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">AI & Automation</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Digital Marketing</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Creative Services</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Advanced Tech</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold uppercase tracking-wider mb-6 text-sm">Contact Information</h4>
          <ul className="flex flex-col gap-3 text-background/70 text-sm">
            <li>Email: <a href="mailto:info@armedias.com" className="hover:text-accent transition-colors">info@armedias.com</a></li>
            <li>Phone: <a href="tel:+917701897557" className="hover:text-accent transition-colors">+91 7701897557</a></li>
            <li>Instagram: <a href="https://instagram.com/ar_medias" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">@ar_medias</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between text-sm text-background/50">
        <p>&copy; {new Date().getFullYear()} AR Medias. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-accent">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
