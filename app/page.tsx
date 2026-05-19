import { Hero }        from "@/components/hero";
import { Clients }     from "@/components/sections/clients";
import { About }       from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Footer }      from "@/components/footer";
import dynamic from "next/dynamic";

// Only client components need code-splitting — server components are zero JS
const Services     = dynamic(() => import("@/components/sections/services").then(m => ({ default: m.Services })));
const Portfolio    = dynamic(() => import("@/components/sections/portfolio").then(m => ({ default: m.Portfolio })));
const Testimonials = dynamic(() => import("@/components/sections/testimonials").then(m => ({ default: m.Testimonials })));
const Contact      = dynamic(() => import("@/components/sections/contact").then(m => ({ default: m.Contact })));

export const revalidate = 3600; // Cache for 1 hour

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Clients />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
