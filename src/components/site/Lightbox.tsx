import { useEffect } from "react";
import { X } from "lucide-react";

export function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm animate-fade-up"
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-background/90 p-2 text-foreground shadow-soft transition hover:scale-110"
        aria-label="Fechar"
      >
        <X className="size-5" />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-luxe"
      />
    </div>
  );
}
