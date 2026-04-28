import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest border-t border-surface-variant/30 px-6 py-3 flex justify-between items-center z-50 ambient-shadow">
      <Link href="/" className="flex flex-col items-center gap-1 text-primary">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          home
        </span>
        <span className="text-[10px] font-medium">Home</span>
      </Link>
      <Link
        href="/services"
        className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors"
      >
        <span className="material-symbols-outlined">architecture</span>
        <span className="text-[10px] font-medium">Services</span>
      </Link>
      <Link
        href="/areas"
        className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors"
      >
        <span className="material-symbols-outlined">photo_library</span>
        <span className="text-[10px] font-medium">Areas</span>
      </Link>
      <Link
        href="/contact"
        className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors"
      >
        <span className="material-symbols-outlined">mail</span>
        <span className="text-[10px] font-medium">Contact</span>
      </Link>
    </nav>
  );
}
