import { PortfolioGrid } from "./portfolio-grid";
import prisma from "@/lib/db";
import Link from "next/link";

export const revalidate = 3600; // Cache for 1 hour (ISR)

export async function Portfolio() {
  // Graceful fallback if database is not connected yet during build/dev
  let projects: any[] = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: { orderIndex: 'asc' },
      where: { deletedAt: null },
    });
  } catch (error) {
    console.warn("[PORTFOLIO_WARNING] Database not connected. Showing empty state.");
  }

  // Fallback mock data with premium real-world Unsplash photography
  if (projects.length === 0) {
    projects = [
      { id: "1", title: "E-Commerce OS", category: "Websites", description: "Scalable headless commerce platform.", thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop" },
      { id: "2", title: "Omni CRM", category: "Apps", description: "Internal management tool for logistics.", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { id: "3", title: "Support Bot X", category: "AI Systems", description: "LLM powered customer support agent.", thumbnail: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=800&auto=format&fit=crop" },
      { id: "4", title: "LeadGen Flow", category: "Automation", description: "Automated scraping & emailing pipeline.", thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" },
    ];
  }

  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-heading mb-6">
            Selected Projects
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl">
            A showcase of websites, applications, automation systems, AI solutions, and digital projects built for modern businesses.
          </p>
        </div>
        <Link href="#contact" className="px-8 py-4 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-all whitespace-nowrap">
          Work With Us
        </Link>
      </div>

      <PortfolioGrid projects={projects} />
    </section>
  );
}
