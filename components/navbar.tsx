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
    // passive: true — removes Lighthouse Best Practices warning about blocking scroll
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between px-6 md:px-12 py-4 ${scrolled ? "glass-panel bg-background/60 py-3" : "bg-transparent"}`}
    >
      <Link href="#home" aria-label="AR Medias — Go to homepage" className="flex items-center gap-3 group cursor-pointer">
        <div className="w-5 h-5 bg-foreground rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110 group-hover:bg-accent" aria-hidden="true" />
        <span className="font-bold tracking-widest uppercase text-lg group-hover:text-accent transition-colors duration-500">AR Medias</span>
      </Link>

      <div className="hidden md:flex items-center justify-center p-1 bg-foreground/5 backdrop-blur-md rounded-full border border-foreground/10" role="group" aria-label="Color theme">
        <button
          onClick={() => setTheme("light")}
          aria-label="Switch to light mode"
          aria-pressed={mounted && theme === "light"}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${mounted && theme === "light" ? "bg-foreground text-background shadow-sm" : "text-foreground/60 hover:text-foreground"}`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          aria-label="Switch to dark mode"
          aria-pressed={mounted && theme === "dark"}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${mounted && theme === "dark" ? "bg-foreground text-background shadow-sm" : "text-foreground/60 hover:text-foreground"}`}
        >
          Dark
        </button>
      </div>

      <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider" role="list">
        {["About", "Services", "Portfolio", "Contact"].map((item) => (
          <li key={item}>
            <Link href={`#${item.toLowerCase()}`} className="text-foreground/70 hover:text-foreground transition-colors relative group">
              {item}
              <span aria-hidden="true" className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden p-2 text-foreground"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
  );
}
