"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-12 py-4 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-foreground/10" : ""}`}>
      <div className="flex items-center gap-3">
        {/* AR Medias Logo */}
        <div className="w-5 h-5 bg-foreground rotate-45 flex items-center justify-center" />
        <span className="font-bold tracking-widest uppercase text-lg">AR Medias</span>
      </div>

      <div className="hidden md:flex items-center justify-center p-1 bg-foreground/5 backdrop-blur-md rounded-full border border-foreground/10">
        <button
          onClick={() => setTheme("light")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
            mounted && theme === "light"
              ? "bg-foreground text-background shadow-sm"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
            mounted && theme === "dark"
              ? "bg-foreground text-background shadow-sm"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          Dark
        </button>
      </div>

      <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
        {["About", "Services", "Portfolio", "Contact"].map((item) => (
          <li key={item}>
            <Link href={`#${item.toLowerCase()}`} className="text-foreground/70 hover:text-foreground transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Button - simplified */}
      <button className="md:hidden p-2 text-foreground">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  );
}
