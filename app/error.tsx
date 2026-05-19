"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[APP_ERROR]", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <h2 className="text-4xl font-black uppercase tracking-tight text-red-500 mb-4">Something went wrong</h2>
      <p className="text-foreground/70 max-w-md mb-8">
        We encountered a critical error while loading this page. Our engineering team has been notified.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-foreground text-background font-bold rounded-full uppercase text-sm tracking-wider hover:scale-105 transition-transform"
        >
          Try Again
        </button>
        <Link href="/" className="px-6 py-3 border border-foreground/20 font-bold rounded-full uppercase text-sm tracking-wider hover:bg-foreground/5 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
