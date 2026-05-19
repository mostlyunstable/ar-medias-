import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <h2 className="text-8xl md:text-9xl font-black uppercase tracking-tight text-accent mb-4 font-heading drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">404</h2>
      <p className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-8">Page Not Found</p>
      <p className="text-foreground/70 max-w-md mb-12 text-lg">
        The digital space you are looking for doesn't exist, has been moved, or is currently offline.
      </p>
      <Link href="/" className="px-8 py-4 bg-foreground text-background font-bold rounded-full uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        Return to Homepage
      </Link>
    </div>
  );
}
