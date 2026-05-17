import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Clients } from "@/components/sections/clients";
import { Portfolio } from "@/components/sections/portfolio";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

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
