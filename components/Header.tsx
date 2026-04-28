import Link from "next/link";
import { SERVICES, AREAS } from "@/lib/site";

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

  const navItemWithDropdown = (
    label: string,
    href: string,
    key: HeaderProps["active"],
    items: Array<{ slug: string; name: string }>,
    basePath: string,
  ) => {
    const isActive = active === key;
    const baseClass =
      "transition-all hover:bg-opacity-80 transition-colors hover:text-[#A82323] duration-300 inline-flex items-center gap-1";
    return (
      <div key={key} className="relative group">
        <Link
          href={href}
          className={
            isActive
              ? `text-[#A82323] border-b-2 border-[#A82323] pb-1 ${baseClass}`
              : `text-slate-600 ${baseClass}`
          }
        >
          {label}
          <span
            className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-180"
            aria-hidden="true"
          >
            expand_more
          </span>
        </Link>
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 z-50">
          <div className="min-w-[240px] glass-nav border border-surface-container-low rounded-lg shadow-[0px_20px_40px_rgba(27,27,27,0.12)] py-2">
            <Link
              href={href}
              className="block px-4 py-2 text-sm font-semibold text-[#A82323] hover:bg-[#A82323]/5 transition-colors"
            >
              All {label}
            </Link>
            <div className="my-1 border-t border-surface-container-low" />
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`${basePath}/${item.slug}`}
                className="block px-4 py-2 text-sm text-slate-600 hover:text-[#A82323] hover:bg-[#A82323]/5 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
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
            {navItemWithDropdown("Services", "/services", "services", SERVICES, "/services")}
            {navItemWithDropdown("Areas", "/areas", "areas", AREAS, "/areas")}
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
