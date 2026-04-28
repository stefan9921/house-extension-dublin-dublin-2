import Link from "next/link";

type HeaderProps = {
  active?: "home" | "services" | "areas" | "about" | "faq" | "contact";
};

export default function Header({ active = "home" }: HeaderProps) {
  const navItem = (label: string, href: string, key: HeaderProps["active"]) => {
    const isActive = active === key;
    const baseClass =
      "transition-all hover:bg-opacity-80 transition-colors hover:text-[#A82323] duration-300";
    return (
      <Link
        key={key}
        href={href}
        className={
          isActive
            ? `text-[#A82323] border-b-2 border-[#A82323] pb-1 ${baseClass}`
            : `text-slate-600 ${baseClass}`
        }
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Sticky Header */}
      <header className="fixed top-0 w-full z-50 glass-nav shadow-[0px_20px_40px_rgba(27,27,27,0.06)] transition-colors duration-300 border-b border-surface-container-low hidden md:block">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center h-20 px-8">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xl font-bold uppercase tracking-tighter text-[#A82323] flex items-center gap-2 font-display"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                architecture
              </span>
              House Extension Dublin
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
            {navItem("Home", "/", "home")}
            {navItem("Services", "/services", "services")}
            {navItem("Areas", "/areas", "areas")}
            {navItem("About", "/about", "about")}
            {navItem("FAQ", "/faq", "faq")}
            {navItem("Contact", "/contact", "contact")}
          </nav>
          <div className="flex items-center gap-4">
            <a
              className="hidden lg:flex items-center gap-2 text-primary font-medium text-sm hover:opacity-80 transition-opacity"
              href="tel:+35312308892"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              +353 1 230 8892
            </a>
            <Link
              href="/contact"
              className="btn-gradient text-on-primary px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity active:scale-100"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </header>
      {/* Mobile top bar */}
      <div className="h-20 md:hidden bg-surface-container-low flex items-center justify-center border-b border-surface-variant/30 px-4 fixed top-0 w-full z-40">
        <Link
          href="/"
          className="text-lg font-bold uppercase tracking-tighter text-[#A82323] flex items-center gap-2 font-display"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            architecture
          </span>
          House Extension Dublin
        </Link>
      </div>
    </>
  );
}
