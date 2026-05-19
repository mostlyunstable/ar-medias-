export function About() {
  return (
    <section id="about" className="content-section py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-heading">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-accent mt-8" />
        </div>
        <div className="fade-in-up fade-in-up-d2 space-y-6 text-foreground/80 text-lg md:text-xl leading-relaxed">
          <p><strong className="text-foreground font-semibold">AR Medias</strong> is a modern IT solutions and digital growth company focused on building scalable digital ecosystems for startups, brands, creators, and businesses.</p>
          <p>We combine software development, AI systems, automation, and digital growth strategies to help businesses operate smarter, scale faster, and build stronger digital infrastructure.</p>
          <p>Our goal is to reduce manual work, eliminate repetitive operations, improve efficiency, and create systems that support long-term business growth.</p>
          <p>From websites and applications to AI-powered automation systems, AR Medias provides complete digital solutions under one roof.</p>
        </div>
      </div>
    </section>
  );
}
