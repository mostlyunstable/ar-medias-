export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        <p className="text-foreground/50 uppercase tracking-widest font-semibold text-sm animate-pulse">Loading AR Medias...</p>
      </div>
    </div>
  );
}
